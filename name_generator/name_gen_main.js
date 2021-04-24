const button = document.getElementById("button");

const firstName = [
  "John",
  "Bill",
  "Dave",
  "Gordon",
  "James",
  "Bruce",
  "Greg",
  "Jane",
  "Alice",
  "Kate",
];
const lastName = [
  "Bronson",
  "Ramsay",
  "McGregor",
  "Buffer",
  "Dean",
  "Allison",
  "Brosnan",
  "Jackson",
  "Jankins",
  "Gibbson",
];

function generateName(first, last) {
  let random = Math.floor(Math.random() * 10);
  return first[random] + " " + last[random];
}

const name = generateName(firstName, lastName);
console.log(name);
