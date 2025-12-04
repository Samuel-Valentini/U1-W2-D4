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

const stringArray = [
  "gvuyg",
  "ciao",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  "fgndfnvdifhvnbifjnbvdifnvikfdnv",
  "fgvfdv",
];

console.log(stringArray.length);

function longest(arr) {
  let longestCharacters = 0;
  let longestPosition = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestCharacters) {
      longestCharacters = arr[i].length;
      longestPosition = i;
    }
  }
  return longestPosition;
}

console.log("la stringa più lunga è alla posizione di indice " + longest(stringArray) + " e il suo contenuto è " + stringArray[longest(stringArray)]);

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
