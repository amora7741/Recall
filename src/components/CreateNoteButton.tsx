"use client";

import { createNoteAction } from "@/actions/notes";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { LoaderCircle, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateNoteButton = ({ hideText = false }: { hideText?: boolean }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { toast } = useToast();

  const handleClick = () => {
    startTransition(async () => {
      const uuid = uuidv4();

      const { errorMessage } = await createNoteAction(uuid);

      if (errorMessage) {
        toast({
          variant: "destructive",
          title: "Error",
          description: errorMessage,
        });

        return;
      }

      router.push(`/notes/${uuid}`);

      router.refresh();
    });
  };

  return (
    <Button
      className={hideText ? "h-fit w-10 p-2" : "w-36"}
      onClick={handleClick}
      disabled={isPending}
    >
      {isPending ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <>
          {!hideText && <span>Create Note</span>}
          <Plus />
        </>
      )}
    </Button>
  );
};

export default CreateNoteButton;
