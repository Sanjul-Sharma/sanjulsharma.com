import Link from "next/link";
import Section from "./Section";
import Ledger from "./Ledger";
import { builds, games } from "@/content/entries";

/** The signature: everything running right now, as a ledger. */
export default function RunningNow() {
  return (
    <Section id="running" title="Running now" eyebrow="Side projects">
      <p className="mb-8 max-w-xl text-base leading-relaxed text-muted">
        Most of my side projects start as “this should really just run
        itself.” These do. Each row is live, unattended, and doing a job for
        me or for friends today.
      </p>
      <Ledger entries={[...builds, ...games]} heading="Project" />
      <div className="mt-6 flex gap-6 text-sm">
        <Link href="/builds" className="link">
          All builds
        </Link>
        <Link href="/games" className="link">
          Games by Splitz Interactive
        </Link>
      </div>
    </Section>
  );
}
