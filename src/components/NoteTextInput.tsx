"use client";

import { updateNoteAction } from "@/actions/notes";
import { useNotesStore } from "@/store/notes";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

let updateTimeout: NodeJS.Timeout;

const NoteTextInput = ({
  noteId,
  noteText,
}: {
  noteId: string;
  noteText: string;
}) => {
  const [text, setText] = useState(noteText);
  const [isSaving, setIsSaving] = useState(false);
  const { updateCurrentNote, clearCurrentNote } = useNotesStore();

  useEffect(() => {
    return () => {
      clearCurrentNote();
    };
  }, [clearCurrentNote]);

  const handleUpdateNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    setIsSaving(true);

    updateCurrentNote(noteId, newText);

    clearTimeout(updateTimeout);

    updateTimeout = setTimeout(async () => {
      await updateNoteAction(noteId, newText);

      setIsSaving(false);
    }, 1500);
  };

  return (
    <div className="relative size-full">
      <Textarea
        placeholder="Type your notes here.."
        autoFocus
        className="size-full resize-none bg-background p-12 !text-lg"
        onChange={handleUpdateNote}
        value={text}
      />

      {isSaving && (
        <span className="absolute right-4 top-4 rounded-lg bg-primary/10 p-2 text-sm text-primary">
          Saving...
        </span>
      )}
    </div>
  );
};

export default NoteTextInput;
