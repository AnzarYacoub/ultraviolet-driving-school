import { AdminShell } from "@/components/AdminShell";
import { Badge, Button, Card, Field, InfoTile, SectionHeader, SelectField } from "@/components/ui";
import { mockTests, students } from "@/data/mock";
import { BookOpenCheck, LockKeyhole, RotateCcw } from "lucide-react";

export default function AdminMockTestsPage() {
  const test = mockTests[0];

  return (
    <AdminShell>
      <SectionHeader eyebrow="Mock Tests" title="Manage questions and attempts" copy="Create multiple-choice questions, review completed or locked attempts, and unlock/release another attempt when needed." />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <InfoTile icon={<BookOpenCheck size={18} />} label="Question Type" value="Multiple choice A/B/C/D" />
        <InfoTile icon={<LockKeyhole size={18} />} label="Attempt Rule" value="One attempt per student" />
        <InfoTile icon={<RotateCcw size={18} />} label="Admin Action" value="Unlock/release another attempt" />
      </div>
      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.95fr]">
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-black text-brand-ink">{test.title}</h2>
            <Badge tone="yellow">One attempt per student</Badge>
          </div>
          <div className="mt-5 grid gap-4">
            {test.questions.map((question, index) => (
              <div key={question.prompt} className="rounded-lg border border-black/10 p-4">
                <p className="font-bold text-brand-ink">{index + 1}. {question.prompt}</p>
                <div className="mt-3 grid gap-2 text-sm text-black/70">
                  {question.options.map((option, optionIndex) => (
                    <p key={option} className="rounded-md bg-black/[0.025] px-3 py-2">{String.fromCharCode(65 + optionIndex)}. {option}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-black text-brand-ink">Add Question</h2>
          <div className="mt-5 grid gap-4">
            <Field label="Question" placeholder="What does this road sign mean?" />
            <Field label="Option A" placeholder="Answer choice A" />
            <Field label="Option B" placeholder="Answer choice B" />
            <Field label="Option C" placeholder="Answer choice C" />
            <Field label="Option D" placeholder="Answer choice D" />
            <SelectField label="Correct Answer"><option>A</option><option>B</option><option>C</option><option>D</option></SelectField>
          </div>
          <Button className="mt-6">Save Question</Button>
        </Card>
      </div>
      <Card className="mt-6">
        <h2 className="text-xl font-black text-brand-ink">Student Attempts</h2>
        <div className="mt-5 table-wrap shadow-none">
          <table className="data-table">
            <thead><tr><th>Student</th><th>Status</th><th>Attempts</th><th>Action</th></tr></thead>
            <tbody>
              {students.map((item) => (
                <tr key={item.email}><td className="font-bold text-brand-ink">{item.name}</td><td>{item.mockTestStatus}</td><td>1 allowed</td><td><Button variant="ghost" className="min-h-9 px-3">Unlock Attempt</Button></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </AdminShell>
  );
}
