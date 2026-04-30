import fs from "node:fs"

// 1. WRITE

fs.writeFileSync("test.txt" , "kya haal chal")

// 2. READ
// const data = fs.readFileSync("test.txt" , "utf-8")

// console.log(data)

// fs.appendFileSync("test.txt" , "\nHello from append")

// fs.mkdirSync("myFolder/innerFolder" , {recursive:true});

// fs.unlinkSync("test.txt")

// fs.renameSync("test.txt" , "test1.txt")


// fs.cpSync("test1.txt" , "finalTest.txt")

fs.rmdirSync("myFolder")


// ------------------------------------------------------------
// SELF PRACTICE - Added after class for revision
// Sir's code above is unchanged. Uncomment one block at a time.
// ------------------------------------------------------------

// 1. CHECK IF FILE OR FOLDER EXISTS
// const fileExists = fs.existsSync("test.txt")
// console.log("File exists:" , fileExists)

// 2. FILE INFO
// const fileInfo = fs.statSync("test.txt")
// console.log("Size:" , fileInfo.size)
// console.log("Is file:" , fileInfo.isFile())
// console.log("Is folder:" , fileInfo.isDirectory())

// 3. READ FOLDER CONTENT
// const files = fs.readdirSync(".")
// console.log(files)

// 4. REMOVE FOLDER WITH CONTENT
// fs.rmSync("myFolder" , {recursive:true , force:true})

// NOTE:
// rmdirSync removes an empty folder.
// rmSync can remove file/folder and can also remove non-empty folders with recursive:true.
