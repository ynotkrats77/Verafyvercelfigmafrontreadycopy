import { InvestorPitchDeck } from '../components/InvestorPitchDeck';

interface InvestorPitchPageProps {
  isDark: boolean;
}

export function InvestorPitchPage({ isDark }: InvestorPitchPageProps) {
  return <InvestorPitchDeck isDark={isDark} />;
}
