/* - Vytvoř si sčítač dvou čísel.
- Nech uživatele zadat dvě celá čísla do dvou vstupů pro číslo.
- Poté, co obě vyplní, vypiš výsledek do HTML.
- Interně můžeš použít funkci z Lekce 1: https://github.com/Czechitas-JavaScript-1/lekce1-funkce-udalosti/blob/main/main.js
- Minibonus: Pokud chceš, můžeš rozšířit na odečítání, násobení i dělení (jak budeš mezi operacemi přepínat?). */

function vypisVysledek(c) {
    console.log(c)
    document.querySelector('#vysledek > span').innerHTML = Math.round((c + Number.EPSILON) * 100) / 100;   //https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
}

let prvni = document.querySelector('input[name=prvni]');
let druhe = document.querySelector('input[name=druhe]');

document.querySelector('.secti').addEventListener('click', () => {
    let a = parseFloat(prvni.value);
    let b = parseFloat(druhe.value);

    let c = a + b;
    vypisVysledek(c);
})

document.querySelector('.odecti').addEventListener('click', () => {
    let a = parseFloat(prvni.value);
    let b = parseFloat(druhe.value);

    let c = a - b;
    vypisVysledek(c);
})

document.querySelector('.vynasob').addEventListener('click', () => {
    let a = parseFloat(prvni.value);
    let b = parseFloat(druhe.value);

    let c = a * b;
    vypisVysledek(c);
})

document.querySelector('.vydel').addEventListener('click', () => {
    let a = parseFloat(prvni.value);
    let b = parseFloat(druhe.value);

    let c = a / b;
    vypisVysledek(c);
})





/* - Nech uživatele zadat jeho rodné číslo.
- Proveď validaci, zda se jedná o rodné číslo (převzato z webu Ministerstva vnitra ČR):
    - Rodné číslo je desetimístné číslo, které je dělitelné jedenácti beze zbytku; první dvojčíslí vyjadřuje poslední dvě číslice roku narození, druhé dvojčíslí vyjadřuje měsíc narození, u žen zvýšené o 50, třetí dvojčíslí vyjadřuje den narození; čtyřmístná koncovka je rozlišujícím znakem fyzických osob narozených v tomtéž kalendářním dnu.
    - Rodná čísla přidělená fyzickým osobám narozeným před 1. 1. 1954 mají stejnou strukturu, jsou však devítimístná s třímístnou koncovkou a nesplňují podmínku dělitelnosti jedenácti. */

let elementRC = document.querySelector('input[name=rodne-cislo]');
let vysledekValidace = document.querySelector('#validace > span');

function vypisValidaci() {
    let rcString = elementRC.value;
    let rcBezLomitka = rcString.replace("/", "");
    let rc = parseInt(rcBezLomitka);
    let rcPrvniDveCisla = parseInt(rcBezLomitka.slice(0,2));
    let rcDen = parseInt(rcBezLomitka.slice(4,6));
    let rcMes = parseInt(rcBezLomitka.slice(2,3));
   
    if (isNaN(rc)) {
        vysledekValidace.innerHTML = "Chyba - zadejte, prosím, rodné číslo"
    } else if (rcBezLomitka.length < 9) {
        vysledekValidace.innerHTML = "Rodné číslo je moc krátké";
    } else if (rcBezLomitka.length == 9 && rcPrvniDveCisla < 54) {
        vysledekValidace.innerHTML = "Rodné číslo nemohu ověřit, jedná o osobu narozenou před 1.1.1954";
    } else if (rcBezLomitka.length == 10 && rc % 11 == 0 && rcDen < 32 && (rcMes == 0 || rcMes == 1 || rcMes == 5 || rcMes == 6 )) {
        vysledekValidace.innerHTML = "Rodné číslo je v pořádku ověřeno."
    } else {
        vysledekValidace.innerHTML = "Chybné rodné číslo"
    }
}

elementRC.addEventListener('change', vypisValidaci);