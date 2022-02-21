const fs = require("fs");
const path = require("path");

// Створити основну папку (main), в яку покласти дві інші папки:  перша - online
// fs.mkdir(path.join(__dirname, "main", "online"), {recursive: true}, (err => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// }))
//
// // // Друга - inPerson
// fs.mkdir(path.join(__dirname, "main", "inPerson"), (err) => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// })

// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),
// Відповідно перший - onlineUsers,
const onlineUsers = [
    {name: "Masha", age: 22, city: "Lviv"},
    {name: "Dasha", age: 23, city: "Paris"},
    {name: "Tasha", age: 23, city: "Berlin"}
]

// Другий - inPersonUsers;
const inPersonUsers = [
    {name: "Misha", age: 21, city: "Odessa"},
    {name: "Nisha", age: 24, city: "Berlin"},
    {name: "Grisha", age: 25, city: "Paris"}
]

// І створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів

// fs.writeFile(path.join(__dirname, "main", "online", "onlineList.txt"), ``, ((err) => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// }))
//
// fs.writeFile(path.join(__dirname, "main", "inPerson", "personList.txt"), ``, ((err) => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// }))

// Але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//1.
// onlineUsers.forEach(value =>
//     fs.appendFile(path.join(__dirname, "main", "online", "onlineList.txt"),
//         `NAME:${value.name}\n AGE:${value.age}\n CITY: ${value.city}\n`,
//         (err) => {
//             if (err) {
//                 console.log(err)
//                 throw err;
//             }
//         }
//     )
// )
// //2.
// inPersonUsers.forEach(value =>
//     fs.appendFile(path.join(__dirname, "main", "inPerson", "personList.txt"),
//         `NAME:${value.name}\n AGE:${value.age}\n CITY: ${value.city}\n`,
//         (err) => {
//             if (err) {
//                 console.log(err)
//                 throw err;
//             }
//         }
//     )
// )

// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)
const swapData = () => {
    fs.readFile(path.join(__dirname, 'main', 'inPerson', 'personList.txt'), ((err, data1) => {
        if (err) {
            console.log(err)
            throw err;
        }


        fs.readFile(path.join(__dirname, 'main', 'online', 'onlineList.txt'), (err, data2) => {
            if (err) {
                console.log(err)
                throw err;
            }


            fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'personList.txt'), `${data2.toString()}`, {flag: "w"}, err => {
                if (err) {
                    console.log(err)
                    throw err;
                }

                fs.appendFile(path.join(__dirname, 'main', 'online', 'onlineList.txt'), `${data1.toString()}`, {flag: "w"}, err => {
                    if (err) {
                        console.log(err)
                        throw err;
                    }
                });

            });

        })

    }));

}

swapData();