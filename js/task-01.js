const categories = document.querySelectorAll('#categories > li.item');
console.log(`Number of categories:${categories.length}`);

const items = document.querySelectorAll('.item');

Array.prototype.forEach((items) => {
    const title = items.querySelector('h2').innerHTML;
    const itemsLength = items.querySelectorAll('li').length;
    console.log(`Category: ${title} / Elements: ${itemsLength}`);
});