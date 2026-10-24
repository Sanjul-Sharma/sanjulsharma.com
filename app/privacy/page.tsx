import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { person } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Couch Jury Poster",
  description:
    "What the Couch Jury Poster app stores, why, and how to remove it.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 24, 2026"
      intro="Couch Jury Poster is a private tool built by Sanjul Sharma to schedule and publish short videos to the Couch Jury accounts on TikTok and Instagram. It has one user: the account owner. This page explains what it stores and what it does with it."
      sections={[
        {
          heading: "What the app collects",
          body: (
            <>
              <p>
                When you connect a TikTok or Instagram account, the app receives
                an access token and a refresh token from that platform, plus the
                account&apos;s public display name and numeric ID so it can
                confirm which account is connected. It does not collect email
                addresses, passwords, contacts, location, or any data about
                other users.
              </p>
              <p>
                The app also keeps the video files it posts, their captions, and
                a log of when each post went out and the link to it.
              </p>
            </>
          ),
        },
        {
          heading: "How it uses that data",
          body: (
            <p>
              Tokens are used only to upload and publish videos to the connected
              account and to read back the links of posts the app itself
              created. Nothing is used for advertising, analytics, profiling, or
              sold or shared with anyone.
            </p>
          ),
        },
        {
          heading: "Where it is stored",
          body: (
            <p>
              Tokens and the posting log are stored in a private, encrypted
              volume on a server operated by the account owner (hosted on
              Railway) and on the owner&apos;s own computer. Access requires a
              secret key held only by the owner.
            </p>
          ),
        },
        {
          heading: "Third parties",
          body: (
            <p>
              The app talks to TikTok&apos;s and Instagram&apos;s official APIs
              to publish content, and sends a notification to a private Discord
              channel when a post goes out. No other services receive any data.
            </p>
          ),
        },
        {
          heading: "Retention and deletion",
          body: (
            <p>
              Tokens are kept until the account is disconnected. You can revoke
              the app&apos;s access at any time from TikTok (Settings &gt;
              Security &gt; Manage app permissions) or Instagram (Settings
              &gt; Apps and websites), which makes the stored token useless. To
              have all stored data deleted, email the address below; it is
              removed within 7 days.
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
