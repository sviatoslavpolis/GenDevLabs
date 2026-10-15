'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

function findPhoneByName(name) {
    for (let i = 0; i < phonebook.length; i++) {
        if (phonebook[i].name === name) {
            return phonebook[i].phone;
        }
    }
    return '';
}
const hash = {
    'Джейн Доу': '38044091100',
    'Ель Патрон': '+380671234567',
    'Олександра Самосвалова': '+380931234567'
};
function findPhoneByNameHash(name) {
    return hash[name];
}

module.exports = { phonebook, findPhoneByName };
