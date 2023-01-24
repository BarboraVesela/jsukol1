// tady je místo pro náš program


/* Vytvořte tlačítko, při jehož stisknutí se změní barva Čtvereček na zelenou.*/

function zmenBarvuCtverecku(){
    let ctverecek = document.querySelector('.ctverecek');
    ctverecek.style.backgroundColor = "green";
}

/*Upravte kód tak, aby se výsledek funkce secti() zobrazil v prvku s ID vysledek až po stiknutí nově přidaného tlačítka "Zobraz výsledek".*/

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */

function secti(a, b) {
    let c = a + b;
    return c;
  }

function zobrazVysledek(){
    document.querySelector("#vysledek").innerHTML = secti(4, 5);
}



/*Uprav funkci upozorni() tak, aby se navíc vypisoval text i do konzole a také nahradil text v elementu Čtvereček*/

/**
 * Upozorní uživatele při spuštění.
 */

function upozorni() {
    console.log ("Gratulace, právě jsi spustila tuto funkci!");
    alert("Gratulace, právě jsi spustila tuto funkci!");
    let ctverecek = document.querySelector('.ctverecek');
    ctverecek.textContent = "Gratulace, právě jsi spustila tuto funkci!";
    ctverecek.style.fontSize = '8px';
  }