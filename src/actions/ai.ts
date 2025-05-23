"use server";

import { prisma } from "@/db/prisma";
import { getUser } from "@/utils/supabase/server";
import { handleError } from "@/lib/utils";
import openai from "@/openai";

export async function generateAIResponse(messages: ChatMessage[]) {
  try {
    const user = await getUser();

    if (!user) throw new Error("You must be logged in to use the AI feature");

    const notes = await prisma.note.findMany({
      where: { authorId: user.id },
      select: { id: true, text: true },
    });

    const notesSummary =
      notes.length > 0
        ? notes
            .map((note) => `Note ID: ${note.id}\nContent: ${note.text}\n`)
            .join("\n---\n\n")
        : "No notes available";

    const systemMessage: ChatMessage = {
      role: "system",
      content: `You are a helpful AI assistant integrated into a note-taking app called Recall. Your ONLY purpose is to help users with their notes.

ALLOWED TASKS (only if they relate to the user's notes):
- Answer questions about the content of their notes
- Create quizzes or study materials based on their notes
- Summarize their notes
- Help find specific information within their notes
- Suggest ways to organize or improve their notes

EXPLICITLY PROHIBITED:
- Generating code or helping with programming
- Answering general knowledge questions unrelated to their notes
- Discussing topics not found in their notes
- Performing tasks outside the scope of note management
- Creating content unrelated to their existing notes

If asked to do something outside these boundaries, politely redirect the user to note-related tasks.
      
When responding, format your response in HTML. Use appropriate tags like <h1>, <h2>, <p>, <ul>, <li>, etc. 
Make sure to format things properly for readability.
      
Here are the user's notes for reference:
      
${notesSummary}`,
    };

    const fullMessages = [systemMessage, ...messages];

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: fullMessages,
      temperature: 0.7,
      max_tokens: 1500,
    });

    return {
      answer:
        response.choices[0].message.content ||
        "Sorry, I couldn't generate a response.",
      errorMessage: null,
    };
  } catch (error) {
    return handleError(error);
  }
}
