import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 sm:px-8">
      <Link className="text-2xl font-bold text-rose-500" href="/">
        Recall
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
