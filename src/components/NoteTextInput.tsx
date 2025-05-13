import { Textarea } from "./ui/textarea";

const NoteTextInput = () => {
  return (
    <Textarea
      placeholder="Type your notes here.."
      className="size-full resize-none"
    />
  );
};

export default NoteTextInput;
