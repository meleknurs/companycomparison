
import myJson from './JSON.json' assert {type: 'json'};
//
 let filterByCom =myJson.filter(FltrFun)
 
 filterByCom.forEach(displayCom)
 function displayCom (data) {
    
    const ulTag= document.getElementById("demo");
    const ilTag = document.createElement("li");
    ilTag.innerHTML=(data.company);
    ulTag.appendChild(ilTag);
 }

 function FltrFun(data) {
    if(data.location.includes("Bern"))
    return true;
 }

    
 


