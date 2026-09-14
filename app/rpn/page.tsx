import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Checklist } from '../../components/placement-checklist';

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Arun Jacob" template — this
  // page is shared publicly and shouldn't carry the site owner's name.
  title: { absolute: 'Practical Nursing at Fanshawe Woodstock' },
  description:
    'Intakes, admission requirements, deadlines and the three-year part-time course plan for the Practical Nursing diploma at Fanshawe College’s Woodstock campus.',
  alternates: {
    canonical: '/rpn',
  },
  openGraph: {
    title: 'Practical Nursing at Fanshawe Woodstock',
    description:
      'Intakes, admission requirements, deadlines and the three-year part-time course plan for the Practical Nursing diploma at Fanshawe College’s Woodstock campus.',
    url: 'https://arunjacob.com/rpn',
    siteName: 'Practical Nursing at Fanshawe Woodstock',
    locale: 'en_CA',
    type: 'article',
  },
  twitter: {
    title: 'Practical Nursing at Fanshawe Woodstock',
    description:
      'Intakes, admission requirements, deadlines and the three-year part-time course plan for Fanshawe’s Woodstock campus.',
    card: 'summary_large_image',
  },
};

/* ---------- content ---------- */

const intakes = [
  {
    term: 'January 2027',
    where: 'Woodstock · part-time',
    status: 'closed' as const,
    statusLabel: 'Closed',
    note: 'The most recent Woodstock part-time start. It ran as a real intake, but the application window has passed — offers for that term are being confirmed between now and 10 December 2026.',
  },
  {
    term: 'September 2027',
    where: 'London · part-time',
    status: 'next' as const,
    statusLabel: 'Next fall cycle',
    note: 'A Fall-start part-time stream at the London campus. Not yet published, but the September intake cycles annually. Requires evening travel to London.',
  },
  {
    term: 'January 2028',
    where: 'Woodstock · part-time',
    status: 'unpub' as const,
    statusLabel: 'Not yet published',
    note: 'Woodstock part-time runs a Winter start — January intakes appear in both 2026 and 2027 — so a January 2028 start is the expected next Woodstock intake.',
  },
];

const requirements = [
  { code: 'Grade 12 English', grade: 'College (C) or University (U)' },
  { code: 'Grade 11 or 12 Biology', grade: 'College (C) or University (U)' },
  { code: 'Grade 11 or 12 Chemistry', grade: 'College (C) or University (U)' },
  { code: 'Grade 11 or 12 Math', grade: 'Grade 11 (U or M) or Grade 12 (C or U)' },
];

const englishTests = [
  { test: 'IELTS Academic', score: '7.0 overall; no band below 6.5 in reading and listening; 7.0 in writing and speaking' },
  { test: 'TOEFL iBT (2026)', score: '5.5 overall; no band below 5 in reading and listening, 5.5 writing and speaking' },
  { test: 'Duolingo', score: '135 overall, Literacy minimum 130, no sub-score below 125' },
  { test: 'CAEL', score: '70 in writing, reading and speaking; 80 in listening' },
  { test: 'PTE Academic', score: '65' },
];

const duolingoScores = [
  { name: 'Literacy', formula: 'Reading + Writing' },
  { name: 'Comprehension', formula: 'Reading + Listening' },
  { name: 'Conversation', formula: 'Speaking + Listening' },
  { name: 'Production', formula: 'Speaking + Writing' },
];

