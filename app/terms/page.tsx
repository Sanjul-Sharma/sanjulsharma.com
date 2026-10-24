import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { person } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service — Couch Jury Poster",
  description: "Terms for using the Couch Jury Poster app.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="October 24, 2026"
      intro="Couch Jury Poster is a private, single-user tool that publishes videos to accounts its owner controls. These terms are short because the app is not offered to the public."
      sections={[
        {
          heading: "Who may use it",
          body: (
            <p>
              The app is operated by Sanjul Sharma for the Couch Jury accounts.
              It is not available for other people or accounts, and connecting
              an account you do not own is not permitted.
            </p>
          ),
        },
        {
          heading: "What it does",
          body: (
            <p>
              It uploads videos and captions the owner has prepared to TikTok and
              Instagram on a schedule, using each platform&apos;s official API,
              and records the resulting post links. Every post is content the
              owner created or has the rights to publish, and it follows each
              platform&apos;s community guidelines and terms.
            </p>
          ),
        },
        {
          heading: "Platform terms",
          body: (
            <p>
              Use of the app is also governed by TikTok&apos;s Terms of Service
              and Instagram&apos;s Terms of Use. If those terms and these ever
              conflict, the platform&apos;s terms win.
            </p>
          ),
        },
        {
          heading: "No warranty",
          body: (
            <p>
              The app is provided as is. Posts can fail or be delayed when a
              platform changes its API or rejects a video, and the owner accepts
              that risk.
            </p>
          ),
        },
        {
          heading: "Changes",
          body: (
            <p>
              These terms may change as the app does. The date at the top is the
              date of the current version.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Sanjul Sharma,{" "}
              <a className="underline" href={`mailto:${person.email}`}>
                {person.email}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
