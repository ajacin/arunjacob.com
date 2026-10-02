import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Checklist } from '../../components/placement-checklist';

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Arun Jacob" template — this
  // page is shared publicly and shouldn't carry the site owner's name.
  title: { absolute: 'Personal Support Worker at Fanshawe Woodstock' },
  description:
    'Intakes, admission requirements, English language requirements, the course plan, deadlines and the pre-placement checklist for the Personal Support Worker certificate at Fanshawe College’s Woodstock campus.',
  alternates: {
    canonical: '/psw',
  },
  openGraph: {
    title: 'Personal Support Worker at Fanshawe Woodstock',
    description:
      'Intakes, admission requirements, English language requirements, the course plan, deadlines and the pre-placement checklist for the Personal Support Worker certificate at Fanshawe College’s Woodstock campus.',
    url: 'https://arunjacob.com/psw',
    siteName: 'Personal Support Worker at Fanshawe Woodstock',
    locale: 'en_CA',
    type: 'article',
  },
  twitter: {
    title: 'Personal Support Worker at Fanshawe Woodstock',
    description:
      'Intakes, admission requirements, English language requirements and the pre-placement checklist for Fanshawe’s PSW certificate at the Woodstock campus.',
    card: 'summary_large_image',
  },
};

/* ---------- content ---------- */

const intakes = [
  {
    term: 'January 2027',
    where: 'Woodstock · full-time weekdays',
    status: 'open' as const,
    statusLabel: 'Open',
    note: 'The next Woodstock start, and the one to aim at. Winter intake offers are confirmed between 1 May and 10 December 2026, so the window to apply and accept is open now.',
  },
  {
    term: 'May 2027',
    where: 'Woodstock · full-time weekdays',
    status: 'open' as const,
    statusLabel: 'Open',
    note: 'A Summer start, also open. Woodstock runs a January and a May intake most years, so the two together are the realistic choices.',
  },
  {
    term: 'September 2026',
    where: 'Woodstock · full-time weekdays',
    status: 'closed' as const,
    statusLabel: 'Closed',
    note: 'This fall’s Woodstock intake has closed. So has January 2026. Both are listed here only to show the rhythm — Woodstock does not run a September PSW start.',
  },
];

const requirements = [
  {
    code: 'OSSD',
    grade: 'Ontario Secondary School Diploma with courses from the College (C), University (U), University/College (M) or Open (O) stream — or equivalent',
  },
  {
    code: 'Mature applicant',
    grade: 'Applicants without a diploma can be admitted as mature students',
  },
  {
    code: 'No set subjects',
    grade: 'PSW6 names no required courses and no minimum grade. Nothing to make up first',
  },
];

const recommended = [
  { code: 'Grade 12 English', grade: 'Any (C), (U) or (O)' },
  { code: 'Biology', grade: 'Grade 11 or Grade 12 (C) or (U)' },
  {
    code: 'Health Care or Human Development',
    grade: 'Grade 11 Health Care (C), or Grade 12 Human Development Throughout the Lifespan (M)',
  },
];

const englishTests = [
  { test: 'IELTS Academic', score: '6.0 overall; no band below 5.5' },
  { test: 'TOEFL iBT (2026)', score: '4.5 overall; no band below 4 — note the new 1–6 scale' },
  { test: 'TOEFL iBT (prior to 2026)', score: '79 overall' },
  { test: 'Duolingo', score: '105 overall, with no sub-score below 95' },
  { test: 'CAEL', score: '60 overall, no band below 50; 80 in listening' },
  { test: 'PTE Academic', score: '53 minimum, no band below 45' },
  { test: 'Cambridge English', score: '169 overall, no skill below 162' },
  { test: 'LanguageCert Academic', score: '65 overall, no skill below 60' },
  { test: 'ESL4 / GAP5', score: '80% in Level 8, 75% in Level 9, or 70% in Level 10' },
];

