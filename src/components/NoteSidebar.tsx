import { getUser } from "@/utils/supabase/server";
import { Button } from "./ui/button";
import Link from "next/link";
import { prisma } from "@/db/prisma";
import { Note } from "@prisma/client";

const NoteSidebar = async () => {
  const user = await getUser();

  if (!user) {
    return (
      <div className="grid w-80 place-items-center border-r bg-muted p-4 sm:p-8">
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg">Log in to view your notes!</p>
          <Button asChild>
            <Link href="/login">Log In</Link>
          </Button>
        </div>
      </div>
    );
  }

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
