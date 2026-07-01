"use client";

import { useState } from "react";
import { AlertTriangle, LockKeyhole, RotateCcw } from "lucide-react";
import { DashboardShell } from "@/components/DashboardShell";
import { Badge, Button, Card, InfoTile, SectionHeader } from "@/components/ui";
import { mockTests } from "@/data/mock";

export default function StudentMockTestPage() {
  const [submitted, setSubmitted] = useState(false);
  const test = mockTests[0];

  return (
    <DashboardShell>
      <SectionHeader eyebrow="Mock Test" title={test.title} copy="One attempt is available per student. Another attempt must be unlocked or released by admin." />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <InfoTile icon={<AlertTriangle size={18} />} label="Attempt Rule" value="One attempt only" />
        <InfoTile icon={<LockKeyhole size={18} />} label="After Submit" value="Attempt becomes locked" />
        <InfoTile icon={<RotateCcw size={18} />} label="Retake" value="Admin unlock required" />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Badge tone="purple">Attempt Status: {test.status}</Badge>
            <Badge tone="yellow">{test.attempts}</Badge>
          </div>
          <div className="mt-6 grid gap-5">
            {test.questions.map((question, index) => (
              <fieldset key={question.prompt} className="rounded-lg border border-black/10 p-4">
                <legend className="px-2 text-sm font-black text-brand-ink">{index + 1}. {question.prompt}</legend>
                <div className="mt-3 grid gap-2">
                  {question.options.map((option) => (
                    <label key={option} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-md bg-black/[0.025] px-3 py-2 text-sm text-black/70 transition hover:bg-brand-purpleSoft">
                      <input type="radio" name={`q-${index}`} />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
          <Button className="mt-6" onClick={() => setSubmitted(true)}>Submit Mock Test</Button>
        </Card>
        <Card className="h-fit">
          <Badge tone={submitted ? "purple" : "yellow"}>{submitted ? "Preview submitted" : "Not submitted"}</Badge>
          <h2 className="text-xl font-black text-brand-ink">Results</h2>
          {submitted ? (
            <p className="mt-3 leading-7 text-black/70">Prototype result submitted. In the Supabase version, scoring, attempt locking, and admin unlocks will be stored securely.</p>
          ) : (
            <p className="mt-3 leading-7 text-black/70">Submit the test to preview the result state. Once completed, the attempt becomes locked until admin releases another attempt.</p>
          )}
        </Card>
      </div>
    </DashboardShell>
  );
}