const plan = [
  {
    term: 'Winter — Year 1',
    courses: [
      { code: 'ANAT-1005', name: 'Anatomy & Physiology 1' },
      { code: 'PSYC-1044', name: 'Personal & Working Relationships' },
      { code: 'NRSG-1012', name: 'Self and Others' },
      { code: 'WRIT-1048', name: 'Reason & Writing 1 for Health Sciences' },
    ],
  },
  {
    term: 'Spring — Year 1',
    courses: [
      { code: 'ANAT-1012', name: 'Anatomy & Physiology 2' },
      { code: 'NUTR-3001', name: 'Nutrition for Life' },
      { code: 'PHRM-3004', name: 'Pharmacology' },
    ],
  },
  {
    term: 'Fall — Year 1',
    courses: [
      { code: 'NRSG-1011', name: 'Health & Transitions 1' },
      { code: 'NRSG-1013', name: 'Laboratory Practice 1' },
      { code: 'NRSG-1014', name: 'Professional Nursing Practice 1' },
      { code: 'MATH-2001', name: 'Math for Medications' },
    ],
  },
  {
    term: 'Winter — Year 2',
    courses: [
      { code: 'NRSG-1015', name: 'Health and Transitions 2' },
      { code: 'NRSG-1017', name: 'Laboratory Practice 2' },
      { code: 'NRSG-1018', name: 'Professional Practice 2' },
    ],
  },
  {
    term: 'Spring — Year 2 · joins full-time cohort',
    courses: [
      { code: 'NRSG-3011', name: 'Healing and Episodic Health Challenges 1' },
      { code: 'NRSG-1016', name: 'Health Promotion' },
      { code: 'NRSG-3012', name: 'Professional Practice 3' },
    ],
  },
  {
    term: 'Fall — Year 2',
    courses: [
      { code: 'NRSG-3013', name: 'Healing and Episodic Health Challenges 2' },
      { code: 'NRSG-3014', name: 'Nursing Issues' },
      { code: 'NRSG-3015', name: 'Professional Practice 4' },
      { code: 'TBD', name: 'General Education Elective' },
    ],
  },
  {
    term: 'Winter — Year 3',
    courses: [{ code: 'NRSG-5008', name: 'Professional Practice 5' }],
  },
];

const funding = [
  {
    name: 'Ontario Learn and Stay Grant',
    open: false,
    why: 'Requires full-time study (60%+ load). Covers tuition, compulsory fees, books and supplies. Names Fanshawe’s Practical Nursing diploma at the Woodstock campus specifically.',
  },
  {
    name: 'Better Jobs Ontario',
    open: false,
    why: 'Caps funded training at two years; this program is three. Also requires being laid off, or unemployed 12+ weeks in a low-income household.',
  },
  {
    name: 'Ontario Job Grant',
    open: false,
    why: 'The employer applies, not the individual. 52-week cap.',
  },
  {
    name: 'Part-time OSAP',
    open: true,
    why: 'A separate application from full-time OSAP, term by term. Covers tuition, books, transport and child care — but not living costs.',
  },
  {
    name: 'Canada Student Grant for Part-Time Students',
    open: true,
    why: '$2,520 for 2026–27, or $2,688 with dependants. Arrives automatically with part-time OSAP.',
  },
  {
    name: 'Canada Training Credit',
    open: true,
    why: '$250 accumulates per year to a $5,000 lifetime cap; claim 50% of eligible fees on line 45350. No part-time distinction.',
  },
  {
    name: 'Fanshawe Continuing Education Bursary',
    open: true,
    why: 'Up to $2,500 per year for up to four years. Tuition and textbooks only. First-come, first-served.',
  },
  {
    name: 'BGC London Community Bursary',
    open: true,
    why: '$500–$2,000, explicitly open to full-time or part-time students.',
  },
];

const timeline = [
  {
    date: '7 Nov 2026',
    what: 'Fall Open House',
    detail: 'Register to visit and speak to the program team in person.',
  },
  {
    date: 'Early Oct 2026',
    what: 'OCAS applications open for Fall 2027',
    detail: 'Ontario college applications for the following September cycle open in the autumn. Confirm the exact date on ontariocolleges.ca.',
  },
  {
    date: '1 Feb 2027',
    what: 'Equal consideration deadline',
    detail: 'Apply by this date for competitive programs. This is the deadline that decides whether you are ranked or left picking over remaining seats.',
  },
  {
    date: 'Ongoing',
    what: 'Transcripts and documents',
    detail: 'Applicants are responsible for ordering and submitting every document. Fanshawe cannot pull files held by other institutions.',
  },
];

