import { client } from "@/lib/sanity";
import Image from "next/image";
import { PortableText, PortableTextBlock } from "@portabletext/react";

interface Story {
  title: string;
  currentSlug: string;
  authorName: string;
  authorImageUrl: string;
  _id: string;
  imageUrl: string;
  publishedAt: Date;
  shortDescription: string;
  content: PortableTextBlock[];
  formattedPublishedAt: string;
}

export const revalidate = 30;

async function getArticle(slug: string) {
  const query = `
    *[_type == "story-post" && slug.current == '${slug}'] {
      title,
      "currentSlug": slug.current,
      "authorName": author->name,
      "authorImageUrl": author->image.asset->url,
      _id,
      "imageUrl": mainImage.asset->url,
      publishedAt,
      content,
    }[0]`;

  const data = await client.fetch(query);
  // Format the date on the server-side
  return {
    ...data,
    formattedPublishedAt: new Date(data.publishedAt).toLocaleDateString("sl-SI", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }),
  };
}

export default async function StoryArticle({
  params,
}: {
  params: { slug: string };
}) {
  
  const data: Story = await getArticle(params.slug);

  return (
    <div className="mt-8">
      {/* Container with border and shadow */}
      <div className="relative max-w-[900px] mx-auto bg-gray-50 dark:bg-black overflow-hidden shadow-lg dark:shadow-purple-700">
        {/* Background Gradient using ::before */}
        <div className="relative mr-12 ml-12 mb-10">
          <div className="background-gradient"></div>

          {/* Title */}
          <h1>
            <span className="mt-7 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
              {data.title}
            </span>
          </h1>

          {/* Data about author and published date */}
          <div className="flex items-center justify-between mt-14">
            {/* Author Info (left-aligned) */}
            <div className="flex items-center space-x-2">
              <Image
                src={data.authorImageUrl}
                width={40}
                height={40}
                alt="Author Image"
                className="object-cover rounded-full border-2 border-primary"
              />
              <p className="text-sm text-gray-500">{data.authorName}</p>
            </div>

            {/* Published Date with Icon (right-aligned) */}
            <div className="flex items-center space-x-1">
              <svg
                className="mr-2 w-5 h-5 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-sm text-gray-500">{data.formattedPublishedAt}</p>
            </div>
          </div>

          {/* Image */}
          <div className="mt-8">
            <Image
              src={data.imageUrl}
              width={800}
              height={800}
              alt="Title Image"
              priority
              className="rounded-lg mx-auto"
            />
          </div>

          <p className="italic text-sm text-gray-500 mt-2">
            FOTO: Vse pravice so pridržane. Avtor slike se strinja s prosto uporabo slike na tej spletni strani.
          </p>

          {/* Content (same width as image) */}
          <div className="mt-10 prose prose-purple prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary text-justify w-full max-w-none">
            {/* PortableText rendering */}
            <PortableText value={data.content} />
          </div>
        </div>
      </div>
    </div>
  );
}