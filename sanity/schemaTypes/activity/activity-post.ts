export default {
    name: 'activity-post',
    type: 'document',
    title: 'Dejavnost',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Naslov dejavnosti'
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
