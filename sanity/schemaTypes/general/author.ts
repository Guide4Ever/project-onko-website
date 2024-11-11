export default {
    name: 'author',
    type: 'document',
    title: 'Avtor',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Ime'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'image',
            title: 'Slika',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'bio',
            type: 'text',
            title: 'Biografija'
        }
    ]
}