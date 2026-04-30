import fs from "node:fs/promises"


const data = await fs.readFile("promise.txt" , "utf-8")

console.log(data)


// ------------------------------------------------------------
// SELF PRACTICE - Added after class for revision
// Sir's code above is unchanged. Uncomment this block to practice.
// ------------------------------------------------------------

// try {
//     await fs.writeFile("practice-promise.txt" , "Hello from promise practice")
//
//     const practiceData = await fs.readFile("practice-promise.txt" , "utf-8")
//     console.log("READ:" , practiceData)
//
//     await fs.appendFile("practice-promise.txt" , "\nHello from append")
//
//     await fs.mkdir("promiseFolder/innerFolder" , {recursive:true})
//
//     await fs.rename("practice-promise.txt" , "practice-promise-renamed.txt")
//
//     await fs.copyFile("practice-promise-renamed.txt" , "practice-promise-copy.txt")
//
//     const info = await fs.stat("practice-promise-renamed.txt")
//     console.log("Size:" , info.size)
//     console.log("Is file:" , info.isFile())
//     console.log("Is folder:" , info.isDirectory())
//
//     await fs.unlink("practice-promise-copy.txt")
//
//     await fs.rm("promiseFolder" , {recursive:true , force:true})
// } catch (error) {
//     console.log(error)
// }
