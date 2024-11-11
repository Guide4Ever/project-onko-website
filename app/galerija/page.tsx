import Image from 'next/image';
import { ContentCardProps } from "../components/ui/content-card";
import { client } from "@/lib/sanity";
import Link from 'next/link';

async function getImages() {
  const query = `
  *[_type == "event-post"] | order(publishedAt desc) {
      title,
      _id,
      publishedAt,
      "imageUrl": mainImage.asset->url,
  }[]`;

  const data: ContentCardProps[] = await client.fetch(query);

  // Format the date on the server-side
  return data.map((cardContent: ContentCardProps) => ({
    ...cardContent,
    formattedPublishedAt: new Date(cardContent.publishedAt).toLocaleDateString("sl-SI", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }),
  }));
}

export default async function Galerija() {
  const contents = await getImages();

  return (
    <div className="grid gap-y-8 sm:gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-2 mt-10">
      {contents.map((content) => (
        <article
          key={content._id}
          className="overflow-hidden dark:border-zinc-600 border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 transform transition-transform duration-300 hover:scale-105 dark:hover:shadow-purple-500/70 hover:shadow-purple-500/70"
        >
          <Link key={content._id} href={`/galerija`}>
            <div className="relative h-56 w-full overflow-hidden group">
              {/* Image */}
              <Image
                fill
                src={content.imageUrl}
                alt="Image of the content"
                className="object-cover"
                priority
              />

              {/* Overlay and Title, initially hidden */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                {/* Flexbox container to stack title and date */}
                <div className="flex flex-col items-center">
                  <h2 className="text-white text-lg font-bold px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {content.title}
                  </h2>
                  <p className="text-white text-sm px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {content.formattedPublishedAt}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}