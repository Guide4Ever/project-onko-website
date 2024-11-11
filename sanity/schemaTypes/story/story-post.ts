export default {
    name: 'story-post',
    type: 'document',
    title: 'Zgodba',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Naslov zgodbe'
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
            name: 'mainImage',
            title: 'Glavna slika',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'categories',
            title: 'Kategorije',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }]
        },
        {
            name: 'publishedAt',
            title: 'Objavljeno',
            type: 'datetime'
        },
        {
            name: 'shortDescription',
            title: 'Kratek opis',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Vsebina',
            type: 'array',
            of:[{type: 'block'}]
        }
    ]
}