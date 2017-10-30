var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr[Symbol.iterator]();
for (let letter of eArr) {
  console.log(letter);
}
