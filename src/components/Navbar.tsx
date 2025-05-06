import { Brain } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <Link className="flex items-center gap-1" href="/">
        <Brain className="text-pink-500" />
        <span className="text-2xl font-bold">Recall</span>
      </Link>

      <div className="flex items-center gap-4">
        <Button asChild>
          <Link href="/login">Log In</Link>
        </Button>

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
