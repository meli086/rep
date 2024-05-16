const osoba = {
    imie: 'Jan',
    nazwisko: 'Kowalski',
    get imieOsoby(){
        return this.imie;
    },
    set imieOsoby(imieOsoby){
        this.imie = imieOsoby;
    },
    get podpis(){
        return this.imie+' '+this.nazwisko;
    }
}

// console.log(osoba.imie);
// console.log(osoba.imieOsoby);
// osoba.imieOsoby = 'Janek';
// console.log(osoba.imie);

console.log(osoba.podpis.toUpperCase());

