let value2=0;
let value1=0;



function randomNumberGenerator(){
  
  let randnumber=Math.floor((Math.random()*100));
  console.log("rand-function");
  value2=randnumber;
  console.log("value2: ",value2);
  
  }



function textReset(){
  document.getElementById("input").value = '';
  document.getElementById("display").innerHTML = '';
  document.getElementById("hint").value="0";
  document.getElementById("input").style.backgroundColor = "white";
 
}


function check(){
  console.log("check-function");
  value1=document.getElementById("input").value;
  console.log("value1: ",value1);
  console.log("value2: ",value2);
  
  if(value1==value2)
  {
    console.log("c");
    document.getElementById("display").innerHTML="CORRECT ";
    document.getElementById("input").style.backgroundColor = "lightgreen";
    
    
  }
  else{
    console.log("w");
    document.getElementById("display").innerHTML="WRONG";
    document.getElementById("input").style.backgroundColor = "red";
  }
  }

function hintFunction(){

  document.getElementById("hint").value="0";
  console.log("hint-function");
  console.log("value1: ",value1);
  console.log("value2: ",value2);

  let value3=Math.abs(value1-value2);
  console.log("value3: ",value3);

  let hintvalue=Math.abs(100-value3);
  console.log("hintvalue: ",hintvalue);

  document.getElementById("hint").value=hintvalue;
}



