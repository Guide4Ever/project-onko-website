export interface ContentCardProps {
    imageUrl: string;
    title: string;
    _id: string;
    publishedAt: Date;
    formattedPublishedAt: string;
}

export default function ContentCard(params: ContentCardProps) {
    return(
        <img 
            key={params._id}
            src={params.imageUrl}
            loading="lazy"
            alt="Unsplash image"
            style={{width: "100%", height: "auto"}}
        />
    )
}