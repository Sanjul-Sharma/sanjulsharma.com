import { person } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-1 px-6 py-8 text-center">
        <p className="text-xs text-muted">Built with Next.js & Tailwind CSS</p>
        <p className="text-xs text-muted-2">
          © {new Date().getFullYear()} {person.name}
        </p>
      </div>
    </footer>
  );
}
