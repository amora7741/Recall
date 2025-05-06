import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="grid w-full place-items-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-3xl font-bold sm:text-5xl">
          This page does not exist...
        </p>
        <Button asChild>
          <Link href="/">
            <span className="text-lg">Go Home</span>
            <MoveRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
