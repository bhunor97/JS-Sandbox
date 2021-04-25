const button = document.getElementById("button");
const nameBar = document.getElementById("name_bar");
// nameBar.value = " ";

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

firstName.unshift("Allison", "Jonah", "Thomas", "Jeffrey", "Adam");

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

lastName.push("Potter", "Pilgrim", "Nash", "McQueen", "Knocker");

// function generateName(first, last) {
//   let randomFirst = Math.floor(Math.random() * firstName.length);
//   let randomSecond = Math.floor(Math.random() * lastName.length);
//   return first[randomFirst] + " " + last[randomSecond];
// }
// const name = generateName(firstName, lastName);
// button.onclick = () => {
//   nameBar.value = name;
// };

button.onclick = () => {
  let first = firstName[Math.floor(Math.random() * firstName.length)];
  let second = lastName[Math.floor(Math.random() * lastName.length)];
  nameBar.value = first + " " + second;
};
