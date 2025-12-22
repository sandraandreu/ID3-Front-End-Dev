const books = [
    { title: 'El ataque de los ornitorrincos en celo', category: 'horror', read: true },
    { title: 'La venganza de Xindasvinto', category: 'history', read: true },
    { title: 'Ruperto y los caballeros radiantes', category: 'fantasy', read: true },
    { title: 'Arcanum ilimitado', category: 'fantasy', read: false },
    { title: 'El señor de los anillos', category: 'fantasy', read: true }
];

// creamos un objeto vacío

const booksReadByCategory = {};

books.forEach(function(book){
    if(!book.read) {
        return;
    }
    if (booksReadByCategory[book.category] === undefined) {
        booksReadByCategory[book.category] = 1
        return;
    }
    booksReadByCategory[book.category] += 1   
})

console.log(booksReadByCategory)