const courses = [
  { code: 'HLTH-1092', name: 'Foundations of Personal Support', hrs: '2' },
  { code: 'HLTH-1093', name: 'Health & Wellness', hrs: '5' },
  { code: 'HLTH-1094', name: 'Self & Others for PSW', hrs: '3' },
  { code: 'HLTH-1095', name: 'Human Body Structure & Function', hrs: '3' },
  { code: 'HLTH-1096', name: 'PSW Laboratory Practice', hrs: '1' },
  { code: 'HLTH-1098', name: 'Life Transitions', hrs: '2' },
  { code: 'HLTH-1099', name: 'Ongoing Health Challenges', hrs: '2' },
  { code: 'HLTH-1100', name: 'Mental Health & Cognitive Impairment', hrs: '2' },
  { code: 'HLTH-3047', name: 'PSW Laboratory Practice 2', hrs: '1' },
  { code: 'HLTH-1252', name: 'PSW Clinical Preparation', hrs: '2' },
  { code: 'HLTH-3054', name: 'PSW Clinical Professional Practice', hrs: '6' },
  { code: 'HLTH-3055', name: 'PSW Consolidation Professional Practice', hrs: '3.75' },
  { code: 'HLTH-3056', name: 'PSW Prof Practice Community Setting', hrs: '6' },
  { code: 'COMM-1133', name: 'Professional Communications for PSW', hrs: '3' },
];

const clinicalSequence = [
  {
    code: 'HLTH-1096',
    name: 'PSW Laboratory Practice',
    note: 'Basic activities of daily living, practised in the lab.',
  },
  {
    code: 'HLTH-3047',
    name: 'PSW Laboratory Practice 2',
    note: 'Builds on the first lab in a simulated long-term care and community setting.',
  },
  {
    code: 'HLTH-1252',
    name: 'PSW Clinical Preparation',
    note: 'Simulations and standardized patients before you touch a real client.',
  },
  {
    code: 'HLTH-3054',
    name: 'PSW Clinical Professional Practice',
    note: 'Long-term care. Introduces the afternoon and evening shift. Competence in all five domains is required to move on.',
  },
  {
    code: 'HLTH-3055',
    name: 'PSW Consolidation Professional Practice',
    note: 'Long-term care, days, evenings and midnights, working more independently.',
  },
  {
    code: 'HLTH-3056',
    name: 'PSW Professional Practice, Community Setting',
    note: 'The community placement. Shift work can be expected.',
  },
];

const timeline = [
  {
    date: '1 Feb 2027',
    what: 'Equal consideration',
    detail:
      'Fanshawe’s applicant selection criteria name receipt of application by 1 February. After that date applications are considered first-come, first-served until the program is full.',
  },
  {
    date: '1 Oct 2026',
    what: 'Advanced standing applications close',
    detail:
      'Only relevant if you are applying for credit as a working Home Support Worker or Health Care Aide. The winter intake deadline for level 2+ applicants.',
  },
  {
    date: '1 May – 10 Dec 2026',
    what: 'Offer confirmation window, January 2027 intake',
    detail:
      'The period in which winter offers are confirmed. Your own date can vary — check WebAdvisor rather than assuming.',
  },
  {
    date: '10th day of term',
    what: 'Balance of tuition due',
    detail: 'Domestic tuition is due on the tenth day of term. A late fee is assigned shortly after.',
  },
  {
    date: '3 weeks before class',
    what: 'Final marks must be in',
    detail:
      'Fanshawe needs a final mark for any required admission course by three weeks before classes begin, or a conditional offer is revoked.',
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
      { id: 'm8', label: 'Influenza shot', note: 'Required each fall, uploaded and verified by 15 November.' },
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
      { id: 'n11', label: 'International Student Declaration', note: 'International students only.' },
    ],
  },
];

const contacts = [
  {
    name: 'Klaske Rheubottom, RN, BScN, MScN',
    role: 'Coordinator, Personal Support Worker Program — Woodstock/Oxford. The person who can confirm which intake is which.',
    email: 'krheubottom@fanshawec.ca',
  },
  {
    name: 'Woodstock/Oxford Regional Campus',
    role: '369 Finkle Street, Woodstock, ON N4V 1A3 · 519-421-0144 · Mon–Fri 8:30–16:30',
    email: 'oxford@fanshawec.ca',
  },
  {
    name: 'Anita Murray',
    role: 'Clinical/Placement Liaison, Practical Nursing and PSW',
    email: 'a_murray273607@fanshawec.ca',
  },
  {
    name: 'Sarandan Heuston',
    role: 'Practical Nursing and PSW Lab Practice Lead',
    email: 'sheuston@fanshawec.ca',
  },
  {
    name: 'Tam Visser',
    role: 'Academic and Student Services Consultant — course selection and academic planning',
    email: 't_visser2@fanshawec.ca',
  },
  {
    name: 'Pre-Admissions Advisors',
    role: 'Eligibility questions, English language waivers, international education',
    email: 'advising@fanshawec.ca',
  },
];

