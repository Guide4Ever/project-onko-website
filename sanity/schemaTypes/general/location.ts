import { Rule as ValidationRule } from '@sanity/types';

export default {
    name: 'location',
    type: 'document',
    title: 'Lokacija',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Naslov organizacije oz. objekta'
        },
        {
            name: 'address',
            title: 'Naslov',
            type: 'string'
        },
        {
            name: 'city',
            title: 'Mesto',
            type: 'string'
        },
        {
            name: 'zip',
            title: 'Poštna številka',
            type: 'string',
            validation: (Rule: ValidationRule) =>
                Rule.regex(/^\d{4}$/, {
                  name: 'zip code', // Error message if regex doesn't match
                  invert: false,    // If set to true, the rule will fail if the regex matches
                }).error('Vnesi veljavno 4-mestno ZIP kodo.')
            },
        {
            name: 'country',
            title: 'Država',
            type: 'string'
        },
    ]
}