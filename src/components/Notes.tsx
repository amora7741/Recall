"use client";

import { useNotesStore } from "@/store/notes";
import { Note } from "@prisma/client";
import { useState, useMemo, useEffect } from "react";
import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Notes = ({ initialNotes }: { initialNotes: Note[] }) => {
  const { currentNote } = useNotesStore();
  const [searchText, setSearchText] = useState("");
  const [localNotes, setLocalNotes] = useState(initialNotes);

  useEffect(() => {
    setLocalNotes(initialNotes);
  }, [initialNotes]);

  const realTimeNotes = useMemo(() => {
    return localNotes.map((note) => {
      if (currentNote && currentNote.id === note.id) {
        return { ...note, text: currentNote.text };
      }
      return note;
    });
  }, [localNotes, currentNote]);

  const fuse = useMemo(() => {
    return new Fuse(realTimeNotes, {
      keys: ["text"],
      threshold: 0.4,
    });
  }, [realTimeNotes]);

  const filteredNotes = searchText
    ? fuse.search(searchText).map((result) => result.item)
    : realTimeNotes;

  if (initialNotes.length === 0) {
    return <p className="text-center italic">No notes found.</p>;
  }

  return (
    <div className="flex flex-col gap-2 px-4 pb-4 sm:px-8 sm:pb-8">
      <div className="relative mb-2 flex items-center">
        <SearchIcon className="absolute left-2 size-4" />
        <Input
          className="pl-8"
          placeholder="Search your notes..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {filteredNotes.map((note) => {
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
