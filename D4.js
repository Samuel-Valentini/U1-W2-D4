/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  const a = l1 * l2;
  return a;
}

console.log(area(5, 10));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
  let somma = n1 + n2;
  if (n1 === n2) {
    somma *= 3;
  }
  return somma;
}

console.log(crazySum(3, 4));
console.log(crazySum(3, 3));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n1) {
  let diff = Math.abs(n1 - 19);
  if (n1 > 19) {
    diff *= 3;
  }
  return diff;
}

console.log(crazyDiff(-5));
console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  let value;
  if ((n > 20 && n <= 100) || n === 400) {
    value = true;
  } else {
    value = false;
  }
  return value;
}

console.log(boundary(21));
console.log(boundary(400));
console.log(boundary(18));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(s) {
  let upperCas = s.toUpperCase();

  if (!upperCas.startsWith("EPICODE")) {
    s = "EPICODE" + s;
  }
  return s;
}

console.log(epify("test"));
console.log(epify("epicode già presente"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
  let result;

  if (n % 3 === 0 || n % 7 === 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

console.log(check3and7(21));
console.log(check3and7(11));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(s) {
  let arrS = s.split("");
  //   console.log(arrS);
  let arrSRev = [];
  for (let i = 0; i < arrS.length; i++) {
    arrSRev[i] = arrS[arrS.length - 1 - i];
  }
  //   console.log(arrSRev);
  s = arrSRev.join("");
  //   console.log(s);
  return s;
}

console.log(reverseString("ciao come stai?"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(s) {
  let arrS = [];
  arrS = s.split(" ");

  //   console.log(arrS);

  for (let i = 0; i < arrS.length; i++) {
    let arrSElements = arrS[i].split("");
    let firstElement = arrSElements.shift();
    firstElement = firstElement.toUpperCase();
    arrSElements.unshift(firstElement);
    arrS[i] = arrSElements.join("");
  }

  s = arrS.join(" ");

  return s;
}

console.log(upperFirst("Ciao, come stai?"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(s) {
  let arrS = s.split("");
  arrS.shift();
  arrS.pop();

  s = arrS.join("");

  return s;
}

console.log(cutString("Impressionante davvero"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  let RandArr = [];
  for (let i = 0; i < n; i++) {
    RandArr[i] = Math.floor(Math.random() * 11);
  }
  return RandArr;
}

console.log(giveMeRandom(5));
