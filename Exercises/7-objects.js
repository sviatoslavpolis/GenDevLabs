'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

function fn() {
    const user1 = {
        name: 'Святослав'
    };
    let user2 = {
        name: 'Вася'
    };

    user1.name = 'Іван';
    user2.name = 'Петро';
    user2 = {
        name: 'Андрій'
    };
    console.log(user1);
    console.log(user2);
}
module.exports = { fn };
