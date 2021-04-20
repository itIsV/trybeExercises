// hello code

const specialFruit = ['Banana', 'Manga', 'maça'];

const additionalItens = ['Mel', 'Cereja picada'];

const fruitSalad = (specialFruit, additionalItens) => [...specialFruit, ...additionalItens];

console.log(fruitSalad(specialFruit, additionalItens));