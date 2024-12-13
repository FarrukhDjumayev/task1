let alisherPuli = +prompt("Qancha pulingiz bor (so'mda kiriting)?");
let dollarKursi = 11000;
let yevroKursi = 12000;
let samolyotBileti = 500 * dollarKursi; 
let mehmonxona = 250 * dollarKursi;    
let muzeyVaKonGilochar = 120 * yevroKursi;
let umumiyXarajat = samolyotBileti + mehmonxona + muzeyVaKonGilochar;
if (alisherPuli >= umumiyXarajat) {
    console.log("oq yol, Alisher");
} else {
    console.log("Alisher, ozgina sabr qilish kerak bo‘lar ekan.");
}
