import { getUser } from "@/utils/supabase/server";
import { prisma } from "@/db/prisma";
import CreateNoteButton from "@/components/CreateNoteButton";
import Notes from "@/components/Notes";
import { Note } from "@prisma/client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const NoteSidebar = async () => {
  const user = await getUser();

  if (!user) return null;

  const notes: Note[] = await prisma.note.findMany({
    where: { authorId: user.id },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="ml-4 mt-4 size-fit p-2 sm:ml-8 sm:mt-8 md:hidden">
            <Menu />
            <span className="text-xs">Notes</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="h-dvh overflow-y-auto">
          <div className="flex items-center justify-between pt-8 sm:px-4">
            <SheetTitle>My Notes</SheetTitle>

            <CreateNoteButton hideText />
          </div>
          <SheetDescription className="pb-4 sm:px-4">
            Create, edit, and delete your notes here.
          </SheetDescription>

          <Notes initialNotes={notes} listClassName="sm:p-4" />
        </SheetContent>
      </Sheet>

      <div className="relative hidden w-64 overflow-y-auto border-r bg-muted md:block lg:w-80">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-muted/80 p-4 backdrop-blur-lg sm:p-8">
          <h1 className="text-xl font-semibold">My Notes</h1>
          <CreateNoteButton hideText />
        </div>

        <Notes
          initialNotes={notes}
          hideDeleteButton
          listClassName="p-4 !pt-2 sm:p-8"
        />
      </div>
    </>
  );
};

export default NoteSidebar;
