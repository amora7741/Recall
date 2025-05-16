import { getUser } from "@/utils/supabase/server";
import { prisma } from "@/db/prisma";
import { Note } from "@prisma/client";
import CreateNoteButton from "@/components/CreateNoteButton";
import Link from "next/link";

const NoteSidebar = async () => {
  const user = await getUser();

  if (!user) return null;

  const notes: Note[] = await prisma.note.findMany({
    where: { authorId: user.id },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="relative w-80 overflow-y-auto border-r bg-muted">
      <div className="sticky top-0 flex items-center justify-between bg-muted/80 p-4 backdrop-blur-lg sm:p-8">
        <h1 className="text-xl font-semibold">My Notes</h1>

        <CreateNoteButton showText={false} />
      </div>

      {notes.length === 0 ? (
        <p className="text-center italic">No notes found.</p>
      ) : (
        <div className="flex flex-col gap-2 px-4 pb-4 sm:px-8 sm:pb-8">
          {notes.map((note) => (
            <Link
              key={note.id}
              className="rounded-lg bg-primary p-2 text-white"
              href={`/notes/${note.id}`}
            >
              <p className="truncate">{note.text}</p>

              <p className="text-right text-sm">
                {note.updatedAt.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: undefined,
                  hour12: true,
                })}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteSidebar;
