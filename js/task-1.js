const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const titleCategory = category.querySelector('h2');
    console.log(`Category: ${titleCategory.textContent}`);
    const itemCategory = category.querySelectorAll('li');
    console.log(`Elements: ${itemCategory.length}`);
});