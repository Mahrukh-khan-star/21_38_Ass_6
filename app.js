//chapter 21 to 25


// var FirstName = prompt("Enter your First Name:");
// var LastName = prompt("Enter your Last Name:");

// var Fullname = FirstName + " " + LastName;

// alert("Welcome " + Fullname + ":-D");



// var input = prompt("Enter Your favorite Mobile Set");
// var len = input.length;

// alert("My favorite phone is " + input + " " + "\n" + "Length of the string is  " + len);



// var m = "Pakistani";

// var result = m.indexOf('n');

// alert(result);


// var a = "Hello World";

// var result = a.lastIndexOf('l');

// alert(result);


// var string = "Pakistani";
// alert("Character at index 3 " + string[3] );


// var a = "ALI";
// var b = "KHAN";

// var c = a.concat(" ", b);
// alert(c);


// var city = "Hyderabad";

// var res = city.replace("Hyder","Islam");

// alert(res);


// var msg = "Ali and sami are best friends. They play cricket and football together.";

// msg = msg.replace(/and/g , "&");

// alert(msg);



// var string = "472";

// var conv = parseInt(string);

// var add = 2 + conv;

// alert(add);



// var cases = "peanuts";

// var a = cases.toUpperCase();

// alert(a);



// var a = prompt("Enter javascript");
// var b1 = a.slice(0,1);
// var b2 = a.slice(1);

// b1 = b1.toUpperCase();
// b2 = b2.toLowerCase();

// var result = b1 + b2;
// alert(result);



// var num = 35.36;

// var a = Math.round(num);

// var conversion = a.toString();

// alert(conversion);



// var uni = "University Of Karachi.";
// for(var i = 0; i <= uni.length; i++){
//     document.write(uni[i] + "<br>");
// }

// var myString = "Pakistan";
// alert(myString[myString.length - 1]);


// var temp = "the quick brown fox jumps over the lazy dog";
// var count = (temp.match(/the/g) || []).length;
// alert(count);

// chapter 26 to 30

// var inp = parseFloat(prompt("Enter a positive integer number"));
// var r = Math.round(inp);
// var c = Math.ceil(inp);
// var f = Math.floor(inp);

// document.write("Number = " + inp + '<br>' + "Round off value = " + r + "<br>" + "Floor value = " + f + "<br>" + "Ceil value = " + c);





// var inp = parseFloat(prompt("Enter a negative integer number"));
// var r = Math.round(inp);
// var c = Math.ceil(inp);
// var f = Math.floor(inp);

// document.write("Number = " + inp + '<br>' + "Round off value = " + r + "<br>" + "Floor value = " + f + "<br>" + "Ceil value = " + c);


// var num = -4;
// var num2 = 5;
// var x = Math.abs(num);
// var y = Math.abs(num2);
// document.write("Absolute value of " + num + "  is  " + x);
// document.write(" <br> Absolute value of " + num2 + "  is  " + y);




// var randomNumber = Math.random();
// var roun = Math.round(randomNumber);
// alert(roun);

// var heads = Math.random();
// var tails = Math.random();
// var r1 = Math.round(heads);
// var r2 = Math.round(tails);

// document.write("HEADS = " + r1 + "<br>" + "TAILS = " + r2 );





// var a = Math.floor(Math.random() * 100);
// alert(a);


// var weight = prompt("ENTER UR WEIGHT:");
// if(weight >= 55 && weight <= 60){
//     alert("normal");
// }
    
// else{
//      alert("you need a diet");
//  }   

// var user = prompt("ENTER number b/w 1 to 10");
//  var m = Math.floor(Math.random() * 10);

//  if(user == m){
//      alert("CONGO!:-D");
//  }
//  else {
//      alert("TRY AGAIN");
//  }

// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day");
// }else if(c === "Sun"){
//     document.write("It's Fun Day");
// }else if(c === "Mon"){
//     document.write("IT'S MONDAY");
// }else if(c === "Tue"){
//     document.write("TUESDAY");
// }else if(c === "Wed"){
//     document.write("WEDNESDAY");
// }else if(c === "Thr"){
//     document.write("THURSDAY");
// }else if(c === "Fri"){
//     document.write("FRIDAY");
// }


// var d = new Date();
// d.toString();
// var e = d.toString();
// var f = e.slice(4,10);
// //alert(f);
// if(f >= "Jun 15"){
//     document.write("LAST 15 DAYS OF THE MONTH");
// }
// else if(f <= "Jun 15"){
//     document.write("FIRST 15 DAYS OF THE MONTH");
// }
// else{
//     document.write("error!")
// }


//alert(Date.getMonth());

// var objDate = new Date("02/06/2020");
// alert(objDate);
// var d = new Date();
// d.setMonth(5);
// alert(d);



//  var r = new Date();
//  alert("Current date " + r);

// var a = new Date();
// var m = a.getTime();
// var y = a.getMinutes();
// var z = a.getMilliseconds();
// document.write("TIME = " + m + "<br>" + "MINUTES = " + y + "<br>" + "MILISEC = " + z);


// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// alert(c);



// var m = new Date();
// var h = m.getHours();
// if(h == "0"){
//     alert("It's MID NYT:-D");
// }
// else if(h <= "12"){
//     alert("It's PM");
// }

