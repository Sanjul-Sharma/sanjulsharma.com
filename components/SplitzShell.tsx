/**
 * Wraps the games pages in the Splitz Interactive system: its tokens and
 * typefaces are scoped by the data-brand attribute in globals.css.
 */
export default function SplitzShell({ children }: { children: React.ReactNode }) {
  return (
    <div data-brand="splitz" className="flex min-h-screen flex-col">
      <div className="seam fixed inset-x-0 top-0 z-[60]" aria-hidden />
      {children}
    </div>
  );
}
