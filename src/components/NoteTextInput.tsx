"use client";

import { updateNoteAction } from "@/actions/notes";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

let updateTimeout: NodeJS.Timeout;

const NoteTextInput = ({
  noteId,
  noteText,
}: {
  noteId: string;
  noteText: string;
}) => {
  const [text, setText] = useState(noteText);

  const handleUpdateNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);

    clearTimeout(updateTimeout);

    updateTimeout = setTimeout(() => {
      updateNoteAction(noteId, newText);
    }, 1500);
  };

  return (
    <Textarea
      placeholder="Type your notes here.."
      className="size-full resize-none"
      onChange={handleUpdateNote}
      value={text}
    />
  );
};

export default NoteTextInput;
