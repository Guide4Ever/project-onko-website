import { Rule as ValidationRule } from '@sanity/types';

export default {
    name: 'payment-details',
    type: 'document',
    title: 'Podatki za plačilo',
    fields: [
        {
            name: 'nazivPodjetja',
            title: 'Naziv podjetja',
            type: 'string',
        },
        {
            name: 'davcnaStevilka',
            title: 'Davčna številka',
            type: 'string',
            validation: (Rule: ValidationRule) =>
                Rule.regex(/^\d{8}$/, {
                  name: 'davčna številka', // Error message if regex doesn't match
                  invert: false,            // If set to true, the rule will fail if the regex matches
                }).error('Vnesi veljavno 8-mestno davčno številko.')
        },
        {
            name: 'bankAccountNumber',
            title: 'Številka bančnega računa',
            type: 'string',
            validation: (Rule: ValidationRule) =>
                Rule.regex(/^SI\d{17}$/, {
                name: 'številka bančnega računa', // Error message if regex doesn't match
                }).error('Vnesi veljavno 19-mestno številko bančnega računa, ki se začne s "SI". Piši brez presledkov.')
        }
    ]
}