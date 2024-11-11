import { client } from "@/lib/sanity";
import Image from 'next/image';

interface SponsorProps {
  title: string;
  _id: string;
  imageUrl: string;
  years: number[];
}

async function getSponsors() {
  const query = `
    *[_type == "sponsor"] | order(publishedAt desc) {
        title,
        _id,
        "imageUrl": mainImage.asset->url,
        years,
    }[]
    `;

  const data: SponsorProps[] = await client.fetch(query);

  return data;
}

export default async function Sponzorji() {
  const sponsors = await getSponsors();

  // Group sponsors by year
  const sponsorsByYear: { [key: number]: SponsorProps[] } = {};

  sponsors.forEach((sponsor) => {
    sponsor.years.forEach((year) => {
      if (!sponsorsByYear[year]) {
        sponsorsByYear[year] = [];
      }
      sponsorsByYear[year].push(sponsor);
    });
  });

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="flex flex-col items-center justify-center space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Naši sponzorji
        </h1>
      </div>
      
      {Object.entries(sponsorsByYear)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // Sort years in descending order
        .map(([year, sponsors]) => (
          <div key={year} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{year}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {sponsors.map((sponsor) => (
                <div key={sponsor._id} className="text-center">
                  {/* Sponsor logo */}
                  <div className="w-24 h-24 mx-auto mb-2 transform transition-transform duration-300 hover:scale-105">
                    <Image
                      src={sponsor.imageUrl}
                      alt={sponsor.title}
                      width={96} // Fixed width
                      height={96} // Fixed height
                      className="rounded-full object-cover" // Round and object-fit
                    />
                  </div>
                  {/* Sponsor title */}
                  <p className="text-sm font-medium">{sponsor.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}