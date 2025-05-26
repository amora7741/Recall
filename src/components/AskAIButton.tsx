"use client";

import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AIChat } from "@/components/AIChat";

const AskAIButton = () => {
  return (
    <Dialog>
      <DialogTitle className="sr-only">Ask AI Assistant</DialogTitle>
      <DialogDescription className="sr-only">
        Interface to chat with the AI assistant about your notes.
      </DialogDescription>
      <DialogTrigger asChild>
        <Button>
          <Bot />
          <span>Ask AI</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-[800px]">
        <AIChat />
      </DialogContent>
    </Dialog>
  );
};

export default AskAIButton;
