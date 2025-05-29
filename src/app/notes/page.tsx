import CreateNoteButton from "@/components/CreateNoteButton";

import { getUser } from "@/utils/supabase/server";
import { prisma } from "@/db/prisma";
import { notFound } from "next/navigation";
import { FileText, Sparkles } from "lucide-react";
import AskAIButton from "@/components/AskAIButton";

const Notes = async () => {
  const user = await getUser();

  if (!user) notFound();

  const totalNotes = await prisma.note.count({
    where: { authorId: user.id },
  });

  return (
    <div className="size-full overflow-y-auto p-4 sm:p-8">
      <div className="relative mb-8 overflow-hidden rounded-lg bg-primary/10 p-8">
        <h1 className="text-xl font-bold sm:text-3xl lg:text-5xl">
          Welcome to Your Notes!
        </h1>

        <p className="text-xs italic text-muted-foreground sm:text-sm lg:text-lg">
          Your personal space for capturing ideas, organizing thoughts, and
          keeping track of important information.
        </p>

        <Sparkles className="absolute -bottom-6 -right-6 size-20 text-primary/40 lg:size-40" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full bg-primary/10 p-2 sm:p-3 md:p-4">
          <FileText className="size-6 text-primary sm:size-8 md:size-10" />
        </div>

        <p className="text-sm sm:text-lg lg:text-xl">
          {totalNotes > 0 ? (
            <>
              You have <span className="font-bold">{totalNotes}</span>{" "}
              {totalNotes === 1 ? "note" : "notes"} in total.
            </>
          ) : (
            <>You don&apos;t have any notes yet! Create one?</>
          )}
        </p>

        <div className="flex items-center gap-4">
          <CreateNoteButton />
          <AskAIButton />
        </div>
      </div>
    </div>
  );
};

export default Notes;
