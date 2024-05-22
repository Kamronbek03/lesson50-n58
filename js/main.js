// Uyga vazifa //
// Map and WeakMap //

// N1 //
// Map.prototype.deleteMany = function (...arg) {
//   let obj1 = this;
//   for (let i of arg) {
//     obj1.delete(i);
//   }
//   console.log(obj1);
// };
// let obj = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
//   ["d", 4],
// ]);
// obj.deleteMany("a", "c");

// N2 //
// function sumMap(obj) {
//   let sum = 0;
//   let values = obj.values();
//   for (let i of values) {
//     sum += i;
//   }
//   console.log(sum);
// }
// let obj = new Map([
//   ["a", 2],
//   ["b", 5],
//   ["c", 3],
// ]);
// sumMap(obj);

// N3 //
// function getMapIntersection(map1, map2) {
//   let map3 = new Map([]);
//   for (let i of map1) {
//     if (map2.has(i[0]) === false) {
//       map3.set(i[0], i[1]);
//     }
//   }
//   for (let j of map2) {
//     if (map1.has(j[0]) === false) {
//       map3.set(j[0], j[1]);
//     }
//   }
//   console.log(map3);
// }
// let map1 = new Map([
//   ["apple", 1],
//   ["banana", 2],
//   ["orange", 3],
// ]);
// let map2 = new Map([
//   ["apple", 4],
//   ["orange", 5],
//   ["grape", 6],
// ]);
// getMapIntersection(map1, map2);

// N4 //

// SET AND WEAKSET //
// N5 //
// function setUnion(set1, set2) {
//   let set3 = new Set([...set1, ...set2]);
//   console.log(set3);
// }
// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);
// setUnion(set1, set2);

// N6 //
// function setIntersection(set1, set2) {
//   let set3 = new Set([]);
//   for (let i of set1) {
//     for (let j of set2) {
//       if (i === j) {
//         set3.add(i);
//       }
//     }
//   }
//   console.log(set3);
// }
// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);
// setIntersection(set1, set2);

// N7 //
// function checkSetSubset(set1, set2) {
//   let s = 0;
//   let a = 1;
//   for (let i of set1) {
//     s++;
//     a *= set2.has(i);
//   }
//   if (true ** s === a) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// let set1 = new Set([1, 2]);
// let set2 = new Set([1, 2, 3, 4]);
// checkSetSubset(set1, set2);

// N8 //
// function removeDublicates(arr) {
//   let arr2 = [];
//   let arr1 = new Set([...arr]);
//   for (let i of arr1) {
//     arr2.push(i);
//   }
//   console.log(arr2);
// }
// let arr = [1, 2, 2, 3, 4, 4, 5];
// removeDublicates(arr);

// N9 //
// function mergeArr(arr1, arr2) {
//   let arr = [...arr1, ...arr2];
//   console.log(arr);
// }
// let arr1 = [1, 5, 8];
// let arr2 = [7, 9, 10];
// mergeArr(arr1, arr2);

// N10 //
// function concatArrays(...arr) {
//   let arr1 = [...arr];
//   let arr2 = [];
//   for (let i of arr1) {
//     arr2.push(i[0], i[1]);
//   }
//   console.log(arr2);
// }
// concatArrays([1, 2], [3, 4], [5, 6]);
