// async function fetchBooks() {
//     return new Promise((resolve) => {
//         return setTimeout(() => {
//             resolve(
//                 [
//                     {
//                         authorId: 1,
//                     },
//                     {
//                         authorId: 2,
//                     },
//                     {
//                         authorId: 3,
//                     },
//                     {
//                         authorId: 4,
//                     },
//                     {
//                         authorId: 5,
//                     }
//                 ])
//         }, 3000)
//     })
// }


// async function fetchAuthors(id) {
//     return new Promise((resolve) => {
//         return setTimeout(() => {
//             resolve(
//                 [
//                     {
//                         authorId: 1,
//                     },
//                     {
//                         authorId: 2,
//                     },
//                     {
//                         authorId: 3,
//                     },
//                     {
//                         authorId: 4,
//                     },
//                     {
//                         authorId: 5,
//                     }
//                 ].filter((item) => item.authorId === id))
//         }, 3000)
//     })
// }

// async function getBooksAndAuthor() {
//     let books = await fetchBooks();//3s
//     let authorItem = await fetchAuthors(5)//3s
//     return {
//         authorItem,
//         authorId: books.filter((item) => item.authorId === 5)
//     }
// }

// async function getBooksAndAuthor2() {
//     let bookPromise = fetchBooks();
//     let authorPromise = fetchAuthors(5)
//     const book = await bookPromise;
//     const author = await authorPromise;
//     return {
//         author,
//         books: book.filter((item) => item.authorId === 5)
//     }
// }

// async function parallel() {
//     console.log(await getBooksAndAuthor2());
// }

// async function test() {
//     await parallel();
// }

// test()

// for example two

// async function fetchOwners(catIDs) {
//     const owners = [];
//     for (const id of catIDs) {
//         const cat = await fetchCat(id);// get detail object Cat 3000s
//         const owner = await fetchOwner(cat.ownerID); //find owner via ownerID 3000s
//         owners.push(owner);
//     }
//     return owners;
// }

// await Promise.all([pending,pending,pending,pending])

async function fetchCats(catId) {
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve(
                [
                    {
                        catName: 'Meos1',
                        ownerId: 1
                    },
                    {
                        catName: 'Meos2',
                        ownerId: 2,
                    },
                    {
                        catName: 'Meo3',
                        ownerId: 3,
                    },
                    {
                        catName: 'Meo4',
                        ownerId: 4,
                    },
                    {
                        catName: 'Meo5',
                        ownerId: 5,
                    }
                ].filter((item) => item.ownerId === catId))
        }, 200)
    })
}


async function fetchOwners(ownerId) {
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve(
                [
                    {
                        ownerId: 1,
                        name: 'Pham Dat'
                    },
                    {
                        ownerId: 2,
                        name: 'Pham Hoa'
                    },
                    {
                        ownerId: 3,
                        name: 'Pham Xuan'
                    },
                    {
                        ownerId: 4,
                        name: 'Pham Phu'
                    },
                    {
                        ownerId: 5,
                        name: 'Pham Minh'
                    }
                ].filter((item) => item.ownerId === ownerId))
        }, 200)
    })
}

const catIDs = [1, 2, 3, 4, 5]

async function exute() {
    let owners = []
    for (const catId of catIDs) {
        const catItem = await fetchCats(catId)
        const ownerItem = await fetchOwners(catItem[0].ownerId)
        owners.push(ownerItem[0])
    }
    return owners;
}

async function exute2() {
    const result = catIDs.map((catId) => {
        return fetchCats(catId).then((catItem) => fetchOwners(catItem[0].ownerId)).then((resp) => resp[0])
    })
    return await Promise.all(result)
}

async function test() {
    console.log(await exute2())
}
test()
