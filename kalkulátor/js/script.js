function szamol() {
    let szam1szoveg =  document.getElementById("szam1").value;
    let szam2szoveg = document.getElementById("szam2").value;
    let muv = document.getElementById("muvelet").value;
    let eredmeny = 0;
    let kiiras = document.getElementById("kiiras");

    let x = parseInt(szam1szoveg);
    let y = parseInt(szam2szoveg);
     

    if (muv === "+") {
        eredmeny = x + y;
        
    } else if (muv === "-"){
        eredmeny = x - y;
        
        
    } else if (muv === "/"){
        eredmeny = x / y;
        
    } else if (muv === "*"){
        eredmeny = x * y;
       
    }

    kiiras.innerText = `${x} ${muv} ${y} = ${eredmeny}`;
    console.log(eredmeny);

    
    
    document.getElementById("szam1").value = ""; 
    document.getElementById("szam2").value = ""; 
    document.getElementById("muvelet").value = "+"; 

    document.getElementById("szam1").focus();
    
}


document.getElementById("szam1").focus();