document.querySelector(".btn--new").addEventListener("click", function () {
  location.reload();
  return false;
});

const hidden1 = document.querySelector(".hidden1");
const hidden2 = document.querySelector(".hidden2");
const hidden3 = document.querySelector(".hidden3");
const hidden4 = document.querySelector(".hidden4");
const overlay1 = document.querySelector(".overlay1");
const overlay2 = document.querySelector(".overlay2");
const overlay3 = document.querySelector(".overlay3");
const overlay4 = document.querySelector(".overlay4");
const team1 = document.querySelector(".btn-team1");
const team2 = document.querySelector(".btn-team2");
const enter1 = document.querySelector(".enter1");
const enter2 = document.querySelector(".enter2");
const goals1 = document.querySelector(".goals1");
const goals2 = document.querySelector(".goals2");
const play = document.querySelector(".ball");
const names1 = document.querySelector(".names1");
const names2 = document.querySelector(".names2");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");

team1.addEventListener("click", function () {
  hidden1.style.visibility = "visible";
  overlay1.style.visibility = "visible";
});

team2.addEventListener("click", function () {
  hidden2.style.visibility = "visible";
  overlay2.style.visibility = "visible";
  document.getElementById("players2").innerHTML =
    document.querySelector(".names2").value;
});
enter1.addEventListener("click", function () {
  var x = names1.value.split(",");
  console.log("Team 1");
  x.forEach((element) => {
    console.log(element);
  });

  var commas = names1.value.split(",").length;
  if (commas > 11) {
    alert("The number of players must be less than 11!");
  } else {
    hidden1.style.visibility = "hidden";
    overlay1.style.visibility = "hidden";
    document.getElementById("players1").innerHTML =
      document.querySelector(".names1").value;
  }
});

overlay1.addEventListener("click", function () {
  hidden1.style.visibility = "hidden";
  overlay1.style.visibility = "hidden";
});

enter2.addEventListener("click", function () {
  var x = names2.value.split(",");
  console.log("Team 2");
  x.forEach((element) => {
    console.log(element);
  });

  var commas = names2.value.split(",").length;
  if (commas > 11) {
    alert("The number of players must be less than 11!");
  } else {
    hidden2.style.visibility = "hidden";
    overlay2.style.visibility = "hidden";
    document.getElementById("players2").innerHTML =
      document.querySelector(".names2").value;
  }
});

overlay2.addEventListener("click", function () {
  hidden2.style.visibility = "hidden";
  overlay2.style.visibility = "hidden";
});

play.addEventListener("click", function () {
  score1.innerHTML = goals1.value;
  score2.innerHTML = goals2.value;
  if (document.getElementById("name1").value === "") {
    alert("Please write the name of team 1!");
    return;
  }
  if (document.getElementById("name2").value === "") {
    alert("Please write the name of team 2!");
    return;
  }
  if (names1.value === "") {
    alert("Please write team 1 players!");
    return;
  }
  if (names2.value === "") {
    alert("Please write team 2 players!");
    return;
  }
  var x = Number(goals2.value) + Number(goals1.value);

  if (x > 7) {
    alert("The sum of goals must be less than 7");
    return;
  }
  if (goals1.value > goals2.value) {
    hidden4.style.visibility = "visible";
    overlay4.style.visibility = "visible";
    document.querySelector(".modal").style.boxShadow = "none";
    document.getElementById("congrats").innerHTML = `The winner is ${
      document.getElementById("name1").value
    }!
     `;
    hidden4.style.backgroundColor = "rgb(4, 185, 85)";
    overlay4.style.backgroundColor = "rgb(4, 185, 85)";
  } else if (goals1.value < goals2.value) {
    hidden4.style.visibility = "visible";
    overlay4.style.visibility = "visible";
    document.getElementById("congrats").innerHTML = `The winner is ${
      document.getElementById("name2").value
    }
     !`;
    hidden4.style.backgroundColor = "rgb(4, 185, 85)";
    overlay4.style.backgroundColor = "rgb(4, 185, 85)";
  } else {
    hidden4.style.visibility = "visible";
    overlay4.style.visibility = "visible";
    document.getElementById("congrats").innerHTML = "Draw!";
    hidden4.style.backgroundColor = "rgb(4, 185, 85)";
    overlay4.style.backgroundColor = "rgb(4, 185, 85)";
  }
  if (goals1.value == "1") {
    list1.innerHTML = "(1)";
  } else if (goals1.value == "2") {
    list1.innerHTML = "(1, 1), (2)";
  } else if (goals1.value == "3") {
    list1.innerHTML = "(1, 1, 1), (1, 2), (3)";
  } else if (goals1.value == "4") {
    list1.innerHTML = "(1, 1, 1, 1), (1, 1, 2), (2, 2), (1, 3), (4)";
  } else if (goals1.value == "5") {
    list1.innerHTML =
      "(1, 1, 1, 1, 1), (1, 1, 1, 2), (1, 2, 2), (1, 1, 3), (2, 3), (1, 4), (5)";
  } else if (goals1.value == "6") {
    list1.innerHTML =
      "(1, 1, 1, 1, 1, 1), (1, 1, 1, 1, 2), (1, 1, 2, 2), (2, 2, 2), (1, 1, 1, 3), (1, 2, 3), (3, 3), (1, 1, 4), (2, 4), (1, 5), (6)";
  } else if (goals1.value == "0") {
    list1.innerHTML = "(0)";
  } else {
    list1.innerHTML =
      "(1, 1, 1, 1, 1, 1, 1), (1, 1, 1, 1, 1, 2), (1, 1, 1, 2, 2), (1, 2, 2, 2), (1, 1, 1, 1, 3), (1, 1, 2, 3), (2, 2, 3), (1, 3, 3), (1, 1, 1, 4), (1, 2, 4), (3, 4), (1, 1, 5), (2, 5), (1, 6), (7)";
  }

  list1.innerHTML = `Possible combinations of goals of Team 1: <br> ${list1.innerHTML}`;

  if (goals2.value == "1") {
    list2.innerHTML = "1";
  } else if (goals2.value == "2") {
    list2.innerHTML = "(1, 1), (2)";
  } else if (goals2.value == "3") {
    list2.innerHTML = "(1, 1, 1), (1, 2), (3)";
  } else if (goals2.value == "4") {
    list2.innerHTML = "(1, 1, 1, 1), (1, 1, 2), (2, 2), (1, 3), (4)";
  } else if (goals2.value == "5") {
    list2.innerHTML =
      "(1, 1, 1, 1, 1), (1, 1, 1, 2), (1, 2, 2), (1, 1, 3), (2, 3), (1, 4), (5)";
  } else if (goals2.value == "6") {
    list2.innerHTML =
      "(1, 1, 1, 1, 1, 1), (1, 1, 1, 1, 2), (1, 1, 2, 2), (2, 2, 2), (1, 1, 1, 3), (1, 2, 3), (3, 3), (1, 1, 4), (2, 4), (1, 5), (6)";
  } else if (goals2.value == "0") {
    list2.innerHTML = "(0)";
  } else {
    list2.innerHTML =
      "(1, 1, 1, 1, 1, 1, 1), (1, 1, 1, 1, 1, 2), (1, 1, 1, 2, 2), (1, 2, 2, 2), (1, 1, 1, 1, 3), (1, 1, 2, 3), (2, 2, 3), (1, 3, 3), (1, 1, 1, 4), (1, 2, 4), (3, 4), (1, 1, 5), (2, 5), (1, 6), (7)";
  }
  list2.innerHTML = `Possible combinations of goals of Team 2: <br> ${list2.innerHTML}`;
});
overlay3.addEventListener("click", function () {
  hidden3.style.visibility = "hidden";
  overlay3.style.visibility = "hidden";
});

