import type { Metadata } from 'next';
import { PrintButton } from '../../components/print-button';

export const metadata: Metadata = {
  title: 'Pictionary Words',
  description: 'Printable Pictionary word squares - 50 easy words, one page.',
};

const words: string[] = [
  'Sun', 'Moon', 'Star', 'Cloud', 'Rainbow',
  'Tree', 'Flower', 'Leaf', 'Mountain', 'River',
  'Cat', 'Dog', 'Bird', 'Fish', 'Rabbit',
  'Horse', 'Frog', 'Bee', 'Duck', 'Lion',
  'House', 'Car', 'Bus', 'Boat', 'Train',
  'Plane', 'Bicycle', 'Ball', 'Kite', 'Book',
  'Clock', 'Key', 'Phone', 'Cup', 'Plate',
  'Apple', 'Banana', 'Pizza', 'Cake', 'Egg',
  'Candy', 'Ice Cream', 'Hat', 'Shoe', 'Sock',
  'Heart', 'Snowman', 'Umbrella', 'Lollipop', 'Guitar',
];

const css = `
  .pp { background: #fff; color: #000; padding: 14px 10px 30px; }
  .pp .print-zone { margin-bottom: 10px; }
  .pp header {
    text-align: center; margin: 0 0 8px;
    border-bottom: 1.5px solid #000; padding-bottom: 4px;
  }
  .pp h1 {
    font-size: 16pt; font-weight: bold; text-transform: uppercase;
    letter-spacing: 1px; margin: 0; line-height: 1.2;
  }
  .pp header p { font-size: 8.5pt; color: #444; margin-top: 2px; }
  .pp .word-grid {
    display: grid; grid-template-columns: repeat(8, 1fr); gap: 8px;
  }
  .pp .sq {
    border: 1.5px solid #111; aspect-ratio: 1 / 1;
    display: flex; flex-direction: column; align-items: center;
    padding: 4px 2px; text-align: center; background: #fff;
    page-break-inside: avoid; break-inside: avoid; overflow: hidden;
  }
  .pp .sq .n {
    align-self: flex-start; font-size: 6.5pt; color: #555;
    line-height: 1;
  }
  .pp .sq .w {
    flex: 1; display: flex; align-items: center; justify-content: center;
    font-size: 8.5pt; font-weight: bold; text-transform: uppercase;
    line-height: 1.15; word-break: break-word; padding: 2px 0;
  }

  @media screen and (min-width: 820px) {
    body > div { padding: 0 !important; }
    main { max-width: 100% !important; }
    .pp { max-width: 1000px; margin: 0 auto; padding: 24px 20px 48px; }
    .pp .word-grid { gap: 12px; }
  }

  @media print {
    @page { size: A4 portrait; margin: 8mm; }
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
        <header>
          <h1>Pictionary Words</h1>
          <p>50 words · cut into squares</p>
        </header>
        <div className="word-grid">
          {words.map((word, i) => (
            <div className="sq" key={word}>
              <div className="n">{i + 1}</div>
              <div className="w">{word}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
