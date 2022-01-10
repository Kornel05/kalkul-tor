function szamol() {
    let szam1szoveg =  document.getElementById("szam1").Value;
    let szam2szoveg = document.getElementById("szam2").Value;
    console.log(`Első szám :${szam1szoveg}`);
    console.log(`Második szám ;${szam2szoveg}`);
}
document.getElementById("szam1").focus();
szamol();