overlay4.addEventListener("click", function () {
  hidden4.style.visibility = "hidden";
  overlay4.style.visibility = "hidden";
  overlay4.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  document.querySelector(".modal").style.boxShadow =
    "0 3rem 5rem rgba(0, 0, 0, 0.3)";
});

// Арнау Тенас,Иньяки Пенья,Лазар Царевич,Марк-Андре тер Стеген,Нето,Алекс Бальде, Дани Алвес,Жерар Пике,Жорди Альба,Клеман Лангле,Мусса Ваге

/* arr - array to store the
    combination
    index - next location in array
    num - given number
    reducedNum - reduced number */

// let arra = [];
// let x = 0;
// function findCombinationsUtil(arr, index, num, reducedNum) {
//   // Base condition
//   if (reducedNum < 0) return;

//   // If combination is
//   // found, print it
//   if (reducedNum == 0) {
//     for (let i = 0; i < index; i++) arra.push(arr[i]);
//     arra.push(" ");
//     return;
//   }

//   // Find the previous number
//   // stored in arr[]. It helps
//   // in maintaining increasing
//   // order
//   let prev = index == 0 ? 1 : arr[index - 1];

//   // note loop starts from
//   // previous number i.e. at
//   // array location index - 1
//   for (let k = prev; k <= num; k++) {
//     // next element of
//     // array is k
//     arr[index] = k;

//     // call recursively with
//     // reduced number
//     findCombinationsUtil(arr, index + 1, num, reducedNum - k);
//   }
// }

// /* Function to find out all
// combinations of positive
// numbers that add upto given
// number. It uses findCombinationsUtil() */
// function findCombinations(n) {
//   // array to store the combinations
//   // It can contain max n elements
//   let arr = [];

//   find(arra);
//   // find all combinations
//   findCombinationsUtil(arr, 0, n, n);
//   return;
// }

// function find(arra) {
//   let result = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
//   let res = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
//   for (let i = 0; i < arra.length; i++) {
//     if (arra[i] != " ") {
//       res[f][d] = arra[i];
//       d++;
//     }
//     if (arra[i] == " ") {
//       f++;
//     }
//   }
//   for (let i = 0; i < res.length; i++) {
//     for (let x = 0; x < res[i].length; x++) {
//       result[i] = res[i].filter((x) => x);
//     }
//   }

//   console.log(result);
//   let = x;
//   let rez = "";
//   for (let i = 0; i < result.length; i++) {
//     if (result[i].length) {
//       rez += ` (${result[i]})`;
//     }
//     if (result[i] == goals1.value) {
//       list1.innerHTML = `Possible combinations of goals of winner team: ${rez}`;
//       let arra = [];
//       let x = 0;
//     }
//   }
// }
