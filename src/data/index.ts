import { FeatureCard } from "@/types/feature-card";
import {
  Bot,
  BrainCircuit,
  FileText,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";

export const featureCards: FeatureCard[] = [
  {
    Icon: Bot,
    title: "AI Assistant",
    description:
      "Ask questions about your notes and get instant, contextual answers from your personal AI assistant.",
  },
  {
    Icon: Search,
    title: "Smart Search",
    description:
      "Find exactly what you need with natural language search that understands context and meaning.",
  },
  {
    Icon: Sparkles,
    title: "Idea Generation",
    description:
      "Stuck on a problem? Let Recall's AI suggest ideas and connections based on your existing notes.",
  },
  {
    Icon: FileText,
    title: "Distraction-Free Writing",
    description:
      "Clean interface that lets you focus on your thoughts without all the clutter.",
  },
  {
    Icon: Zap,
    title: "Instant Sync",
    description:
      "Your notes sync instantly across all your devices, so you're always up to date.",
  },
  {
    Icon: BrainCircuit,
    title: "AI Summarization",
    description:
      "Get concise summaries of your lengthy notes by leveraging AI.",
  },
];
