const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListElement = document.querySelector('#ingredients');

ingredientsListElement.append(...ingredients.map(ingredient => {
  const ingredientElement = document.createElement('li');
  ingredientElement.textContent = ingredient;
  return ingredientElement;
}));




// В HTML есть пустой список ul#ingredients.

// < ul id = "ingredients" ></ >
//   В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

// Вариант скрипта № 2
// const listElement = document.querySelector('#ingredients');
// console.log(listElement);


// const ingredientElement = ingredients.map(ingredient => {
//   const ingredientElement = document.createElement('li');
//   ingredientElement.textContent = ingredient;

//   return ingredientElement;
// });

// listElement.append(...ingredientElement);