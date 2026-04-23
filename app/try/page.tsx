"use client";

import { useState } from "react";
import Link from "next/link";

function generateNewsletter(things: [string, string, string]): string {
  return `This week was one of those weeks that reminds you why you do what you do.

First up: ${things[0]}. I keep thinking about this because it is the kind of thing that feels small in the moment but shifts how you see everything after. The takeaway? Pay attention to the quiet signals — they tend to be the loudest ones in hindsight.

Then there was the matter of ${things[1]}. I did not plan for this to be a theme of the week, but here we are. What I have learned is that the interesting stuff rarely shows up on your calendar. It just happens, and you either notice or you do not.

And finally, ${things[2]}. If you had told me a month ago this would be on my radar, I would have laughed. But that is the whole point of writing a newsletter — you process the week by putting it into words, and the words surprise you.

Until next time — keep paying attention to the things that do not quite fit. That is usually where the good stuff is hiding.`;
}

export default function TryPage() {
  const [things, setThings] = useState(["", "", ""]);
  const [newsletter, setNewsletter] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function updateThing(index: number, value: string) {
    setThings((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (things.some((t) => !t.trim())) return;
    setNewsletter(generateNewsletter(things as [string, string, string]));
  }

  async function handleCopy() {
    if (!newsletter) return;
    await navigator.clipboard.writeText(newsletter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleReset() {
    setThings(["", "", ""]);
    setNewsletter(null);
    setCopied(false);
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-500" />
          Quilled
        </Link>
        <Link
          href="/#waitlist"
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          Get early access
        </Link>
      </nav>

      <div className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Ghostwriter preview
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">
            Tell us three things. Get a newsletter.
          </h1>
        </div>

        {newsletter === null ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {[0, 1, 2].map((i) => (
              <div key={i}>
                <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                  Thing {i + 1}
                </label>
                <input
                  type="text"
                  required
                  placeholder={
                    i === 0
                      ? "e.g. Had a great call with a potential investor"
                      : i === 1
                      ? "e.g. Finally shipped the redesigned onboarding"
                      : "e.g. Realized our pricing page needs work"
                  }
                  value={things[i]}
                  onChange={(e) => updateThing(i, e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/10"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              Generate newsletter
            </button>
          </form>
        ) : (
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
              <span className="text-indigo-600">Your draft</span>
              <span className="text-neutral-400">
                {newsletter.split(/\s+/).length} words
              </span>
            </div>
            <div className="mt-5 whitespace-pre-line text-sm leading-relaxed text-neutral-800">
              {newsletter}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleCopy}
                className="flex-1 rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
              >
                {copied ? "Copied!" : "Copy to clipboard"}
              </button>
              <button
                onClick={handleReset}
                className="flex-1 rounded-xl border border-neutral-300 px-4 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
              >
                Start over
              </button>
            </div>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-neutral-400">
          This is a v0 preview with template prose.{" "}
          <Link href="/#waitlist" className="underline hover:text-neutral-600">
            Join the waitlist
          </Link>{" "}
          for the full ghostwriter experience.
        </p>
      </div>
    </div>
  );
}
