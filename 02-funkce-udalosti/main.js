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
    let text = "Tady bude výsledek: ";
    document.querySelector("#vysledek").innerHTML = text + secti(4, 5);
}


/*Uprav funkci upozorni() tak, aby se navíc vypisoval text i do konzole a také nahradil text v elementu Čtvereček*/

/**
 * Upozorní uživatele při spuštění.
 */

function zobrazHlasku() {
    alert("Gratulace, právě jsi spustila tuto funkci!")
    let textAlert = "Gratulace, právě jsi spustila tuto funkci!";
    console.log(textAlert);
    let ctverecek = document.querySelector('.ctverecek');
    ctverecek.textContent = textAlert;
    ctverecek.style.fontSize = '8px';
  }