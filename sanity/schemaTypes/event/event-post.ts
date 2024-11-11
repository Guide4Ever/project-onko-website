export default {
    name: 'event-post',
    type: 'document',
    title: 'Dogodek',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Naslov dogodka'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'author',
            title: 'Avtor',
            type: 'reference',
            to: { type: 'author' } // type in to prideta skupaj
        },
        {
            name: 'publishedAt',
            title: 'Objavljeno',
            type: 'datetime'
        },
        {
            name: 'mainImage',
            title: 'Glavna slika',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}
