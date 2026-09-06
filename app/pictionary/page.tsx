import type { Metadata } from 'next';
import { PrintButton } from '../../components/print-button';
import { words } from './words';

export const metadata: Metadata = {
  title: 'Pictionary Words',
  description: 'Printable Pictionary word squares - easy and hard words shuffled, across multiple pages.',
};

const SIZE = 50;
const pages: string[][] = [];
for (let i = 0; i < words.length; i += SIZE) {
  pages.push(words.slice(i, i + SIZE));
}

const css = `
  .pp { background: #fff; color: #000; padding: 14px 10px 30px; }
  .pp .print-zone { margin-bottom: 10px; }
  .pp .sheet { page-break-after: always; break-after: page; }
  .pp .sheet:last-child { page-break-after: auto; break-after: auto; }
  .pp header {
    text-align: center; margin: 0 0 10px;
    border-bottom: 1.5px solid #000; padding-bottom: 5px;
  }
  .pp h1 {
    font-size: 17pt; font-weight: bold; text-transform: uppercase;
    letter-spacing: 1px; margin: 0; line-height: 1.2;
  }
  .pp header p { font-size: 9pt; color: #444; margin-top: 2px; }
  .pp .word-grid {
    display: grid; grid-template-columns: repeat(7, 1fr); gap: 14px;
  }
  .pp .sq {
    border: 1.5px solid #111; aspect-ratio: 1 / 1;
    display: flex; flex-direction: column; align-items: center;
    padding: 6px 3px; text-align: center; background: #fff;
    page-break-inside: avoid; break-inside: avoid; overflow: hidden;
  }
  .pp .sq .n {
    align-self: flex-start; font-size: 7pt; color: #555;
    line-height: 1;
  }
  .pp .sq .w {
    flex: 1; display: flex; align-items: center; justify-content: center;
    font-size: 10pt; font-weight: bold; text-transform: uppercase;
    line-height: 1.15; word-break: break-word; padding: 2px 0;
  }

  @media screen and (min-width: 820px) {
    body > div { padding: 0 !important; }
    main { max-width: 100% !important; }
    .pp { max-width: 1050px; margin: 0 auto; padding: 24px 20px 48px; }
    .pp .word-grid { gap: 18px; }
    .pp .sheet { page-break-after: auto; break-after: auto; margin-bottom: 28px; }
  }

  @media print {
    @page { size: A4 portrait; margin: 12mm; }
    body > div { padding: 0 !important; }
    main { max-width: 100% !important; }
    .pp { padding: 0; }
    .pp .print-zone { display: none; }
  }
`;

export default function PictionaryPage() {
  return (
    <>
      <style>{css}</style>
      <div className="pp">
        <div className="print-zone">
          <PrintButton />
        </div>

        {pages.map((chunk, pi) => (
          <section className="sheet" key={pi}>
            <header>
              <h1>Pictionary Words</h1>
              <p>
                Page {pi + 1} of {pages.length} · words {pi * SIZE + 1}–
                {pi * SIZE + chunk.length} · cut into squares
              </p>
            </header>
            <div className="word-grid">
              {chunk.map((word, i) => {
                const n = pi * SIZE + i;
                return (
                  <div className="sq" key={n}>
                    <div className="n">{n + 1}</div>
                    <div className="w">{word}</div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
