import Image from "next/image";
import { client } from "../lib/sanity";
import Link from "next/link";

interface Story {
    title: string;
    currentSlug: string;
    authorName: string;
    authorImageUrl: string;
    _id: string;
    imageUrl: string;
    publishedAt: Date;
    shortDescription: string;
    formattedPublishedAt: string;
  }

  async function getStories() {
    const query = `*[_type == 'story-post'] | order(publishedAt desc) {
      title,
      "currentSlug": slug.current,
      "authorName": author->name,
      "authorImageUrl": author->image.asset->url,
      _id,
      "imageUrl": mainImage.asset->url,
      publishedAt,
      shortDescription
    }`;
  
    const data = await client.fetch(query);
  
      // Format the date on the server-side
      return data.map((story: Story) => ({
        ...story,
        formattedPublishedAt: new Date(story.publishedAt).toLocaleDateString("sl-SI", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }),
      }));
  }

export const revalidate = 60;

export default async function Home() {
  const data: Story[] = await getStories();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="flex flex-col items-center justify-center space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Naše zgodbe
        </h1>
      </div>

      <div className="grid gap-y-8 sm:gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {data.map((story) => (
          <article
            key={story._id}
            className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 transform transition-transform duration-300 hover:scale-105 dark:hover:shadow-purple-500/70 hover:shadow-purple-500/70"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="ml-2 flex-shrink-0 w-6 h-6 relative">
                  <Image
                    fill
                    src={story.authorImageUrl}
                    alt="Image of the story"
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  {story.authorName}
                </h3>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.512 8.72a2.46 2.46 0 0 1 3.479 0 2.461 2.461 0 0 1 0 3.479l-.004.005-1.094 1.08a.998.998 0 0 0-.194-.272l-3-3a1 1 0 0 0-.272-.193l1.085-1.1Zm-2.415 2.445L7.28 14.017a1 1 0 0 0-.289.702v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .703-.288l2.851-2.816a.995.995 0 0 1-.26-.189l-3-3a.998.998 0 0 1-.19-.26Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7 3a1 1 0 0 1 1 1v1h3V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V4a1 1 0 0 1 1-1Zm10.67 8H19v8H5v-8h3.855l.53-.537a1 1 0 0 1 .87-.285c.097.015.233.13.277.087.045-.043-.073-.18-.09-.276a1 1 0 0 1 .274-.873l1.09-1.104a3.46 3.46 0 0 1 4.892 0l.001.002A3.461 3.461 0 0 1 17.67 11Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p
                  suppressHydrationWarning
                  className="m-[10px] text-sm font-medium text-gray-400 dark:text-gray-400"
                >
                  {story.formattedPublishedAt}
                </p>
              </div>
            </div>

            <Link key={story._id} href={`/zgodbe-borcev/${story.currentSlug}`}>
              <div className="h-56 w-full relative overflow-hidden">
                <Image
                  fill
                  src={story.imageUrl}
                  alt="Image of the story"
                  className="object-cover"
                />
              </div>
            </Link>

            <div className="p-4 sm:p-6">
              <Link href={`/zgodbe-borcev/${story.currentSlug}`}>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {story.title}
                </h3>
              </Link>

              <p className="line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400 overflow-hidden h-[calc(1.5rem*3)]">
                {story.shortDescription}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}