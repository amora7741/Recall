import { getUser } from "@/utils/supabase/server";
import { prisma } from "@/db/prisma";
import CreateNoteButton from "@/components/CreateNoteButton";
import Notes from "@/components/Notes";
import { Note } from "@prisma/client";

const NoteSidebar = async () => {
  const user = await getUser();

  if (!user) return null;

  const notes: Note[] = await prisma.note.findMany({
    where: { authorId: user.id },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="relative w-80 overflow-y-auto border-r bg-muted">
      <div className="sticky top-0 z-10 flex items-center justify-between bg-muted/80 p-4 backdrop-blur-lg sm:p-8">
        <h1 className="text-xl font-semibold">My Notes</h1>

        <CreateNoteButton showText={false} />
      </div>

      <Notes initialNotes={notes} />
    </div>
  );
};

export default NoteSidebar;
