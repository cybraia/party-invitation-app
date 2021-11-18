// /**
//  *
//  * @param {String} name name of the person
//  * @returns greeting for the person
//  */
// export const sayHello = (name) => {
//     return `Hello ${name}`;
// }

// /**
//  *
//  * @param {Number} a first number
//  * @param {Number} b second number
//  * @returns addition of two numbers
//  */
// export const add = (a, b) => {
//     return a + b;
// }

/**
 *
 * @param {Number} index the index of element to be removed
 * @param {Array} dataList the list from which the element is to be removed
 * @returns updated array after removing the element
 */
export const removeItemFromArr = (index, dataList) => {
  console.log("first", dataList);
  dataList.splice(index, 1);
  console.log("next", dataList);
  return dataList;
};