const contacts = [
  {
    name: 'Woodstock/Oxford Regional Campus',
    role: '369 Finkle Street, Woodstock, ON N4V 1A3 · 519-421-0144 · Mon–Fri 8:30–16:30',
    email: 'oxford@fanshawec.ca',
  },
  {
    name: 'Jennifer Black',
    role: 'Coordinator, Practical Nursing Program — Woodstock',
    email: 'jennifer.black@fanshawec.ca',
  },
  {
    name: 'Tam Visser',
    role: 'Academic and Student Services Consultant — course selection and academic planning',
    email: 't_visser2@fanshawec.ca',
  },
  {
    name: 'Anita Murray',
    role: 'Clinical/Placement Liaison, Practical Nursing and PSW',
    email: 'a_murray273607@fanshawec.ca',
  },
  {
    name: 'Sarandan Heuston',
    role: 'Coordinator, Pre-Health Sciences — and PN/PSW Lab Practice Lead',
    email: 'sheuston@fanshawec.ca',
  },
  {
    name: 'Pre-Admissions Advisors',
    role: 'Eligibility questions, English language waivers, international education',
    email: 'advising@fanshawec.ca',
  },
  {
    name: 'Fanshawe Student Awards',
    role: 'Bursaries, and whether part-time PNG5W is OSAP-approved',
    email: 'studentawards@fanshawec.ca',
  },
  {
    name: 'Community Employment Services, Woodstock',
    role: '40 Metcalf St, Woodstock · 519-539-8161 · the authoritative word on Better Jobs Ontario',
    email: 'info@cesoxford.ca',
  },
];

const placementGroups = [
  {
    heading: 'Medical',
    items: [
      { id: 'm1', label: 'Two-step Tuberculosis Mantoux skin test', note: 'Required regardless of BCG vaccination. Positive result needs a chest x-ray.' },
      { id: 'm2', label: 'MMR immunity', note: 'Bloodwork or proof of the 2-dose series. Bloodwork valid 10 years.' },
      { id: 'm3', label: 'Varicella immunity', note: 'Bloodwork or proof of the 2-dose series. Valid 10 years.' },
      { id: 'm4', label: 'Tetanus / Diphtheria / Pertussis (Tdap)', note: 'Includes an adult pertussis dose received on or after your 18th birthday.' },
      { id: 'm5', label: 'Polio', note: 'Completion of the initial series.' },
      { id: 'm6', label: 'Hepatitis B immunity', note: 'Confirmed by bloodwork; non-reactive results need at least 2 doses.' },
      { id: 'm7', label: 'COVID-19 vaccination series' },
      { id: 'm8', label: 'Influenza shot', note: 'Required each fall by 15 November.' },
    ],
  },
  {
    heading: 'Non-medical',
    items: [
      { id: 'n1', label: 'CPR — Basic Life Support (BLS)', note: 'Renewed annually. Must be in-person or blended; fully online courses do not qualify.' },
      { id: 'n2', label: 'Standard First Aid', note: 'Valid 3 years.' },
      { id: 'n3', label: 'N95 mask fit testing', note: 'Valid 2 years.' },
      { id: 'n4', label: 'Police Vulnerable Sector Check', note: 'Valid 1 year. Police services can take several weeks or longer.' },
      { id: 'n5', label: 'Non-Violent Crisis Intervention (NVCI)', note: 'Both parts, through Safe Management Group.' },
      { id: 'n6', label: 'WSIB declaration', note: 'Signed form.' },
      { id: 'n7', label: 'WHMIS certificate', note: 'Free online module.' },
      { id: 'n8', label: 'Worker Health and Safety Awareness in 4 Steps', note: 'Ministry of Labour online module.' },
      { id: 'n9', label: 'Pledge of Confidentiality and Accountability' },
      { id: 'n10', label: 'Placement and Student Agreement' },
    ],
  },
];

/* ---------- styles ---------- */

const h2 = 'text-[20px] sm:text-[23px] font-semibold tracking-tight leading-snug';
const note = 'text-[14px] leading-relaxed text-[#78716C] dark:text-[#A8A29E]';
const body = 'text-[15px] leading-relaxed';
const card = 'rounded border border-[#E7E5E4] dark:border-[#292524] bg-white dark:bg-[#1C1917]';
const mono = 'font-mono text-[12px] text-[#0F6153] dark:text-[#5FC7B0]';

