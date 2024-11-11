import { Rule as ValidationRule} from "@sanity/types";

export default {
    name: 'sponsor',
    type: 'document',
    title: 'Sponzor',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Ime sponzorja'
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
            name: 'mainImage',
            type: 'image',
            title: 'Logotip',
            options: {
                hotspot: true
            }
        },
        {
            name: 'years',
            type: 'array',
            title: 'Leto sponzorstva',
            of: [{ type: 'number' }],
            validation: (Rule: ValidationRule) =>
              Rule.min(1).unique().custom((years: number[]) => {
                const minYear = 1919
                const currentYear = new Date().getFullYear();
                const invalidYear = years.find(year => year < minYear || year > currentYear);
                return invalidYear ? `Leto ${invalidYear} ni veljavno. Vnesi leta med ${minYear} in ${currentYear}.` : true;
              })
          },
        {
            name: 'content',
            title: 'Vsebina',
            type: 'array',
            of:[{type: 'block'}]
        }
    ]
}