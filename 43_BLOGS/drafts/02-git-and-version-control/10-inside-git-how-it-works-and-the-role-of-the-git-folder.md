## Introduction

Most beginners Git ko commands ke through use karte hain:

- `git init`
- `git add`
- `git commit`

Lekin ek point par important question aata hai:

**Git actually kaam kaise karta hai?**

Aur us question ka entrance gate hai:

**`.git` folder**

Jab tum `git init` chalate ho, Git ek hidden folder banata hai jiska naam hota hai `.git`.

Ye hidden folder hi Git ka internal system hota hai.

* * *

## What the `.git` Folder Is

`.git` folder project ke andar hidden internal folder hota hai jahan Git apni repository metadata aur history store karta hai.

Isme tumhara actual app code nahi hota.

Isme hota hai:

- history
- references
- configuration
- staged state
- object database

Simple words mein:

**Project folder tumhara visible work hai. `.git` folder Git ki memory hai.**

* * *

## Why `.git` Exists

Git ko sirf current files dekhni nahi hoti.

Usse ye bhi track karna hota hai:

- file snapshots
- commit history
- branch positions
- current branch
- staged changes

Agar ye sab random project files ke beech hota, toh system messy ho jaata.

Isliye Git ne apna dedicated hidden folder banaya.

* * *

## A High-Level Look Inside `.git`

Beginner level par kuch important names samajhna useful hota hai:

- `objects/`
- `refs/`
- `HEAD`
- `config`
- `index`

In sabko line-by-line memorize karne ki zarurat nahi hai.

Bas mental model build karna important hai.

* * *

## `HEAD`: Current Position Indicator

`HEAD` simple words mein current position pointer jaisa hota hai.

Ye generally batata hai ki abhi tum kis branch ya commit context mein ho.

Beginner ke liye yaad rakhne layak line:

**HEAD tells Git where you currently are.**

* * *

## `refs`: Branches and Named References

`refs` ke andar Git branches aur tags jaise references ko manage karta hai.

Yani branch name directly full history nahi hota.

Woh ek reference hota hai jo kisi commit position ki taraf point kar raha hota hai.

Ye samajhne se branch concept zyada logical lagta hai.

* * *

## `config`: Repository Settings

`config` file repository-specific settings store kar sakti hai.

Example:

- remotes
- local settings
- branch behavior

Yani har Git repository apni configuration bhi rakh sakti hai.

* * *

## `index`: Staging Area Ki Internal Form

`index` ko beginner level par staging area ki internal representation samjho.

Jab tum `git add` chalate ho, Git ye decide karta hai ki next commit ke liye kya prepare karna hai.

Ye staged state `index` se related hoti hai.

Isi wajah se staged aur unstaged changes alag-alag behave karte hain.

* * *

## `objects/`: Git Ka Real Storage Engine

`.git/objects` Git ka important storage area hota hai.

Yahan Git data ko objects ke form mein store karta hai.

Git ke 3 core objects beginners ko conceptual level par samajhne chahiye:

- Blob
- Tree
- Commit

* * *

## Blob Kya Hota Hai?

Blob ko simple terms mein file content object samjho.

Ye file ke content ko represent karta hai.

Important point:

Blob file name ya folder structure ke baare mein responsible nahi hota.

Ye mainly content ko store karta hai.

* * *

## Tree Kya Hota Hai?

Tree folder-like structure ko represent karta hai.

Yani:

- kaunsi file kahan hai
- kaunsi entry kis object se linked hai

Tree structure Git ko project layout samajhne mein help karti hai.

* * *

## Commit Kya Hota Hai?

Commit ek meaningful history checkpoint hota hai.

Internally commit object generally metadata aur references rakhta hai, for example:

- kis tree snapshot ko point kar raha hai
- parent commit kya hai
- author info
- message

Yani commit sirf "save" button nahi hai.

Ye history graph ka node hota hai.

* * *

## How Git Tracks Changes

Ye important hai:

Git ko beginner kabhi-kabhi line-by-line change tracker samajh lete hain.

High-level mental model zyada useful ye hai:

**Git project ke snapshots aur unke relationships ko track karta hai**

Matlab:

- changes visible hote hain
- snapshots meaningful checkpoints banate hain
- history linked rehti hai

* * *

## What Happens During `git add`

`git add` ka matlab hota hai:

"In changes ko next commit ke liye prepare karo."

High level par:

- working directory ke changes dekhe jaate hain
- relevant file content object form mein prepare hota hai
- staging state update hoti hai

Yani `git add` commit nahi karta.

Ye next snapshot ki preparation karta hai.

* * *

## What Happens During `git commit`

`git commit` ke time Git staged state ko ek proper history checkpoint bana deta hai.

High-level flow:

- staged snapshot ko finalize karta hai
- commit object create hota hai
- current branch reference move hoti hai
- HEAD indirectly new commit position par aa jata hai

Simple words mein:

**`git add` prepares, `git commit` records**

* * *

## How Hashes Help Git

Git internally hashes use karta hai.

Beginner level par isse aise samjho:

Hash ek unique fingerprint jaisa hota hai.

Iska fayda:

- objects ko uniquely identify kiya ja sakta hai
- integrity maintain hoti hai
- history references stable rehte hain

Simple idea:

**Git objects ko naam dene ke liye meaningful text labels nahi, fingerprints use karta hai.**

* * *

## Why This Mental Model Matters

Jab tum Git ko sirf commands ki tarah dekhte ho, bahut cheezein magical lagti hain.

But jab ye samajh aata hai ki:

- `.git` memory hai
- `objects` real storage hain
- `index` staging state hai
- `commit` linked history node hai

tab Git zyada sensible lagne lagta hai.

* * *

## Summary

- `.git` folder Git ka hidden internal system hota hai
- iske andar history, references, configuration, aur staging-related data hota hai
- Git ke core objects hain: blob, tree, and commit
- `git add` next snapshot prepare karta hai
- `git commit` history checkpoint create karta hai
- hashes Git ko integrity aur object identity maintain karne mein help karte hain

* * *

## Final Thought

Git ko deeply samajhne ke liye har command yaad karna enough nahi hota.

Mental model chahiye hota hai.

Aur `.git` folder us mental model ka best starting point hai.

* * *

## Continue Reading

- Previous: [Git for Beginners: Basics and Essential Commands](https://prashsainidev.hashnode.dev/git-for-beginners)
- Next: [Understanding HTML Tags and Elements](https://prashsainidev.hashnode.dev/html-tags-and-elements)

