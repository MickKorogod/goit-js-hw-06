
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listItem = document.querySelector ("#ingredients")
const ingredientList = ingredients.map(itemList => {
  const item = document.createElement("li")
  item.classList.add('item');
  item.textContent = ingredients;
  listItem.append(item);
})