import type { Metadata } from 'next';
import { PrintButton } from '../../components/print-button';

export const metadata: Metadata = {
  title: 'Scramble Answers',
  description: 'Answer key for the newborn baby word scramble.',
};

interface Answer {
  no: number;
  scramble: string;
  word: string;
}

const answers: Answer[] = [
  { no: 1, scramble: 'TEBOLT', word: 'BOTTLE' },
  { no: 2, scramble: 'LEROSTRL', word: 'STROLLER' },
  { no: 3, scramble: 'PDIERA', word: 'DIAPER' },
  { no: 4, scramble: 'BCIR', word: 'CRIB' },
  { no: 5, scramble: 'BKLANET', word: 'BLANKET' },
  { no: 6, scramble: 'LLBYALU', word: 'LULLABY' },
  { no: 7, scramble: 'NSRERUY', word: 'NURSERY' },
  { no: 8, scramble: 'CSRAEAT', word: 'CARSEAT' },
  { no: 9, scramble: 'HICHRIAGH', word: 'HIGHCHAIR' },
  { no: 10, scramble: 'THRMETOMERE', word: 'THERMOMETER' },
  { no: 11, scramble: 'LTONIO', word: 'LOTION' },
  { no: 12, scramble: 'SHMPOAO', word: 'SHAMPOO' },
  { no: 13, scramble: 'WEPSI', word: 'WIPES' },
  { no: 14, scramble: 'MTRNEITYA', word: 'MATERNITY' },
  { no: 15, scramble: 'TDODELR', word: 'TODDLER' },
  { no: 16, scramble: 'SKCOS', word: 'SOCKS' },
  { no: 17, scramble: 'FICPAERI', word: 'PACIFIER' },
  { no: 18, scramble: 'NOEIES', word: 'ONESIE' },
  { no: 19, scramble: 'BBI', word: 'BIB' },
  { no: 20, scramble: 'SASNEBIT', word: 'BASSINET' },
  { no: 21, scramble: 'TREETHE', word: 'TEETHER' },
  { no: 22, scramble: 'KRELWA', word: 'WALKER' },
  { no: 23, scramble: 'WGNIS', word: 'SWING' },
  { no: 24, scramble: 'NTTESIM', word: 'MITTENS' },
  { no: 25, scramble: 'DREPWO', word: 'POWDER' },
  { no: 26, scramble: 'TNNEOMIT', word: 'OINTMENT' },
  { no: 27, scramble: 'NILESA', word: 'SALINE' },
  { no: 28, scramble: 'YAHWDOSB', word: 'BODYWASH' },
  { no: 29, scramble: 'RWENBON', word: 'NEWBORN' },
  { no: 30, scramble: 'AHT', word: 'HAT' },
  { no: 31, scramble: 'TNFANI', word: 'INFANT' },
  { no: 32, scramble: 'EDDYT', word: 'TEDDY' },
  { no: 33, scramble: 'TAMPYAL', word: 'PLAYMAT' },
  { no: 34, scramble: 'LDOL', word: 'DOLL' },
  { no: 35, scramble: 'TNOCOT', word: 'COTTON' },
  { no: 36, scramble: 'THBA', word: 'BATH' },
];

export default function ScramblePage() {
  return (
    <div>
      <h1 className="text-[22px] font-medium text-[#1A1A1A] dark:text-[#EBEBEA] mb-3">
        Baby Word Scramble - Answer Key
      </h1>
      <p className="text-[#1A1A1A] dark:text-[#EBEBEA] leading-[1.75] mb-6">
        Answer key for the newborn baby word scramble. The cards are numbered 1
        through 36; each scramble is shown here with its answer.
      </p>

      <div className="mb-6">
        <PrintButton />
      </div>

      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[#E5E5E4] dark:border-[#2E2E2D] text-left text-xs uppercase tracking-wide text-[#6B7280] dark:text-[#9CA3AF]">
            <th className="py-2 pr-3 font-medium w-10">No.</th>
            <th className="py-2 pr-3 font-medium">Scrambled</th>
            <th className="py-2 font-medium">Answer</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((a) => (
            <tr
              key={a.no}
              className="border-b border-[#F0F0EE] dark:border-[#1F1F1E]"
            >
              <td className="py-2 pr-3 text-[#6B7280] dark:text-[#9CA3AF]">
                {a.no}
              </td>
              <td className="py-2 pr-3 font-mono text-[13px]">{a.scramble}</td>
              <td className="py-2 font-semibold">{a.word}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
