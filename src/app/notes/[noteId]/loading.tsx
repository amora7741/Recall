import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Bot, Ellipsis } from "lucide-react";

const Loading = () => {
  return (
    <div className="mx-auto flex size-full max-w-4xl flex-col gap-4 p-4 sm:p-8">
      <div className="flex items-center justify-between">
        <Button disabled className="size-fit rounded-full p-2">
          <ArrowLeft />
        </Button>

        <Button disabled>
          <Bot />
          <span>Ask AI</span>
        </Button>
      </div>

      <Skeleton className="grid size-full place-items-center bg-background">
        <Ellipsis className="size-10 animate-bounce text-primary" />
      </Skeleton>
    </div>
  );
};

export default Loading;
