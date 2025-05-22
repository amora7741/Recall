import { Bot } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const AskAIButton = () => {
  return (
    <Button>
      <Bot />
      <span>Ask AI</span>
    </Button>
  );
};

export default AskAIButton;