/* ---------- styles ---------- */

const h2 = 'text-[20px] sm:text-[23px] font-semibold tracking-tight leading-snug';
const note = 'text-[14px] leading-relaxed text-[#78716C] dark:text-[#A8A29E]';
const body = 'text-[15px] leading-relaxed';
const card = 'rounded border border-[#E7E5E4] dark:border-[#292524] bg-white dark:bg-[#1C1917]';
const mono = 'font-mono text-[12px] text-[#0F6153] dark:text-[#5FC7B0]';

const pillStyles: Record<string, string> = {
  open: 'bg-[#E6F0ED] dark:bg-[#16302B] text-[#0F6153] dark:text-[#5FC7B0] border-[#0F6153] dark:border-[#5FC7B0]',
  closed: 'bg-[#FAE7E2] dark:bg-[#331B16] text-[#9C2F17] dark:text-[#E8907A] border-[#9C2F17] dark:border-[#E8907A]',
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

export default function PswPage() {
  return (
    <div className="space-y-14">
      {/* header */}
      <header className="pb-7 border-b-2 border-[#1A1A1A] dark:border-[#EBEBEA]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F6153] dark:text-[#5FC7B0] mb-3">
          Fanshawe College · Woodstock/Oxford Regional Campus
        </p>
        <h1 className="text-[30px] sm:text-[38px] font-bold tracking-tight leading-[1.08] mb-4">
          Personal Support Worker
        </h1>
        <p className="text-[16px] leading-relaxed text-[#57534E] dark:text-[#A8A29E] mb-6">
          A reference for the Personal Support Worker certificate at Fanshawe’s Woodstock campus —
          intakes, admission requirements, English language requirements, the course plan, deadlines
          and the pre-placement checklist. Compiled from the college’s own program, admissions and
          campus pages.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-4 border-t border-[#E7E5E4] dark:border-[#292524] text-[11px] text-[#78716C] dark:text-[#A8A29E]">
          <span className="font-mono">PSW6</span>
          <span>Ontario College Certificate</span>
          <span>30 weeks · two levels</span>
          <span>Verified 14 Sept 2026</span>
        </div>
      </header>

      {/* intakes */}
      <Section
        id="intakes"
        title="Where the intakes stand"
        intro="Woodstock runs a January and a May PSW start. On the 2026/2027 catalog both 2027 dates are open — which is unusual enough in health programs to be worth saying plainly."
      >
        <div className="space-y-3">
          {intakes.map((i) => (
            <div key={i.term + i.status} className={`${card} p-4`}>
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

        <p className={`${note} mt-5`}>
          One wrinkle when you look this up yourself: Fanshawe’s catalog lists Woodstock{' '}
          <strong className="font-semibold">twice</strong> for each of the January and May 2027 dates,
          and the open-programs list carries Woodstock four times. The college also runs a PSW cohort
          in Tillsonburg under the Woodstock/Oxford campus banner. Which row is which is a question for
          the program coordinator, not something the website answers.
        </p>
      </Section>

      {/* requirements */}
      <Section
        id="requirements"
        title="What you need to get in"
        intro="This is the shortest admission list on any health program at the college. There are no required subjects and no minimum grade — only a diploma, or mature applicant status."
      >
        <ul className="grid sm:grid-cols-2 gap-px bg-[#E7E5E4] dark:bg-[#292524] border border-[#E7E5E4] dark:border-[#292524] rounded overflow-hidden mb-6">
          {requirements.map((r) => (
            <li key={r.code} className="bg-white dark:bg-[#1C1917] p-3.5">
              <span className={`${mono} block mb-1`}>{r.code}</span>
              <span className="text-[13px] text-[#78716C] dark:text-[#A8A29E]">{r.grade}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-[16px] font-semibold mb-2">Recommended, not required</h3>
        <p className={`${body} mb-4`}>
          Fanshawe lists a few courses as recommended academic preparation. They are not conditions of
          admission, but they map onto what the program actually asks of you in the first term.
        </p>
        <ul className="grid sm:grid-cols-2 gap-px bg-[#E7E5E4] dark:bg-[#292524] border border-[#E7E5E4] dark:border-[#292524] rounded overflow-hidden mb-5">
          {recommended.map((r) => (
            <li key={r.code} className="bg-white dark:bg-[#1C1917] p-3.5">
              <span className="font-semibold text-[13.5px] block mb-1">{r.code}</span>
              <span className="text-[13px] text-[#78716C] dark:text-[#A8A29E]">{r.grade}</span>
            </li>
          ))}
        </ul>

        <p className={`${body} mb-7`}>
          <strong className="font-semibold">No high school diploma?</strong> Fanshawe points applicants
          at the Academic and Career Entrance (ACE) grade 12 Equivalency Certificate, which is accepted
          in place of the OSSD. Separately, if you already work as a{' '}
          <strong className="font-semibold">Home Support Worker or Health Care Aide</strong>, you may be
          eligible for Prior Learning Assessment and Recognition and receive credit for part of the
          coursework.
        </p>

        <div className="rounded border border-[#E7E5E4] dark:border-[#292524] border-l-4 border-l-[#0F6153] dark:border-l-[#5FC7B0] bg-[#E6F0ED] dark:bg-[#16302B] p-4 mb-7">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0F6153] dark:text-[#5FC7B0] mb-2">
            The one thing to know
          </span>
          <p className="text-[14px] leading-relaxed">
            <strong className="font-semibold">PSW6 is an open program.</strong> It appears on
            Fanshawe’s open-programs list, not its competitive list — so unlike Practical Nursing, you
            are not ranked against other applicants on grades. Meet the minimum, apply early, and the
            seat is yours. That single difference is why the two programs feel nothing alike to apply
            to.
          </p>
        </div>

        <h3 className="text-[16px] font-semibold mb-2">If it does fill up</h3>
        <p className={body}>
          The program page still carries the standard selection criteria, and it is worth reading as a
          warning rather than a formality. Where eligible applicants outnumber spaces, Fanshawe ranks
          on three things: preference for Permanent Residents of Ontario, receipt of application by{' '}
          <strong className="font-semibold">1 February</strong>, and achievement in the admission
          requirements. After 1 February, applications are considered first-come, first-served until
          the program is full. Applying early is the whole strategy here.
        </p>
      </Section>

      {/* english */}
      <Section
        id="english"
        title="English language requirements"
        intro="If English is not your first language, PSW sits at the standard diploma level rather than the health-career level that Practical Nursing is held to. Results must be within the last two years."
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

        <h3 className="text-[16px] font-semibold mb-2">Reading the Duolingo number</h3>
        <p className={`${body} mb-4`}>
          PSW asks for <strong className="font-semibold">105 overall with nothing below 95</strong>. On
          Duolingo’s published comparison that is roughly{' '}
          <strong className="font-semibold">CEFR B2</strong>, around TOEFL iBT 75–80 — a working
          proficiency, not a near-native one.
        </p>
        <p className={`${body} mb-4`}>
          The floor matters as much as the headline. A 105 overall with a 95 floor is a much gentler
          shape than Practical Nursing’s 135 with a Literacy minimum of 130. If you are weighing the two
          programs and English is the constraint, this is the difference that decides it: PN needs C1,
          PSW needs B2.
        </p>
        <p className={body}>
          One entry in the table above looks like a typo and is not. The{' '}
          <strong className="font-semibold">2026 TOEFL iBT uses a new 1–6 band scale</strong>, so
          Fanshawe lists 4.5 for the current test and keeps 79 on the old 0–120 scale for anyone who sat
          it earlier. If you are booking a test, check which version you are booking before you compare
          scores against this list. The requirement can also be waived in specific cases — a
          Pre-Admissions Advisor is the one to ask.
        </p>
      </Section>

      {/* courses */}
      <Section
        id="courses"
        title="What you actually take"
        intro="Fourteen mandatory courses over two levels and 30 weeks. Fanshawe does not publish a term-by-term breakdown for PSW6 the way it does for some programs, so what follows is the college’s own course list rather than an assumed schedule."
      >
        <div className="border-t-2 border-[#1A1A1A] dark:border-[#EBEBEA] mb-7">
          {courses.map((c) => (
            <div
              key={c.code}
              className="flex gap-2.5 py-1.5 border-b border-[#E7E5E4] dark:border-[#292524] text-[13.5px]"
            >
              <span className={`${mono} w-[68px] sm:w-[82px] shrink-0 pt-px`}>{c.code}</span>
              <span className="flex-1 leading-snug">{c.name}</span>
              <span className="font-mono text-[11.5px] text-[#A8A29E] dark:text-[#78716C] tabular-nums shrink-0">
                {c.hrs}
              </span>
            </div>
          ))}
        </div>

        <h3 className="text-[16px] font-semibold mb-2">The clinical sequence cannot be reordered</h3>
        <p className={`${body} mb-4`}>
          This is the part of PSW that catches people out. The clinical and lab courses are designed to
          be taken in sequence, and Fanshawe states that{' '}
          <strong className="font-semibold">no exceptions can be made to this order for any reason</strong>.
          You must pass all theory courses as well as each lab and clinical course before moving to the
          next.
        </p>

        <ol className="space-y-3 mb-6">
          {clinicalSequence.map((c, i) => (
            <li key={c.code} className={`${card} p-3.5 flex gap-3`}>
              <span className="w-[22px] h-[22px] shrink-0 grid place-items-center rounded-full bg-[#0F6153] dark:bg-[#5FC7B0] text-white dark:text-[#0F1614] font-semibold text-[11px] mt-0.5">
                {i + 1}
              </span>
              <div>
                <p className="text-[14px] font-semibold leading-snug">
                  {c.name}
                  <span className="font-mono text-[11px] font-normal text-[#78716C] dark:text-[#A8A29E] ml-2">
                    {c.code}
                  </span>
                </p>
                <p className="text-[13px] leading-relaxed text-[#57534E] dark:text-[#A8A29E] mt-1">{c.note}</p>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="text-[16px] font-semibold mb-2">What failing a clinical actually costs</h3>
        <p className={`${body} mb-4`}>
          Subject to a review by the program coordinator, you may get a{' '}
          <strong className="font-semibold">one-time opportunity to repeat a clinical course</strong> —
          but only if you have not already failed two other courses, lab or theory. Fail a second
          clinical, whether the same one or a later one, and you are terminated from the program. If you
          fail the consolidation course you cannot progress to the community course.
        </p>
        <p className={`${body} mb-4`}>
          The knock-on matters: failing to progress can carry tuition consequences, and full-time
          students are held responsible for that full term’s tuition. A returning student who has had an
          interruption cannot go straight into the consolidation practice — they must first complete
          the long-term care clinical again, at their own expense.
        </p>
        <p className={body}>
          Two more rules stated baldly in the program’s clinical conditions. Students are not permitted
          to arrive at a clinical agency with pre-existing injuries, and there is{' '}
          <strong className="font-semibold">no light-duty provision</strong> and no accommodation for
          injuries at any time. And because unauthorized photographs are a real risk in practicum, a
          student found with a cell phone on their person is asked to leave the agency and marked absent
          for the day.
        </p>
      </Section>

      {/* dates */}
      <Section
        id="dates"
        title="Dates that matter"
        intro="PSW is open rather than competitive, so there is no ranking deadline in the way Practical Nursing has one. The dates below are still the ones that decide whether you actually start."
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
        intro="Full-time certificate programs at Fanshawe go through OCAS, the same route as every other college program in Ontario."
      >
        <ol className="space-y-4">
          {[
            {
              b: 'Confirm eligibility first.',
              t: 'An OSSD or mature applicant status is the whole academic bar. If English is not your first language, settle the test question before spending an application — and check which TOEFL scale you would be sitting.',
            },
            {
              b: 'Speak to an advisor if anything is unusual.',
              t: 'Fanshawe advises anyone with international education, or a break of more than five years from high school, to talk to a Pre-Admissions and Pathways Advisor before applying. They can also confirm which intake is opening next.',
            },
            {
              b: 'Apply on OCAS.',
              t: 'Submit through the Ontario College Application Service at ontariocolleges.ca, finding the program by code PSW6 and choosing the Woodstock campus.',
            },
            {
              b: 'Submit transcripts.',
              t: 'Order them through OCAS. Applicants are responsible for every document — Fanshawe cannot pull files held by other institutions.',
            },
            {
              b: 'Accept the offer and pay the deposit.',
              t: 'Watch the offer confirmation window and the tenth-day tuition deadline. A late fee is assigned shortly after the tenth day.',
            },
            {
              b: 'Complete post-admission requirements.',
              t: 'There is a signed Placement and Student Agreement, and a pre-placement clearance process that runs through Fanshawe’s Synergy system.',
            },
            {
              b: 'Start the placement clearances early.',
              t: 'Immunizations can take up to three months, and some police services take six weeks or more. Nothing here is hard, but all of it is slow.',
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
        intro="Placements are mandatory. Miss the pre-placement requirements and you cannot attend; miss the placement and you do not graduate. Everything is uploaded to Fanshawe’s Synergy system. Ticking items saves progress in this browser only."
      >
        <Checklist groups={placementGroups} storageKey="fanshawe-psw-placement-v1" />
      </Section>

      {/* cost */}
      <Section id="cost" title="What it costs">
        <div className="grid sm:grid-cols-3 gap-px bg-[#E7E5E4] dark:bg-[#292524] border border-[#E7E5E4] dark:border-[#292524] rounded overflow-hidden mb-6">
          {[
            { num: '$3,442', lab: 'Total domestic program cost, Woodstock campus' },
            { num: '$17,545', lab: 'Total international program cost, for comparison' },
            { num: '$3,401', lab: 'Level 1 general expenses — on top of tuition, not included in it' },
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
          The Woodstock total breaks down as{' '}
          <strong className="font-semibold">$1,783.58 for Level 1 and $1,658.60 for Level 2</strong> —
          the program is billed as two levels, not per course. London’s campus total is $4,245.92 and
          the other regional campuses sit at $3,556.20, so Woodstock is the cheapest place to take this
          program at Fanshawe.
        </p>

        <div className="rounded border border-[#E7E5E4] dark:border-[#292524] border-l-4 border-l-[#9C2F17] dark:border-l-[#E8907A] bg-[#FAE7E2] dark:bg-[#331B16] p-4 mb-6">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9C2F17] dark:text-[#E8907A] mb-2">
            The number people miss
          </span>
          <p className="text-[14px] leading-relaxed">
            General expenses in Level 1 are <strong className="font-semibold">$3,401.40</strong>. That
            is nearly double the level’s tuition of $1,783.58, and it is deliberately excluded from the
            “total cost of program” figure Fanshawe publishes. Level 2 general expenses are a further
            $1,095.00. Budget from just under $8,000 for the year, not from $3,442.
          </p>
        </div>

        <p className={`${body} mb-4`}>
          The published total also excludes the health and dental plan, which is mandatory and billed
          annually — <strong className="font-semibold">$210.23</strong> for a January start covering
          January to August. The bus pass is a London-only charge, so Woodstock students are not billed
          for it, and do not automatically receive it either.
        </p>
        <p className={body}>
          Fees displayed on Fanshawe’s site are for general information, and the college is explicit
          that in any discrepancy your fee invoice is the correct amount. Figures above are the 2026/27
          rates and are re-set annually.
        </p>
      </Section>

      {/* contacts */}
      <Section
        id="contact"
        title="Who to talk to"
        intro="The Woodstock campus is small enough that the program coordinator is directly reachable — this is the fastest way to confirm which intake is which."
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

      {/* placement travel note */}
      <Section id="placement" title="One thing to agree to before you start">
        <p className={body}>
          Accepting an offer means accepting Fanshawe’s placement agreement, and it says something
          worth reading twice. The college reserves the right to place you in whatever agency or
          combination of agencies it determines appropriate, and while it makes every effort to use
          local agencies,{' '}
          <strong className="font-semibold">
            you may be assigned outside the area and may have to relocate at your own expense
          </strong>{' '}
          for all or part of the placement. You are responsible for all costs associated with clinical
          and field placement, volunteer hours included. For a Woodstock student that is the single
          logistical risk in the program.
        </p>
      </Section>

      <p className="text-[12.5px] leading-relaxed text-[#A8A29E] dark:text-[#78716C] pt-5 border-t border-[#E7E5E4] dark:border-[#292524]">
        Compiled 14 September 2026 from Fanshawe College’s PSW6 program page on the 2026/2027 catalog,
        the Canadian tuition and fee breakdown, the clinical progression conditions for PSW, the
        2026–2027 pre-placement requirement checklist, the Woodstock/Oxford campus contacts page and
        the college’s admissions, important dates, competitive and open program listings. Intake
        availability, fees and deadlines change — confirm anything decisive with the program
        coordinator before acting on it. Fanshawe does not publish a term-by-term course plan for PSW6,
        so the course list here is the college’s own list rather than a schedule, and the level at which
        each course falls is not stated by the college.
      </p>
    </div>
  );
}
