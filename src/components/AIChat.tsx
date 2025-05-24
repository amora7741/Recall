"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateAIResponse } from "@/actions/ai";

import DOMPurify from "dompurify";

export function AIChat() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const currentMessages = [...messages, userMessage];
      const result = await generateAIResponse(currentMessages);

      if ("errorMessage" in result && result.errorMessage) {
        throw new Error(result.errorMessage);
      }

      const answer =
        "answer" in result
          ? result.answer
          : "Sorry, I couldn't generate a response.";

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: answer,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error generating AI response:", error);

      const errorMessage: ChatMessage = {
        role: "assistant",
        content:
          "Sorry, there was an error processing your request. Please try again later.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex h-[70vh] w-full flex-col">
      <div className="border-b px-4 py-3">
        <h2 className="text-lg font-semibold">Recall AI Assistant</h2>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto bg-secondary/10 px-4 py-2">
        {messages.length === 0 && (
          <div className="py-8 text-center text-muted-foreground">
            <h3 className="mb-2 text-lg font-medium">
              How can I help you with your notes?
            </h3>
            <div className="mx-auto max-w-md space-y-2">
              <p className="text-sm">Ask me about your notes or try:</p>
              <div className="grid gap-2">
                <Button
                  variant="outline"
                  className="justify-start text-sm"
                  onClick={() => {
                    setInputValue("Create a quiz based on ");
                    inputRef.current?.focus();
                  }}
                >
                  &ldquo;Create a quiz based on [topic]&rdquo;
                </Button>
                <Button
                  variant="outline"
                  className="justify-start text-sm"
                  onClick={() => {
                    setInputValue("Do I have any notes about ");
                    inputRef.current?.focus();
                  }}
                >
                  &ldquo;Do I have any notes about [topic]?&rdquo;
                </Button>
                <Button
                  variant="outline"
                  className="justify-start text-sm"
                  onClick={() => {
                    setInputValue("Summarize my notes from the last week");
                    inputRef.current?.focus();
                  }}
                >
                  &ldquo;Summarize my notes from the last week&rdquo;
                </Button>
              </div>
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              message.role === "user" ? "items-end" : "items-start"
            }`}
          >
            <div className="mb-1 px-2 text-xs text-muted-foreground">
              {message.role === "user" ? "You" : "AI Assistant"}
            </div>
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {message.role === "assistant" ? (
                <div
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(message.content),
                  }}
                />
              ) : (
                <p>{message.content}</p>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex flex-col items-start">
            <div className="mb-1 px-2 text-xs text-muted-foreground">
              AI Assistant
            </div>
            <div className="rounded-lg bg-secondary px-4 py-2 text-secondary-foreground">
              <p className="animate-pulse">Thinking...</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t p-4"
      >
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask about your notes..."
          disabled={isLoading}
          className="flex-1"
        />
        <Button
          type="submit"
          size="icon"
          disabled={isLoading || !inputValue.trim()}
        >
          <Send className="size-4" />
          <span className="sr-only">Send</span>
        </Button>
      </form>
    </div>
  );
}
