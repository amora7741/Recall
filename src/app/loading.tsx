import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="grid size-full place-items-center">
      <LoaderCircle className="size-20 animate-spin text-primary" />
    </div>
  );
};

export default Loading;
