function searchIt()  
{ ;
number = document.form1.text1.value;
var str1 = new String("Hello world");
var URL = "http://www.tutorialspoint.com";

var str2 = new String("Hello");
var URL = "http://www.google.co.in";
  
switch (number)  
{  
case '1':  
document.getElementById('bodycontent').innerHTML = str2.link( URL );
break;  
case '2':  
document.write(str2.link( URL ));  
break;  
case '3':  
alert("Marks [ >= 70 and <80 ]");  
break;  
case '4':  
alert("Marks [ >= 60 and <70 ]");  
break;  
case '5':  
alert("Marks < 60");  
break;  
default:  
alert("Wrong grade.........");  
}  
} 