const pillStyles: Record<string, string> = {
  closed: 'bg-[#FAE7E2] dark:bg-[#331B16] text-[#9C2F17] dark:text-[#E8907A] border-[#9C2F17] dark:border-[#E8907A]',
  next: 'bg-[#E6F0ED] dark:bg-[#16302B] text-[#0F6153] dark:text-[#5FC7B0] border-[#0F6153] dark:border-[#5FC7B0]',
  unpub: 'bg-[#F5F5F4] dark:bg-[#292524] text-[#78716C] dark:text-[#A8A29E] border-[#D6D3D1] dark:border-[#44403C]',
};

function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6">
      <h2 className={h2}>{title}</h2>
      {intro ? <p className={`${note} mt-2 mb-6`}>{intro}</p> : <div className="mb-5" />}
      {children}
    </section>
  );
}

/* ---------- page ---------- */

export default function RpnPage() {
  return (
    <div className="space-y-14">
      {/* header */}
      <header className="pb-7 border-b-2 border-[#1A1A1A] dark:border-[#EBEBEA]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F6153] dark:text-[#5FC7B0] mb-3">
          Fanshawe College · Woodstock/Oxford Regional Campus
        </p>
        <h1 className="text-[30px] sm:text-[38px] font-bold tracking-tight leading-[1.08] mb-4">
          Practical Nursing, part-time
        </h1>
        <p className="text-[16px] leading-relaxed text-[#57534E] dark:text-[#A8A29E] mb-6">
          A reference for the part-time Practical Nursing diploma at Fanshawe’s Woodstock campus —
          intakes, admission requirements, the three-year course plan, deadlines and the pre-placement
          checklist. Compiled from the college’s own program, admissions and campus pages.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-4 border-t border-[#E7E5E4] dark:border-[#292524] text-[11px] text-[#78716C] dark:text-[#A8A29E]">
          <span className="font-mono">PNG5W</span>
          <span>Ontario College Diploma</span>
          <span>63 weeks</span>
          <span>Verified 14 Sept 2026</span>
        </div>
      </header>

      {/* intakes */}
      <Section
        id="intakes"
        title="Where the intakes stand"
        intro="Fanshawe publishes intake availability per catalog year. On the 2026/2027 catalog, every listed intake is marked Closed."
      >
        <div className="space-y-3">
          {intakes.map((i) => (
            <div key={i.term + i.where} className={`${card} p-4`}>
              <span
                className={`inline-block text-[10px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-sm border mb-2.5 ${pillStyles[i.status]}`}
              >
                {i.statusLabel}
              </span>
              <p className="font-semibold text-[16px]">{i.term}</p>
              <p className="text-[13px] text-[#78716C] dark:text-[#A8A29E] mb-2">{i.where}</p>
              <p className="text-[13.5px] leading-relaxed text-[#57534E] dark:text-[#A8A29E]">{i.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* requirements */}
      <Section
        id="requirements"
        title="What you need to get in"
        intro="An Ontario Secondary School Diploma (OSSD) or equivalent — or mature applicant status — with a minimum final grade of 65% in each of four courses."
      >
        <ul className="grid sm:grid-cols-2 gap-px bg-[#E7E5E4] dark:bg-[#292524] border border-[#E7E5E4] dark:border-[#292524] rounded overflow-hidden mb-6">
          {requirements.map((r) => (
            <li key={r.code} className="bg-white dark:bg-[#1C1917] p-3.5">
              <span className={`${mono} block mb-1`}>{r.code}</span>
              <span className="text-[13px] text-[#78716C] dark:text-[#A8A29E]">{r.grade}</span>
            </li>
          ))}
        </ul>

        <p className={`${body} mb-6`}>
          <strong className="font-semibold">On the math requirement:</strong> Fanshawe warns that Grade
          12 Foundations for College Math (MAP4C) may not adequately prepare you. A minimum of MCT4C is
          recommended if you are using a college-level math to meet the requirement.
        </p>

        <h3 className="text-[16px] font-semibold mb-2">Meeting 65% is not the same as getting in</h3>
        <p className={`${body} mb-5`}>
          Practical Nursing is a competitive program — Fanshawe receives more qualified applicants than
          it has seats. Applicants are ranked on grades in the four required courses above, and on grades
          from post-secondary study (the 12 most recent college or university courses).
        </p>

        <div className="grid sm:grid-cols-3 gap-px bg-[#E7E5E4] dark:bg-[#292524] border border-[#E7E5E4] dark:border-[#292524] rounded overflow-hidden mb-5">
          {[
            { num: '80%', lab: 'Average in required courses among successful applicants' },
            { num: 'B', lab: 'Minimum post-secondary course average among successful applicants' },
            { num: '59%', lab: 'Of eligible Woodstock applicants received an offer' },
          ].map((s) => (
            <div key={s.num} className="bg-white dark:bg-[#1C1917] p-4">
              <div className="font-semibold text-[26px] leading-none tracking-tight text-[#0F6153] dark:text-[#5FC7B0] tabular-nums">
                {s.num}
              </div>
              <div className="text-[12.5px] leading-snug text-[#78716C] dark:text-[#A8A29E] mt-2">{s.lab}</div>
            </div>
          ))}
        </div>

        <p className={`${body} mb-6`}>
          Woodstock is meaningfully less competitive than London: Woodstock offered to 59% of eligible
          applicants with the remainder waitlisted, while London offered to only 35% and did not admit
          51%. A small number of Woodstock applicants were admitted directly from high school.
        </p>

        <h3 className="text-[16px] font-semibold mb-2">If you do not meet the requirements</h3>
        <p className={body}>
          Fanshawe’s recommended route is the one-year{' '}
          <strong className="font-semibold">Pre-Health Sciences Pathway to Certificates and Diplomas (PHS2)</strong>.
          Graduates who finish with a cumulative GPA of 3.0 and no grade below 65% in the required courses
          meet the admission requirements and make a stronger application — the post-secondary grades
          count in the competitive ranking.
        </p>
      </Section>

      {/* english */}
      <Section
        id="english"
        title="English language requirements"
        intro="If English is not your first language, Practical Nursing is classified as a health career program and needs stronger scores than a standard diploma. Results must be within the last two years."
      >
        <ul className="space-y-2.5 mb-6">
          {englishTests.map((t) => (
            <li
              key={t.test}
              className="pb-2.5 border-b border-[#E7E5E4] dark:border-[#292524] last:border-0 last:pb-0"
            >
              <p className="font-semibold text-[14.5px]">{t.test}</p>
              <p className="text-[13.5px] leading-relaxed text-[#57534E] dark:text-[#A8A29E]">{t.score}</p>
            </li>
          ))}
        </ul>

        <h3 className="text-[16px] font-semibold mb-2">How the Duolingo score works</h3>
        <p className={`${body} mb-4`}>
          All Duolingo English Test scores sit on a single <strong className="font-semibold">10–160
          scale</strong> — a scaled score, not a percentage. The test reports four individual subscores,
          and your overall score is the <strong className="font-semibold">average of those four</strong>,
          so a weak skill cannot be carried by a strong one.
        </p>
        <p className={`${body} mb-4`}>
          On top of those, four integrated subscores are reported, each the average of two individual ones:
        </p>

        <ul className="grid sm:grid-cols-2 gap-px bg-[#E7E5E4] dark:bg-[#292524] border border-[#E7E5E4] dark:border-[#292524] rounded overflow-hidden mb-5">
          {duolingoScores.map((d) => (
            <li key={d.name} className="bg-white dark:bg-[#1C1917] p-3.5">
              <span className="font-semibold text-[14px] block">{d.name}</span>
              <span className="font-mono text-[12px] text-[#78716C] dark:text-[#A8A29E]">{d.formula}</span>
            </li>
          ))}
        </ul>

        <p className={`${body} mb-4`}>
          Fanshawe’s structure — 135 overall, a Literacy floor of 130, and nothing else below 125 — is
          worth reading closely. The Literacy floor is a deliberate check on{' '}
          <strong className="font-semibold">academic reading and writing</strong>, the two skills a
          nursing diploma leans on hardest. In effect: don’t show up able to chat but unable to write.
        </p>
        <p className={`${body} mb-4`}>
          By Duolingo’s published comparison, 135 is <strong className="font-semibold">CEFR C1</strong>,
          roughly <strong className="font-semibold">TOEFL iBT 104–108</strong>. Two things follow. First,
          it is a demanding bar, and stricter than the rest of Fanshawe’s own table — the college accepts
          TOEFL iBT 92 for health programs, which by Duolingo’s own equivalence sits well below 135. If
          there is a choice of tests, that is worth knowing before picking one. Second, the jump from a
          standard diploma (105) to a health program (135) is roughly B2 to C1 — a different level of
          proficiency, not a nudge.
        </p>
        <p className={body}>
          A free practice test on Duolingo’s site gives an estimated score range before paying for a
          certified one. The requirement can be waived in specific cases — for example, if you hold
          college- or university-level English credits from grades 9, 10, 11 and 12 completed in Canada.
          ESL credits do not count for health career programs.
        </p>
      </Section>

      {/* plan */}
      <Section
        id="plan"
        title="The three-year part-time plan"
        intro="PNG5W runs on a fixed Winter-start progression. Levels 1 and 2 are completed over four part-time semesters, then students join the full-time cohort. Fanshawe states plainly that this schedule cannot be changed in any way."
      >
        <div className="space-y-5 mb-7">
          {plan.map((sem) => (
            <div key={sem.term}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.09em] text-[#78716C] dark:text-[#A8A29E] pb-1.5 mb-0.5 border-b-2 border-[#1A1A1A] dark:border-[#EBEBEA]">
                {sem.term}
              </h3>
              <ul>
                {sem.courses.map((c) => (
                  <li
                    key={c.code}
                    className="flex gap-2.5 py-1.5 border-b border-[#E7E5E4] dark:border-[#292524] text-[13.5px]"
                  >
                    <span className={`${mono} w-[68px] sm:w-[82px] shrink-0 pt-px`}>{c.code}</span>
                    <span className="leading-snug">{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-[16px] font-semibold mb-2">How the part-time terms actually run</h3>
        <p className={`${body} mb-4`}>
          Classes are in the evenings, Monday to Friday, 17:00–20:00. Clinical placements fall on the
          weekend — one or both days, depending on the placement. Laboratory and clinical practice begins
          in the Fall term of Year 2, the third semester.
        </p>
        <p className={`${body} mb-6`}>
          Two constraints worth knowing before committing: students admitted to PNG5W in Woodstock cannot
          transfer to the London campus at any point, and the progression itself cannot be altered.
        </p>

        <h3 className="text-[16px] font-semibold mb-2">London’s part-time stream, for comparison</h3>
        <p className={body}>
          The London part-time stream (PNG5, Fall start) runs evenings 17:00–22:00 with placements Friday
          through Sunday, and is more flexible — courses can generally be taken in any order. It is
          in-person in London, not online, despite the URL it is published under. For anyone in Woodstock
          that means evening commuting to London for the first two years.
        </p>
      </Section>

      {/* dates */}
      <Section
        id="dates"
        title="Dates that matter"
        intro="The single most important date is the equal consideration deadline. Applications to a competitive program received by that date go through the competitive ranking process; anything later is assessed in date order against whatever seats remain."
      >
        <div className="border-t-2 border-[#1A1A1A] dark:border-[#EBEBEA]">
          {timeline.map((t) => (
            <div
              key={t.what}
              className="grid sm:grid-cols-[150px_1fr] gap-x-5 gap-y-1 py-3 border-b border-[#E7E5E4] dark:border-[#292524]"
            >
              <div className="font-mono text-[12.5px] font-medium text-[#0F6153] dark:text-[#5FC7B0]">
                {t.date}
              </div>
              <div>
                <p className="font-semibold text-[14.5px]">{t.what}</p>
                <p className="text-[13.5px] leading-relaxed text-[#78716C] dark:text-[#A8A29E]">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* apply */}
      <Section
        id="apply"
        title="How to apply"
        intro="Part-time programs that lead to an Ontario College credential use the same application process as full-time programs — there is no separate part-time portal."
      >
        <ol className="space-y-4">
          {[
            {
              b: 'Confirm eligibility first.',
              t: 'Check the four required courses at 65% or better, and settle the English language question if it applies. Get pre-application advice sorted before spending an application.',
            },
            {
              b: 'Speak to an advisor.',
              t: 'Fanshawe advises anyone with international education, or a break of more than five years from high school, to talk to a Pre-Admissions and Pathways Advisor before applying. They can also confirm which intake is opening next.',
            },
            {
              b: 'Apply on OCAS.',
              t: 'Submit through the Ontario College Application Service at ontariocolleges.ca, finding the program by code — PNG5W for Woodstock part-time, PNG5 for London part-time.',
            },
            {
              b: 'Submit transcripts.',
              t: 'Order them through OCAS. Missing documents stall an application, and for a competitive program a stalled application ranks poorly.',
            },
            {
              b: 'Accept the offer and pay the deposit.',
              t: 'Each term has a non-refundable deposit deadline and a final payment deadline. For part-time students the deposit is paid upfront, then credited against tuition once courses are selected.',
            },
            {
              b: 'Register course by course.',
              t: 'Part-time students enrol one course at a time each semester, up to three courses per term, following the progression plan.',
            },
            {
              b: 'Complete post-admission requirements.',
              t: 'These must be done before the first class. Missing them can mean being withdrawn and having to reapply for the next intake.',
            },
          ].map((s, i) => (
            <li key={s.b} className="grid grid-cols-[26px_1fr] gap-3">
              <span className="w-[26px] h-[26px] grid place-items-center rounded-full bg-[#0F6153] dark:bg-[#5FC7B0] text-white dark:text-[#0F1614] font-semibold text-[12px]">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-[14.5px]">{s.b}</p>
                <p className="text-[13.5px] leading-relaxed text-[#57534E] dark:text-[#A8A29E]">{s.t}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* checklist */}
      <Section
        id="checklist"
        title="Pre-placement checklist"
        intro="Clinical placements require a stack of medical and non-medical clearances, all uploaded to Fanshawe’s Synergy system. Several take weeks to obtain — the police check especially — so start early. Ticking items saves progress in this browser only."
      >
        <Checklist groups={placementGroups} />
      </Section>

      {/* cost */}
      <Section id="cost" title="What it costs">
        <div className="grid sm:grid-cols-3 gap-px bg-[#E7E5E4] dark:bg-[#292524] border border-[#E7E5E4] dark:border-[#292524] rounded overflow-hidden mb-5">
          {[
            { num: '$9,884', lab: 'Total domestic program cost, Woodstock campus' },
            { num: '$46,033', lab: 'Total international program cost, for comparison' },
            { num: '$6.14', lab: 'Tuition per student contact hour, part-time' },
          ].map((s) => (
            <div key={s.num} className="bg-white dark:bg-[#1C1917] p-4">
              <div className="font-semibold text-[24px] leading-none tracking-tight text-[#0F6153] dark:text-[#5FC7B0] tabular-nums">
                {s.num}
              </div>
              <div className="text-[12.5px] leading-snug text-[#78716C] dark:text-[#A8A29E] mt-2">{s.lab}</div>
            </div>
          ))}
        </div>

        <p className={`${body} mb-4`}>
          Permanent residents and Canadian citizens are assessed domestic fees. Part-time fees are charged
          per course each term, based on contact hours plus ancillary fees. Ancillary fees are{' '}
          <strong className="font-semibold">$30.29 per course</strong> at a regional campus such as
          Woodstock, or $52.51 per course at a London campus. Clinical placement courses are charged at
          $6.14 per hour. Figures are estimates and are re-set annually.
        </p>
        <p className={body}>
          The published total excludes the health and dental plan, bus pass and other ancillary costs.
          Part-time post-secondary students are not automatically enrolled in the fitness pass, bus pass
          or health plan, but can purchase them separately through the Fanshawe Student Union.
        </p>
      </Section>

      {/* funding */}
      <Section
        id="funding"
        title="Paying for it"
        intro="Short answer on the career-switch grant: no — not for the part-time route. The obstacle is structural rather than immigration status. Permanent residents are eligible for these programs in principle; what disqualifies the part-time path is the three-year length and the part-time course load."
      >
        <div className="rounded border border-[#E7E5E4] dark:border-[#292524] border-l-4 border-l-[#9C2F17] dark:border-l-[#E8907A] bg-[#FAE7E2] dark:bg-[#331B16] p-4 mb-7">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9C2F17] dark:text-[#E8907A] mb-2">
            The decisive fork
          </span>
          <p className="text-[14px] leading-relaxed">
            The <strong className="font-semibold">Ontario Learn and Stay Grant</strong> names Fanshawe’s
            Practical Nursing diploma at the Woodstock campus specifically, and covers tuition, compulsory
            fees, books and supplies. But it requires full-time study. Choosing part-time closes the door
            on it. If full-time study is possible at all, that single change is likely worth more than
            everything else here combined. The trade-off is a service commitment: six months working in
            the Southwest region for every year funded.
          </p>
        </div>

        <ul className="space-y-3">
          {funding.map((f) => (
            <li key={f.name} className={`${card} p-3.5`}>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 mb-1.5">
                <span className="font-semibold text-[14.5px]">{f.name}</span>
                <span
                  className={`inline-block text-[10px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-sm border ${
                    f.open ? pillStyles.next : pillStyles.closed
                  }`}
                >
                  {f.open ? 'Available' : 'Not available'}
                </span>
              </div>
              <p className="text-[13.5px] leading-relaxed text-[#57534E] dark:text-[#A8A29E]">{f.why}</p>
            </li>
          ))}
        </ul>

        <h3 className="text-[16px] font-semibold mt-7 mb-2">Three things to watch</h3>
        <p className={`${body} mb-3`}>
          <strong className="font-semibold">These generally cannot be stacked.</strong> The Learn and Stay
          Grant excludes anyone receiving Better Jobs Ontario or the Skills Development Fund. Fanshawe’s
          Continuing Education bursary requires that the applicant is not eligible for other assistance
          for the same courses, which likely makes it and part-time OSAP mutually exclusive. Compare and
          take the larger.
        </p>
        <p className={`${body} mb-3`}>
          <strong className="font-semibold">OSAP is shifting toward loans.</strong> For programs starting
          on or after 1 August 2026, Ontario reduced the grant portion for students at publicly assisted
          colleges. Expect less grant and more loan than older figures suggest.
        </p>
        <p className={body}>
          <strong className="font-semibold">Two things still need confirming.</strong> Whether the
          part-time PNG5W delivery is on OSAP’s approved-program list — Fanshawe only says “many” part-time
          programs qualify, and this determines whether OSAP is available at all or the bursary route is
          the fallback. And whether the Fanshawe Assistance Bursary is full-time only. Both are one call to
          Student Awards.
        </p>
      </Section>

      {/* contacts */}
      <Section
        id="contact"
        title="Who to talk to"
        intro="The Woodstock campus is small enough that the program coordinator is directly reachable — this is the fastest way to confirm which intake is opening next."
      >
        <ul className="grid sm:grid-cols-2 gap-px bg-[#E7E5E4] dark:bg-[#292524] border border-[#E7E5E4] dark:border-[#292524] rounded overflow-hidden">
          {contacts.map((c) => (
            <li key={c.email} className="bg-white dark:bg-[#1C1917] p-3.5">
              <p className="font-semibold text-[14px]">{c.name}</p>
              <p className="text-[12.5px] leading-snug text-[#78716C] dark:text-[#A8A29E] my-1">{c.role}</p>
              <p className="font-mono text-[11.5px] break-all text-[#0F6153] dark:text-[#5FC7B0]">
                {c.email}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <p className="text-[12.5px] leading-relaxed text-[#A8A29E] dark:text-[#78716C] pt-5 border-t border-[#E7E5E4] dark:border-[#292524]">
        Compiled 14 September 2026 from Fanshawe College’s program, admissions and campus pages, the
        2026/2027 PNG5W progression chart, and the 2026–2027 pre-placement checklist. Intake availability,
        fees and deadlines change — confirm anything decisive with the program coordinator before acting
        on it. Where a future intake is described as expected rather than published, it is inferred from
        the annual pattern and is not yet confirmed by the college.
      </p>
    </div>
  );
}
