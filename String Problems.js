
//............................String Problem1 Task......//
// ------------------ string or not (Problem1) -----------------

// var a = prompt("enter the value");

// let valid = a.trim();

// let inputParse = parseInt(valid);


// console.log(" value : "+valid.length)

// if(valid.length == 0)
// {
//     alert("INVALID INPUT")
// }
// else{
//     if(inputParse)
//     {
//         alert("is a not a string")
//     }
//     else{
//         alert("Its a string")
//     }
// }



// ----------------- blank or not (Problem2)-------------------


// var a=prompt("Enter a value")

// let blank=a.trim();

// // console.log("blank : "+(blank.length==0))
// if(blank.length==0){
//     console.log("true")

// }
// else{
//     console.log("false")
// }


// ---------------- string to array (Problem3)-------------------

// let str=prompt("enter the value")

// let str2=str.split(" ")
// console.log(str2)


// ----------------- extract string part(Problem4)-----------------


// let str = prompt("Enter a value")
// let str1 = prompt("Enter a StartRange")
// let str2 = prompt("Enter a EndRange")
// let str4= str.slice(str1,str2)
// console.log(str4);


// ------------------ hide email(Problem5) ---------------------

// let e=prompt("Enter your email");
// let e1=e.search(/@/);
// let e2=e.slice(4,e1);
// let e3=e.replace(e2,"....");

// console.log(e3);

// let index=prompt("Enter the string");
// let index1=index.substring(0,4);
// let testIndex = index.search("@");
// let index2=index.slice(testIndex)
// console.log(index1+"...."+index2)




// let value= prompt("Enter a value:");//...................problem1
// console.log(value+"  "+value.length);
// valid=value.trim();
// console.log(valid.length)
// let value1= Number(value);
// // alert(valid.length);
// if(!(value==valid.length)){

//     if(value1){
//         alert("Its not string")
//     }
//     else{
//         alert("its a string")
//     }
// }

// else{
//     alert("invalid input");
// }  



// let value= prompt("Enter a value:");
// console.log(value+"  "+value.length);
// valid=value.trim();
// console.log(valid.length)
// let value1= Number(value);
// // alert(valid.length);
// if(!(valid=="")){

//     if(value1){
//         alert("Its not string")
//     }
//     else{
//         alert("its a string")
//     }
// }

// else{
//     alert("invalid input");
// }   //...........problem1

// let email= prompt("Enter your email:");   //...........problem5
// let email1= email.search("@");
// let email2= email.slice(4,email1);
// let valid= email.replace(email2,"....");
// alert(valid);

// let email= prompt("Enter your email:");
// let email1= email.substring(0,5);
// // let email2= email.search(/@/);
// let email3= email.slice(email.search(/@/));
// let valid= email1+"...."+email3;
// alert(valid);   //...........problem5

// let text= prompt("enter value:");
// let text1= text.trim();
// if(text1==0){
//     alert(true)
// }

// else{
//     alert(false)
// }   //...........problem2....

//.......................................js Problem2 Strings...........//

// let a= prompt("Enter your value:")
// let b= a.toLowerCase();
// console.log(b);


// let valid= b.replaceAll(" ","-")
// console.log(valid);  //...............problem6

//......................problem7...................
// let arr="javascript is a programming language";
// let arr1=arr.split(" ");
// console.log(arr);
// console.log(arr1);
// console.log(arr1[0][5]);

// for(i=0;i<arr1.length;i++){
//       arr1[i]=arr1[i][0].toUpperCase()+arr1[i].slice(1);
  
// }
// console.log(arr1.join(" "));//........................problem7..
//........................................Problem8..........//


// let num = prompt('Enter the value ')
//    onesplace=num%10;
//    tenthplace=num%100;
//    if (onesplace==1 && tenthplace!=11) {
//     console.log(num+"st");
//    } 
//    else if(onesplace==2 && tenthplace!=12) {
//     console.log(num+"nd");
//    }
//    else if(onesplace==3 && tenthplace!=13) {
//     console.log(num+"rd");
//    }
//    else {
//     console.log(num+"th");
//    }...................//



// let text= prompt("Enter valeue:");
// let num= prompt("Enter a Number:");
// let text1=text.split(" ");
// // console.log(text1);


// let text2= text1.slice(text1,num);
// // console.log(text2);

// let text3=text2.join();
// // console.log(text3);
// let text4=text3.replaceAll(","," ")
// console.log(text4);  //............problem9....



// let value=prompt("Enter a value1:");
// let reduceword=prompt("Enter a value2:");

// let value1=value.match(reduceword);
// let valid = value.replace(value1,"")
// if(value1==reduceword){
//     console.log(valid);
// }
// else{
//     console.log("invalid input");
// }



// let value=prompt("Enter a value1:");
// let reduceword=prompt("Enter a alue2:");


// let valid=value.replace(reduceword,"")
// console.log(valid);  //....................................problem10.......


//......................problem11...................................................................//


// let value=prompt("Enter a sentence:");
// let str=prompt("Enter a One Word:");
// let str1=value.toUpperCase();
// let str2=str.toUpperCase();
// let valid= str1.match(str2);
// console.log(valid);

// if (valid==str2){
  
//     console.log("its matched");
// }

// else{
//     console.log("its not matched ")
// }  

//....................................problem12.......................................................//

// let value=prompt("Enter a sentence:");
// let str=prompt("Enter a One Word:");
// let str1=value.toUpperCase();
// let str2=str.toUpperCase();
// let valid= str1.includes(str2);
// console.log(valid);

//.................................Problem13...............

// let a1=prompt("Enter a Value:");
// console.log(a1.length);
// let a =a1.split("")

// console.log(a);

// for(i=0;i<a.length;i++){
//     if(a[i]== a[i].toUpperCase()){
//         a[i]=a[i].toLowerCase();
//     }
//     else{
//         a[i]=a[i].toUpperCase();
//     }
   
//     // console.log(a[i]);
// }
// a=a.join("");

// console.log(a);



