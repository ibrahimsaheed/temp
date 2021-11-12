
function conversion(){
let temperature=parseInt(prompt("Input a value to convert"))
alert("Your default unit is in Celcius")
let Temp=prompt("Convert to K or F?").toUpperCase();

if (Temp==="F"){
alert(
((temperature*1.8)+32 +" F")
);

}
else if (Temp==="K"){
  alert(temperature + 273+" K")
} else{

  alert("Please select one of the provided options")
}
}
conversion();