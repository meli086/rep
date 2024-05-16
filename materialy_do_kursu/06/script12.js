const osoba = {
    imie: 'Jan',
    get imieOsoby(){
        return this.imie;
    },
    set imieOsoby(imie){
        return this.imie = imie;
    },
}

console.log(osoba.imie);

osoba.imieOsoby = 'Janek';

console.log(osoba.imie);

