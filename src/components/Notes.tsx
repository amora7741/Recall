"use client";

import { useNotesStore } from "@/store/notes";
import { Note } from "@prisma/client";

const Notes = ({ initialNotes }: { initialNotes: Note[] }) => {
  const { currentNote } = useNotesStore();

  if (initialNotes.length === 0) {
    return <p className="text-center italic">No notes found.</p>;
  }

  return (
    <div className="flex flex-col gap-2 px-4 pb-4 sm:px-8 sm:pb-8">
      {initialNotes.map((note) => {
        const displayText =
          currentNote && currentNote.id === note.id
            ? currentNote.text
            : note.text;

        return (
          <a
            key={note.id}
            className="rounded-lg bg-primary p-2 text-white"
            href={`/notes/${note.id}`}
          >
            <p className="truncate">{displayText || "Empty Note"}</p>

            <p className="text-right text-sm">
              {new Date(note.updatedAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: undefined,
                hour12: true,
              })}
            </p>
          </a>
        );
      })}
    </div>
  );
};

export default Notes;
