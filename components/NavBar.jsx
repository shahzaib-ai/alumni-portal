import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function NavBar() {
  return (
    <header className="py-12 flex flex-row justify-between">
      {" "}
      <a href="/">
        <h4 className="ml-4 md:ml-20 text-primary font-bold">
          COMSIANS&apos; Connect
        </h4>
      </a>
      <nav className="mx-4 flex flex-row gap-4">
        <div className="hover:translate-y-1 transition-all w-min">
          <Link
            href="/signup"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <strong>Sign Up</strong>
          </Link>
        </div>
        <div className="hover:translate-y-1 transition-all w-min">
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <strong>Login</strong>
          </Link>
        </div>
      </nav>
    </header>
  );
}
