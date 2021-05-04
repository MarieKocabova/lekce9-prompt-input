/* **Úkol 1 - prompt**

- Hledáš novou pračku do domácnosti.
- Vybuduj sekvenci promptů, které ti dovolí zadat:
    - šířku pračky v cm
    - výšku pračky v cm
    - hloubku pračky v cm
- Poté, co načteš tyto tři hodnoty ti tvůj kód vypočítá, jestli se ti pračka vleze na místo o parametrech (můžeš je mít pevně v kódu):
    - šířka 62 cm
    - výška 70 cm
    - hloubka 80 cm
- Výsledek vypiš formou alert() nebo do HTML – volba je na tobě. */

let dostupnaSirka = 62;
let dostupnaVyska = 70;
let dostupnaHloubka = 80;


function ukazPrompt() {
    let sirka = parseInt(prompt("Zadej šířku pračky:"));
    let vyska = parseInt(prompt("Zadej šířku pračky:"));
    let hloubka = parseInt(prompt("Zadej hloubku pračky:"));

    if(sirka <= dostupnaSirka && vyska <= dostupnaVyska && hloubka <= dostupnaHloubka) {
        alert('Pračka se vejde')
    } else {
        alert('Pračka se nevejde')
    }

}
ukazPrompt();
