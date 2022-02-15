//*1--------------------------------------
// const {test} = require("./test/helper");
//
// test()
// console.log(process.cwd(), "process");
// console.log(__dirname, "app dirname")

//*2--------------------------------------
// require("./test/helper")
// console.log(name)

//*3--------------------------------------
const path = require("path");

// const joinedPath = path.join(__dirname, "test2", "files", "public", "text.txt");
// console.log(joinedPath)

//*4--------------------------------------
// const normalizedPath = path.normalize("test///test2////public//files//text.txt");
// console.log(normalizedPath, "NORMALIZE");

//*5--------------------------------------
// const resolvedPath = path.resolve("test///test2////public//files//text.txt");
// console.log(resolvedPath, "RESOLVE");

//*6--------------------------------------
const os = require("os");

// console.log(os.cpus())
// console.log(os.cpus().length)
// console.log(os.arch())

//*7--------------------------------------
const fs = require("fs");

// fs.writeFileSync(path.join(__dirname, "files", "files.txt"), "SOME DATA");
// fs.writeFile(path.join(__dirname, "files", "files2.txt"), "SOME DATA2", (err => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// }))

//*8--------------------------------------
// fs.readFile(path.join(__dirname, "files", "files2.txt"),"utf-8", (err,data) => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
//     console.log(data)
// })

//*9--------------------------------------
// for (let i = 0; i < 100; i++) {
//     fs.appendFile(path.join(__dirname, "files", "files2.txt"), "\nNEW DATA",{flag: "w"}, (err) => {
//         if (err) {
//             console.log(err)
//             throw err;
//         }
//     })
// }

//*10--------------------------------------
// fs.truncate(path.join(__dirname, "files", "files2.txt"), (err => {
//     if (err) {
//             console.log(err)
//             throw err;
//         }
// }))

//*11--------------------------------------
// fs.unlink(path.join(__dirname, "files", "files2.txt"), (err => {
//     if (err) {
//             console.log(err)
//             throw err;
//         }
// }))

//*12--------------------------------------
// fs.mkdir(path.join(__dirname, "public", "test1", "test2", "test3"), {recursive: true}, (err => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// }))

//*13--------------------------------------
// fs.rmdir(path.join(__dirname, "public", "test1", "test2", "test3"), (err) => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// })

//*14--------------------------------------
// fs.readdir(path.join(__dirname, "files"), ((err, data) => {
//     console.log(data);
// }))

//*15--------------------------------------
// fs.rename(path.join(__dirname, "files", "kuku"), path.join(__dirname, "files", "kukuyopta"), ((err) => {
//     console.log(err)
// }))

fs.rename(path.join(__dirname, "files", "kukuyopta"),
    path.join(__dirname, "public", "test1", "test2", "kukuyopta"), ((err) => {
    console.log(err)
}))









