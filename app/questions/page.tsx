import type { Metadata } from 'next';
import QuestionsApp from './QuestionsApp';

export const metadata: Metadata = {
  title: 'Questions',
  description: 'Baby shower "who is more likely" questions, one at a time.',
};

export default function QuestionsPage() {
  return <QuestionsApp />;
}
