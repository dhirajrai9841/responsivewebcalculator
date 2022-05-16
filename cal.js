var displayVal='';
var previousvalue='';
var nextvalue='';


function getOpertorClicked(equal){
   displayval=document.getElementById("allclear").value="";
}


//var sum=0;
function getNumberClicked(id){
   displayVal+=document.getElementById(id).value;
   document.getElementById('output').value=displayVal
   previousvalue+=displayVal;
   displayVal='';
   nextvalue+=
     

}

function getOpertorClicked(id){
    displayVal+=document.getElementById(id).value;
    document.getElementById('output').value=displayVal
   
}
function output(){
    
   let n1= document.getElementById(one).value
   let n2= document.getElementById(two).value
   let n3= (n1,n2);
   document.getElementById(equal).innerHTML=n3;


}