// else{
//     alert("It's AM:p");
// }



// var d = new Date();
// var r1 = d.setMonth(11);
// var r2= d.setDate(30);
// alert(r1);
// alert(r2);

// var laterDate = new Date(2020,11,31); 
// alert(laterDate);


// var day_start = new Date("June 15 2015");
// var day_end = new Date("June 29 2020");
// var total_days = (day_end - day_start) / (1000 * 60 * 60 * 24);
// var result = Math.round(total_days);
// alert(result);



// var day_start = new Date("Jan 01 2015");
// var day_end = new Date("June 29 2020");
// var total_days = (day_end - day_start) / (1000 * 60 * 60);
// var result = Math.round(total_days);
// alert(result);


// var a = new Date();
// var d = new Date();
// var b = d.setHours(8);

// document.write("<b>Current date =</b> " + a);
// document.write("<br><b>Current date before an hour ago = </b>" + d);


// var a = new Date();
// var d = new Date();
// var b = d.setFullYear(1920);

// document.write("<b>Current date =</b> " + a);
// document.write("<br><b>100 years back = </b>" + d);


// function getAge(d1, d2){
//     d2 = d2 || new Date();
//     var diff = d2.getTime() - d1.getTime();
//     return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
// }
// alert("AGE = " +( getAge(new Date(1999, 06, 26))) );


// var name = prompt("Enter name");
// var month = prompt("Enter month");
// var units = prompt("Enter units");
// var charges = prompt("Enter charges");
// var late_pay_chg = 350;
// var net_payable = units * charges;
// var gross_Amount_payable = net_payable + late_pay_chg;

// document.write("<b>BILL DETAILS:</b> ");
// document.write("<b>CUSTOMER'S NAME = </b> " + name);
// document.write("<br> <b>MONTH = </b> " + month);
// document.write("<br> <b>NUMBER OF UNITS = </b> " +  units);
// document.write("<br> <b>CHARGES PER UNIT =</b> " + charges);

// document.write("<br> <b>NET AMOUNT PAYABLE(WITHIN DUE DATE)</b> = " + net_payable);
// document.write("<br> <b>LATE PAYMENT SURCHARGE</b> = " + late_pay_chg);
// document.write("<br> <b>GROSS AMOUNT PAYABLE(AFTER DUE DATE)</b> = " + gross_Amount_payable);


//chapters 35-38

// function today_date(a){
//     alert(a);
// }

// today_date(new Date());

// function greeting(Fname,Lname){
//     alert("WELCOME " + Fname+ " " + Lname);
// }

// greeting("MAHA","KHAN");


// function add(a,b){
//     alert(a+b);
// }

// var inp1 =parseInt(prompt("ENTER VAL 1"));
// var inp2 =parseInt(prompt("ENTER VAL 2")); 


// add(inp1,inp2);


// function user(num1,num2,opt){
//     if(opt == "+"){
//         alert(num1 + num2);
//     }
//     else if(opt == "-"){
//         alert(num1 - num2);
//     }
//     else if(opt == "*"){
//         alert(num1 * num2);
//     }
//     else if(opt == "/"){
//         alert(num1 / num2);
//     }
// }

// var n1 = parseInt(prompt("ENTER NUMBER 1"));
// var op = prompt("ENTER OPERATOR");
// var n2 = parseInt(prompt("ENTER NUMBER 2"));



// user(n1,n2,op);



// function square(s){
//     alert(s*s);
// }
// square(12);

// function cal_fact(num) {
//     var i;
//     var fact = 1 ;
//     for(i = num; i >= 1 ; i--){
//         fact = fact * i;
//     }
//     alert(fact);

// }

// cal_fact(4);

// function cal_hyp(base,perp){
//     var a = Math.sqrt(Math.pow(base,2) + Math.pow(perp,2));
//     alert(a);

// }

// cal_hyp(4,9);


// function cal_area(width,height){
//     var A = width * height;
//     alert(A);
// }

// cal_area(50,9);
// var w = 8;
// var h = 7;

// cal_area(w,h);


// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             alert("not a palindrome");
//         }
    

//         else {
//         alert("Palindrome :-D");
//     }}

// }

// palindrome("civic");



// function upprcase(str)
// {
//   var arr1 = str.split(' ');
//   var newarr1 = [];
    
//   for(var x = 0; x < arr1.length; x++){
//       newarr1.push(arr1[x].charAt(0).toUpperCase()+arr1[x].slice(1));
//   }
//    alert(newarr1.join(' '));
// }
// upprcase("the quick brown fox");

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   alert(result);
// }
// find_longest_word('Web Association near airport');


// function char_cnt(str, letter) 
// {
//  var lttr_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       lttr_Count += 1;
//       }
//   }
//    alert(lttr_Count);
// }

// char_cnt('JSResource.com.combo', 'o');


// function calcCircum(r){
//     var circumference = 2 * 3.142 * r;
//      alert(circumference);
// }

// calcCircum(6);


// function calArea(r){
//     var Area = 3.142 * r * r ;
//     var A = Math.round(Area);

//     alert(A);
// }

// calArea(7);