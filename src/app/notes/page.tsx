import CreateNoteButton from "@/components/CreateNoteButton";

import { getUser } from "@/utils/supabase/server";
import { prisma } from "@/db/prisma";
import { notFound } from "next/navigation";
import { FileText, Sparkles } from "lucide-react";

const Notes = async () => {
  const user = await getUser();

  if (!user) notFound();

  const totalNotes = await prisma.note.count({
    where: { authorId: user.id },
  });

  return (
    <div className="size-full overflow-y-auto p-4 sm:p-8">
      <div className="relative mb-8 overflow-hidden rounded-lg bg-primary/10 p-8">
        <h1 className="text-5xl font-bold">Welcome to Your Notes!</h1>

        <p className="text-lg italic text-muted-foreground">
          Your personal space for capturing ideas, organizing thoughts, and
          keeping track of important information.
        </p>

        <Sparkles className="absolute -bottom-6 -right-6 size-40 text-primary/40" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full bg-primary/10 p-4">
          <FileText className="size-10 text-primary" />
        </div>

        <p className="text-xl">
          {totalNotes > 0 ? (
            <>
              You have <span className="font-bold">{totalNotes}</span>{" "}
              {totalNotes === 1 ? "note" : "notes"} in total.
            </>
          ) : (
            <>You don&apos;t have any notes yet! Create one?</>
          )}
        </p>

        <CreateNoteButton />
      </div>
    </div>
  );
};

export default Notes;
