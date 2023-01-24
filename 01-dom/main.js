// tady je místo pro náš program


/*JavaScriptem změnit barvu nadpisu.*/

let nadpis;
nadpis = document.querySelector('.nadpis');
nadpis.style.color = 'magenta';

/*Zvětšit velikost písma odstavce a/nebo ho udělat tučně nebo kurzívou.*/

let odstavec;
odstavec = document.querySelector('.odstavec');
odstavec.style.fontStyle = 'italic';

/*Vyměnit obrázek kočky za psa. Koček je všude dost, nepotřebujeme tu další (nene :D).*/
let kocka;
kocka = document.querySelector('.kocka');
kocka.src = 'pes.jpg';

/*Přesunout čtvereček na jiné místo nebo ho otočit.*/

let ctverecek;
ctverecek = document.querySelector('.ctverecek');
ctverecek.style.rotate = '90deg';