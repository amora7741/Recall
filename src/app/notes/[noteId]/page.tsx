import AskAIButton from "@/components/AskAIButton";
import NoteTextInput from "@/components/NoteTextInput";
import { Button } from "@/components/ui/button";
import { prisma } from "@/db/prisma";
import { getUser } from "@/utils/supabase/server";
import { ArrowLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const NotePage = async ({
  params,
}: {
  params: Promise<{ noteId: string }>;
}) => {
  const { noteId: noteIdParam } = await params;
  const user = await getUser();

  if (!user) {
    return (
      <div className="grid size-full place-items-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-3xl font-bold">
            Log in to view this note.
          </p>
          <Button asChild>
            <Link href="/login">
              <span>Log In</span>
              <MoveRight />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const noteId = noteIdParam || "";

  const note = await prisma.note.findUnique({
    where: { id: noteId, authorId: user.id },
  });

  if (!note) {
    notFound();
  }

  return (
    <div className="mx-auto flex size-full max-w-4xl flex-col gap-4 p-4 sm:p-8">
      <div className="flex items-center justify-between">
        <Button className="size-fit rounded-full p-2" asChild>
          <a href="/notes">
            <ArrowLeft />
          </a>
        </Button>

        <AskAIButton />
      </div>

      <NoteTextInput noteId={note.id} noteText={note.text} />
    </div>
  );
};

export default NotePage;
