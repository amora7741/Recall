import { getUser } from "@/utils/supabase/server";
import { prisma } from "@/db/prisma";
import { Note } from "@prisma/client";

const NoteSidebar = async () => {
  const user = await getUser();

  if (!user) return null;

  const notes: Note[] = await prisma.note.findMany({
    where: { authorId: user.id },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="w-80 border-r bg-muted p-4 sm:p-8">
      <h1 className="text-xl font-semibold">My Notes</h1>
    </div>
  );
};

export default NoteSidebar;
