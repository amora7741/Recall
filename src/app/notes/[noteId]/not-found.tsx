import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="grid size-full place-items-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-3xl font-bold">
          This note does not exist or you are not authorized to view it.
        </p>
        <Button asChild>
          <Link href="/notes">
            <span>Return</span>
            <MoveRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
