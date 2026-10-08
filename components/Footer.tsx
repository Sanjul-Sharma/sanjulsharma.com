import Link from "next/link";
import { person } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-8">
        <p className="mono text-xs text-muted-2">
          © {new Date().getFullYear()} {person.name}
        </p>
        <p className="mono text-xs text-muted-2">
          Games published as{" "}
          <Link href="/games" className="text-muted hover:text-accent">
            Splitz Interactive
          </Link>
        </p>
      </div>
    </footer>
  );
}
