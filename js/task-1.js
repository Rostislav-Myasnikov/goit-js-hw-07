const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`Number of catecories: ${categoryItems.length}`);
for (const item of categoryItems) {
  const categoryTitle = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;
  console.log(`Categories: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
}
