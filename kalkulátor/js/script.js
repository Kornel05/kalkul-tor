function szamol() {
    let szam1szoveg =  document.getElementById("szam1").value;
    let szam2szoveg = document.getElementById("szam2").value;
    let muv = document.getElementById("muvelet").value;
    let eredmeny = 0;

    let x = parseInt(szam1szoveg);
    let y = parseInt(szam2szoveg);

    if (muv === "osszead") {
        eredmeny = x + y;
    } else if (muv === "kivon"){
        eredmeny = x - y;
    } else if (muv === "oszt"){
        eredmeny = x / y;
    } else if (muv === "szoroz"){
        eredmeny = x * y;
    }


    console.log(eredmeny);
}
document.getElementById("szam1").focus();
