// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  let RandArr = [];
  for (let i = 0; i < n; i++) {
    RandArr[i] = Math.floor(Math.random() * 11);
  }
  return RandArr;
}

const arrayRandom = giveMeRandom(20);

function checkArray(arr) {
  let sum5Value = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      console.log(arr[i]);
      sum5Value += arr[i];
    }
  }
  return sum5Value;
}

console.log("Il totale dei numeri casuali è", checkArray(arrayRandom));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  { price: 50, name: "item1", id: "#1", quantity: 4 },
  { price: 120, name: "item2", id: "#2", quantity: 2 },
  { price: 80, name: "item3", id: "#3", quantity: 10 },
];

function shoppingCartTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i].price * arr[i].quantity;
  }
  return total;
}

console.log("Il totale del carrello è", shoppingCartTotal(shoppingCart), "€");

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(newObj) {
  shoppingCart.push(newObj);
  return shoppingCart.length;
}

console.log(addToShoppingCart({ price: 22, name: "item4", id: "#4", quantity: 2 }));
console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(arr) {
  let maxPrice = 0;
  let maxPricePosition = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price > maxPrice) {
      maxPrice = arr[i].price;
      maxPricePosition = i;
    }
  }
  return arr[maxPricePosition];
}

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(arr) {
  return arr[arr.length - 1];
}

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil(n) {
  // ! se il parametro inserito è 9, il numero casuale non potrà essere superiore causando un loop,
  //  per questo motivo cercheremo che sia maggiore o uguale per tre volte di fila nel caso sia 9.

  let counter = 0;
  let emergencyCounter = 0;
  while (counter < 3 && emergencyCounter < 1000) {
    n1 = Math.floor(Math.random() * 10);
    console.log(n1);

    if (n === 9) {
      if (n1 >= n) {
        counter = counter + 1;
      } else {
        counter = 0;
      }
    } else {
      if (n1 > n) {
        counter = counter + 1;
      } else {
        counter = 0;
      }
    }
    emergencyCounter += 1;
  }
  let riscontro = "Sono servite " + emergencyCounter + " estrazioni, le ultime " + counter + " sono corrette.";
  return riscontro;
}

console.log(loopUntil(3));

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function average(arr) {
  let numbersArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numbersArray.push(arr[i]);
    }
  }

  const numbersCount = numbersArray.length;
  let numbersSum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    numbersSum = numbersSum + numbersArray[i];
  }
  const ave = numbersSum / numbersCount;
  return ave;
}

const numberTestSet = [60.3, 30, 40.9, "gino", 50];
console.log(average(numberTestSet));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const stringArray = ["gvuyg", "ciao", "fgndfnvdifhvnbifjnbvdifnvikfd2v", "fgndfnvdifhvnbifjnbvdifnvikfdnv", "fgvfdv", "fgndfnvdifhvnbifjnbvdifnvikf123"];

function longest(arr) {
  let longestCharacters = 0;
  let longestPosition = 0;
  const solutionArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestCharacters) {
      longestCharacters = arr[i].length;
      longestPosition = i;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === longestCharacters) {
      solutionArray.push(i);
    }
  }

  if (solutionArray.length === 1) {
    let solution = "";
    solution = "la stringa più lunga è alla posizione di indice " + longestPosition + " e il suo contenuto è '" + arr[longestPosition] + "'";
    return solution;
  } else {
    let solution = "";
    solution = "le stringhe più lunghe sono alle posizioni di indice " + solutionArray + " e il loro contenuto è " + indexPrinter(solutionArray, arr);
    return solution;
  }
}

// creo una funzione che prenda in input un array contente delle posizioni e
// stampi in una stringa tutti i valori delle posizioni corrispondenti di un secondo array.

function indexPrinter(array1, array2) {
  let output = "";
  for (let i = 0; i < array1.length; i++) {
    let n = array1[i];
    output = output + "'" + array2[n] + "'\n";
  }
  return output;
}

console.log(longest(stringArray));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function antiSpam(emailContent) {
  if (emailContent.toLowerCase().includes("spam") || emailContent.toLowerCase().includes("scam")) {
    return false;
  } else {
    return true;
  }
}

const emailT1 = "questa email è un sofisticato spam";
const emailT2 = "questa email è un sofisticato scam";
const emailT3 = "questa email va bene";
const emailT4 = "questa email è un sofisticato sPaM";

console.log(antiSpam(emailT1));
console.log(antiSpam(emailT2));
console.log(antiSpam(emailT3));
console.log(antiSpam(emailT4));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function daysGone(initialDate) {
  const date1 = new Date(initialDate);
  const today = new Date();
  const resultInMilliseconds = today - date1;
  const days = resultInMilliseconds / (1000 * 60 * 60 * 24);
  return days;
}

function roundedDaysGone(initialDate) {
  const result = Math.floor(daysGone(initialDate));
  return result;
}

console.log(daysGone("2025-12-6"));
console.log(roundedDaysGone("2025-12-6"));
console.log(daysGone("2025-11-1"));
console.log(roundedDaysGone("2025-11-1"));

console.log(daysGone("2024-12-7"));
console.log(roundedDaysGone("2024-12-7"));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x, y) {
  const matrix = [];

  for (let n = 0; n < y; n++) {
    for (let i = 0; i < x; i++) {
      matrix.push(n.toString() + i.toString());
    }
  }

  return matrix;
}

console.log(matrixGenerator(4, 5));
console.log(matrixGenerator(4, 5).length);
