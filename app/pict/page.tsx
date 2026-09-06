import type { Metadata } from 'next';
import PictApp from './PictApp';

export const metadata: Metadata = {
  title: 'Pictionary Picker',
  description: 'Draw random Pictionary words from the full shuffled list.',
};

export default function PictPage() {
  return <PictApp />;
}
