
let wybor;
const praccownicy = new Array()

function Osoba(imie,nazwisko,numer){
    this.imie = imie
    this.nazwisko = nazwisko
    this.numer = parseInt(numer)
}

// function tworzenie(imie,nazwisko,numer){
//     let osoba = new Osoba(imie,nazwisko,numer)
//     praccownicy.push(osoba)
// }



const metody = {
    tworzeniePracownika: function(imie,nazwisko,numer){
        console.log(this)
        let osoba = new Osoba(imie,nazwisko,numer)
        praccownicy.push(osoba)
    },
    wyswietlPracownika: function(){
        document.write('Imię: ',this.imie,' nazwisko: ',this.nazwisko)    
    },
    usuwaniePracownika: function(){
        delete praccownicy[this.numer-1]
    }

}

while(wybor!=0){
    wybor = prompt('Podaj co chcesz zrobić. (1-tworzenie, 2-usuwanie, 3-wyświetlanie,, 4- 0-wyjście)')
    switch(wybor){
        case '1':
            let imie = prompt('podaj imię')
            let nazwisko = prompt('Podaj nazwisko')
            let numer = prompt('Podaj numer')
            let tworzenie = metody.tworzeniePracownika.bind(praccownicy)
            tworzenie(imie,nazwisko,numer)
            
            break;
        case '2':
           let nrP = prompt('Podaj nr indeksu pracownika do usunięcia')
            
            metody.usuwaniePracownika.apply(praccownicy[nrP])
            wybor=0
            break;
        case '3':
            praccownicy.forEach((e)=>{
                console.log(e)
            })
            break;
        case '4':
            let nr = prompt('Podaj numer indeksu pracownika')
            metody.wyswietlPracownika.call(praccownicy[nr])
            wybor = 0
            break;
        default:
            document.write('Nie wybrano odpowiedniej opcji!')
    }
}

console.log(praccownicy)