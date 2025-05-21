import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const DeleteNoteButton = () => {
  return (
    <Button
      className="absolute right-3 hidden group-focus-within/note:flex group-hover/note:flex"
      size="icon"
      variant="ghost"
      aria-label="Delete Note"
      title="Delete Note"
    >
      <Trash2 />
    </Button>
  );
};

export default DeleteNoteButton;
