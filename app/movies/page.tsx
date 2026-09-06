import type { Metadata } from 'next';
import { PrintButton } from '../../components/print-button';

export const metadata: Metadata = {
  title: 'Movies',
  description: 'Printable 50 Malayalam Cinema Classics poster game cards.',
};

interface Movie {
  id: number;
  title: string;
  year: number;
}

const movies: Movie[] = [
  { id: 1, title: 'Manichitrathazhu', year: 1993 },
  { id: 2, title: 'Drishyam', year: 2013 },
  { id: 3, title: 'Premam', year: 2015 },
  { id: 4, title: 'Kumbalangi Nights', year: 2019 },
  { id: 5, title: 'Bangalore Days', year: 2014 },
  { id: 6, title: 'Lucifer', year: 2019 },
  { id: 7, title: 'Spadikam', year: 1995 },
  { id: 8, title: 'Godfather', year: 1991 },
  { id: 9, title: 'In Harihar Nagar', year: 1990 },
  { id: 10, title: 'Aadu', year: 2015 },
  { id: 11, title: 'Maheshinte Prathikaaram', year: 2016 },
  { id: 12, title: 'Classmates', year: 2006 },
  { id: 13, title: 'Kilukkam', year: 1991 },
  { id: 14, title: 'Minnal Murali', year: 2021 },
  { id: 15, title: 'Charlie', year: 2015 },
  { id: 16, title: 'CBI 5: The Brain', year: 2022 },
  { id: 17, title: 'Ramji Rao Speaking', year: 1989 },
  { id: 18, title: 'Chithram', year: 1988 },
  { id: 19, title: 'Home', year: 2021 },
  { id: 20, title: 'Manjummel Boys', year: 2024 },
  { id: 21, title: 'Aavesham', year: 2024 },
  { id: 22, title: 'Premalu', year: 2024 },
  { id: 23, title: 'Kishkindha Kaandam', year: 2024 },
  { id: 24, title: '2018', year: 2023 },
  { id: 25, title: 'Kannur Squad', year: 2023 },
  { id: 26, title: 'Bramayugam', year: 2024 },
  { id: 27, title: 'ARM', year: 2024 },
  { id: 28, title: 'Neru', year: 2023 },
  { id: 29, title: 'Thallumaala', year: 2022 },
  { id: 30, title: 'Hridayam', year: 2022 },
  { id: 31, title: 'Jana Gana Mana', year: 2022 },
  { id: 32, title: 'Rorschach', year: 2022 },
  { id: 33, title: 'The Great Indian Kitchen', year: 2021 },
  { id: 34, title: 'Ayyappanum Koshiyum', year: 2020 },
  { id: 35, title: 'Virus', year: 2019 },
  { id: 36, title: 'Joseph', year: 2018 },
  { id: 37, title: 'Take Off', year: 2017 },
  { id: 38, title: 'Pulimurugan', year: 2016 },
  { id: 39, title: 'Ennu Ninte Moideen', year: 2015 },
  { id: 40, title: 'Drishyam 2', year: 2021 },
  { id: 41, title: 'Thattathin Marayathu', year: 2012 },
  { id: 42, title: 'Ustad Hotel', year: 2012 },
  { id: 43, title: 'Traffic', year: 2011 },
  { id: 44, title: 'Pranchiyettan & the Saint', year: 2010 },
  { id: 45, title: 'Kerala Cafe', year: 2009 },
  { id: 46, title: 'Rajamanikyam', year: 2005 },
  { id: 47, title: 'Meesa Madhavan', year: 2002 },
  { id: 48, title: 'Narasimham', year: 2000 },
  { id: 49, title: 'Devasuram', year: 1993 },
  { id: 50, title: 'Yavanika', year: 1982 },
];

const css = `
  .mp { background: #fff; color: #000; padding: 14px 10px 30px; }
  .mp .print-zone { margin-bottom: 14px; }
  .mp header {
    text-align: center; margin: 0 0 18px;
    border-bottom: 2px solid #000; padding-bottom: 10px;
  }
  .mp h1 {
    font-size: 24pt; font-weight: bold; text-transform: uppercase;
    letter-spacing: 1px; margin: 0;
  }
  .mp header p { font-size: 10pt; color: #444; margin-top: 4px; }
  .mp .movies-grid {
    display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px;
  }
  .mp .card {
    border: 2px solid #000; aspect-ratio: 2 / 3;
    display: flex; flex-direction: column; justify-content: space-between;
    align-items: center; padding: 10px 6px; text-align: center;
    background: #fff; page-break-inside: avoid; break-inside: avoid;
  }
  .mp .number {
    font-size: 9pt; font-weight: bold; align-self: flex-start;
    border: 1px solid #000; padding: 1px 5px; border-radius: 3px;
  }
  .mp .title {
    font-size: 11pt; font-weight: bold; line-height: 1.2;
    margin: auto 0; text-transform: uppercase; word-break: break-word;
  }
  .mp .year {
    font-size: 9pt; font-weight: bold; border-top: 1px solid #000;
    width: 100%; padding-top: 4px;
  }

  @media screen and (min-width: 820px) {
    body > div { padding: 0 !important; }
    main { max-width: 100% !important; }
    .mp { max-width: 1000px; margin: 0 auto; padding: 24px 20px 48px; }
  }

  @media print {
    @page { size: A4 portrait; margin: 10mm; }
    body > div { padding: 0 !important; }
    main { max-width: 100% !important; }
    .mp { padding: 0; }
    .print-zone { display: none; }
  }
`;

export default function MoviesPage() {
  return (
    <>
      <style>{css}</style>
      <div className="mp">
        <div className="print-zone">
          <PrintButton />
        </div>
        <header>
          <h1>50 Malayalam Cinema Classics</h1>
          <p>Printable Poster Game Cards</p>
        </header>
        <div className="movies-grid">
          {movies.map((m) => (
            <div className="card" key={m.id}>
              <div className="number">#{m.id}</div>
              <div className="title">{m.title}</div>
              <div className="year">{m.year}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
