"use client";

import { useNotesStore } from "@/store/notes";
import { Note } from "@prisma/client";
import { useState, useMemo, useEffect } from "react";
import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import DeleteNoteButton from "@/components/DeleteNoteButton";
import { cn } from "@/lib/utils";
import Link from "next/link";
const Notes = ({
  initialNotes,
  listClassName,
  hideDeleteButton = false,
}: {
  initialNotes: Note[];
  listClassName?: string;
  hideDeleteButton?: boolean;
}) => {
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

  if (localNotes.length === 0) {
    return <p className="text-center italic">No notes found.</p>;
  }

  return (
    <div className={cn("space-y-4", listClassName)}>
      <div className="relative flex items-center">
        <SearchIcon className="absolute left-2 size-4" />
        <Input
          className="pl-8"
          placeholder="Search your notes..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <ul className="space-y-2">
        {filteredNotes.map((note) => (
          <li
            key={note.id}
            className="group/note relative flex items-center rounded-lg bg-primary pr-14 text-white"
          >
            <a className="size-full p-2" href={`/notes/${note.id}`}>
              <p className="truncate">{note.text || "Empty Note"}</p>
              <p className="text-xs">
                {new Date(note.updatedAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: undefined,
                  hour12: true,
                })}
              </p>
            </a>

            <DeleteNoteButton hidden={hideDeleteButton} noteId={note.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
