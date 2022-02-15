// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу як можна це обійти, але поки зробіть так.
const fs = require("fs");
const path = require("path");

// const createReadWrite = () => {
//     fs.writeFile(path.join(__dirname, "part1", "someFile.txt"), "SomeData", ((err) => {
//         if (err) {
//             console.log(err)
//             throw err;
//         }
//         fs.readFile(path.join(__dirname, "part1", "someFile.txt"), "utf-8", (err, data) => {
//             if (err) {
//                 console.log(err)
//                 throw err;
//             }
//             fs.writeFile(path.join(__dirname, "part1", "otherFile.txt"), `${data}`, ((err) => {
//                 if (err) {
//                     console.log(err)
//                     throw err;
//                 }
//             }))
//         })
//     }))
// }
// createReadWrite()

// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell

// const createCopyMoveRemove = () => {
//     fs.mkdir(path.join(__dirname, "part2"), (err) => {
//         if (err) {
//             console.log(err)
//             throw err;
//         }
//         fs.writeFile(path.join(__dirname, "part2", "file.txt"), "SomeData", (err) => {
//             if (err) {
//                 console.log(err)
//                 throw err;
//             }
//             fs.readFile(path.join(__dirname, "part2", "file.txt"), "utf-8", (err, data) => {
//                 if (err) {
//                     console.log(err)
//                     throw err;
//                 }
//                 fs.mkdir(path.join(__dirname, "part2New"), ((err) => {
//                     if (err) {
//                         console.log(err)
//                         throw err;
//                     }
//                     fs.writeFile(path.join(__dirname, "part2New", "fileNew.txt"), `${data}`, (err) => {
//                         if (err) {
//                             console.log(err)
//                             throw err;
//                         }
//                         fs.unlink(path.join(__dirname, "part2", "file.txt"), (err) => {
//                             if (err) {
//                                 console.log(err)
//                                 throw err;
//                             }
//                             fs.rmdir(path.join(__dirname, "part2"), (err) => {
//                                 if (err) {
//                                     console.log(err)
//                                     throw err;
//                                 }
//                             })
//                         })
//                     })
//                 }))
//             })
//         })
//     })
// }
// createCopyMoveRemove()

// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )

// fs.mkdir(path.join(__dirname, "part3", "folder1"), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
//     fs.mkdir(path.join(__dirname, "part3", "folder2"), (err) => {
//         if (err) {
//             console.log(err)
//             throw err;
//         }
//         fs.writeFile(path.join(__dirname, "part3", "file1.txt"), "Chupapi Munyanio", (err) => {
//             if (err) {
//                 console.log(err)
//                 throw err;
//             }
//             fs.writeFile(path.join(__dirname, "part3", "file2.txt"), "Pariruri Pariram", ((err1) => {
//                 if (err) {
//                     console.log(err)
//                     throw err;
//                 }
//                 fs.mkdir(path.join(__dirname, "part3", "folder3"),((err)=>{
//                     if (err) {
//                         console.log(err)
//                         throw err;
//                     }
//                 }))
//             }))
//         })
//     })
// })

// І напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

const scanDetector = () => {
    fs.readdir(path.join(__dirname, "part3"), ((err, data) => {
        if (err) {
            console.log(err)
            throw err;
        }
        data.forEach(data => {
            if (path.extname(data) === ".txt") {
                fs.truncate(path.join(__dirname, "part3", data), ((err) => {
                    if (err) {
                        console.log(err)
                        throw err;
                    }
                }))
            } else {
                fs.rename(path.join(__dirname, 'part3', data), path.join(__dirname, 'part3', `_new${data}`),
                    err => {
                        if (err) {
                            console.log(err);
                            throw err;
                        }
                    }
                );
            }
        })
    }))
}
scanDetector()
