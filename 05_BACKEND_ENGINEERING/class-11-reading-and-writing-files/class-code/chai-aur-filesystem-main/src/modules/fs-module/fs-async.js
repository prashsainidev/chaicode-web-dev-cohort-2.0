import fs from "node:fs"


// fs.writeFile("async.txt" , "Hello Async!" , (err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("File written successfully")
// })

// fs.readFile("async.txt" ,"utf-8" , (err , data)=>{
//      if(err){
//         console.log(err)
//     }

//     console.log("READ:" , data)
// } )

fs.readFile("a.txt" , "utf-8" , (error , data)=>{
    fs.writeFile("b.txt" , data , (err)=>{
        fs.appendFile("b.txt" , "\nDone" , (err)=>{
            fs.unlink("a.txt" , (err)=>{
                console.log("a.txt deleted")
            })
        })
    })
})


// ------------------------------------------------------------
// SELF PRACTICE - Added after class for revision
// Sir's code above is unchanged. Uncomment one block at a time.
// ------------------------------------------------------------

// 1. WRITE
// fs.writeFile("practice-async.txt" , "Hello from async practice" , (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//
//     console.log("File written successfully")
// })

// 2. READ
// fs.readFile("practice-async.txt" , "utf-8" , (err , data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//
//     console.log("READ:" , data)
// })

// 3. APPEND
// fs.appendFile("practice-async.txt" , "\nHello from append" , (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//
//     console.log("Content appended successfully")
// })

// 4. CREATE FOLDER
// fs.mkdir("asyncFolder/innerFolder" , {recursive:true} , (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//
//     console.log("Folder created successfully")
// })

// 5. RENAME OR MOVE FILE
// fs.rename("practice-async.txt" , "practice-async-renamed.txt" , (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//
//     console.log("File renamed successfully")
// })

// 6. COPY FILE
// fs.copyFile("practice-async-renamed.txt" , "practice-async-copy.txt" , (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//
//     console.log("File copied successfully")
// })

// 7. FILE INFO
// fs.stat("practice-async-renamed.txt" , (err , info)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//
//     console.log("Size:" , info.size)
//     console.log("Is file:" , info.isFile())
//     console.log("Is folder:" , info.isDirectory())
// })

// 8. DELETE FILE
// fs.unlink("practice-async-copy.txt" , (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//
//     console.log("File deleted successfully")
// })

// 9. REMOVE FOLDER
// fs.rm("asyncFolder" , {recursive:true , force:true} , (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//
//     console.log("Folder removed successfully")
// })
