export default {
    name: 'about-project',
    type: 'document',
    title: 'O projektu Onko',
    fields: [
        {
            name: 'description1',
            title: 'O projektu Onko',
            type: 'array',
            of:[{type: 'block'}]
        },
        {
            name: 'description2',
            title: 'O DŠMS',
            type: 'array',
            of:[{type: 'block'}]
        },
        {
            name: 'facebook',
            title: 'Facebook link',
            type: 'string',
        },
        {
            name: 'instagram',
            title: 'Instagram link',
            type: 'string',
        },
        {
            name: 'website',
            title: 'DŠMS spletna stran link',
            type: 'string',
        },
        {
            name: 'email',
            title: 'E-pošni naslov za projekt Onko',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Lokacija',
            type: 'location',
        }
    ]
}