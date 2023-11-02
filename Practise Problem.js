"use strict"
//............................................logic problem1.............//

//...................Problem1.....................

// console.log("Flow 1")
// var count=0;
// let a=numbers([1,2,"13","14"]);

// console.log("Flow 2")


// console.log("Flow 3")

// function numbers(x){
   
//     console.log("Flow 4")
// for(let i=0;i<x.length;i++){
    
//     if((x[i]===Number(x[i]))){
       
//         count= count+x[i];
//     }
  
// }
// return count;

// }
// // }
// console.log(a);

// let a1=[1,2,3,"13","9","true"];
// let value=0;
// for(i=0;i<a1.length;i++){
//     if(typeof (a1[i])==="boolean")
//     value += a1[i];
// }
// console.log(value);
//.............................problem2...



// let largest2= secondlarge([330,434,708,39]);

// function secondlarge(x){

//     let large1='';
//     let large2='';

//     for(let i=0; i<x.length;i++){
//         if(large1<x[i]){
//             large2=large1;
//             large1=x[i];
//         }
//         else if(large2<x[i]){
//             large2=x[i];
//         }
      
       
//     }
//     return large2;
// }

// console.log(largest2);

//....................problem3...........//


// let obj={
//     A:1,
//     B:2,
//     C:3
// }
// let arr=[];
// for(let x in obj){
//     arr[x]=[x,obj[x]]
// }
// console.log(arr);
//....................problem4...........//

// let Acs_Des=Asen_Desen([1,4,78,3,6],"Aes");

// function Asen_Desen(x,y){
  
//     if(y=="Acs"){
//         var Value=x;
//         for(let i=0;i<Value.length;i++){
//             for(let j=i+1;j<Value.length;j++){
//            if(Value[i]>Value[j]){
          
//             let demo=Value[i];
//             Value[i]=Value[j];
//             Value[j]=demo;

          
            
//            }

//             }
            
//         }

        
//     }

// else{
//     if(y=="Des"){
//         var Value=x;
//         for(let i=0;i<Value.length;i++){
//             for(let j=i+1;j<Value.length;j++){
//            if(Value[i]<Value[j]){
          
//             let demo=Value[i];
//             Value[i]=Value[j];
//             Value[j]=demo;

          
            
//            }

//             }
            
//         }

        
//     }
//     else{
//         return x;
//     }
// }
 
//     return Value;
// }
// console.log(Acs_Des);



//.............................Problem 5.......

// let Find_Dupple=remove_Dupple([1,2,3,4,4,5,5,true,true,"a","c","d"]);
// function remove_Dupple(x){
// let valid=[];
//     for(let i in x){
//         if( valid.indexOf(x[i]) === -1){

//             valid[i]=x[i];

//         }

//     }

//     valid=valid.filter(String);

//     console.log(typeof(valid[5]));

//     return valid;

// }
// console.log(Find_Dupple);
//....................object practise.....
// let arr=[1,2,3,5];

// let obj={
//     name:"pattabi",
//     Age:21,
//     Dob:"23.04.2002"

// }
// for(let x in obj){
//     console.log(x);
// }

// // program to loop through an object using for...in loop

// const student = { 
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// // using Object.entries
// // using for...of loop
// for (let [key, value] of Object.entries(student)) {
//     console.log(key + " - " +  value);
// }
//..................practise problem2.........................//

//................problems1...........................//

// for(let i=1;i<=20;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0){
//         console.log("buzz");
//     }
//     else{
//         console.log(i);
//     }
// }




//......................Problem2..................//

// let arr=ArrOfMulti(7,5);

// function ArrOfMulti(x,y)
// {
//     let arr2=[];
//     for(let i = 0; i < y; i++)
//     {
//        arr2[i]=x*(i+1);
//     }
//     return arr2;
  
// }
// console.log(arr);
//.....Problem3................................//

// let Pos_Negative=Positive_count([1,2,3,4,5,5,6,78,-2,-4,-7,-7]);

// function Positive_count(x){
   
//     let Positive=0;
//     let Negative=0;
//    let valid=[];
//     for(let i=0;i<x.length;i++){

//         if(x[i]>0){
//             Positive ++;
//         }
//         else{
//             if(x[i]<0){
//                 Negative += x[i];
//             }
//           else{
//             return [];
//           }
//         }

//     }
//    valid[0]=Positive;
//    valid[1]=Negative;
//    return valid;

// }

// console.log(Pos_Negative);

//...........................Problem4........//

// let Miss_Num=numbers([1,2,3,4,5,6,7,8,9]);
// function numbers(x){
//     // console.log(x);
//     let a=x.length;
//     // console.log(a);
//     let valid=(a+2)*(a+1)/2;
//     // console.log(valid);

//     for(let i=0;i<x.length;i++){
//         valid -= x[i];
//         console.log(valid);
//     }
 
//     return valid
// }


// console.log(Miss_Num);

//...........................another methods.....

// let arr=Miss_Num([1,3,4,4,5,590,5]);

// function Miss_Num(x){
//     let arr1=[];
//     let valid=0;
//     for(let i=0;i<x.length;i++){
//         if(arr1.includes(x[i])==false){
//             arr1[valid]=x[i];
//             valid++;
//         }
//     }
//   return arr1;
// }

// console.log(arr);
//.......................Problem5..............//

// let Str=High_Low("1 2 34 67 5 3");

// function High_Low(x){
//        let str1=x.split(" ");
//        let str2=str1;
//        let str3=[];

//      console.log(str1);
//     for(let i=0; i<str1.length;i++){
      
//         for(let j=i+1;j<str1.length;j++){

//             if(Number(str1[i])>Number(str1[j])){

//                 let demo=str1[i];
//                 str1[i]=str1[j];
//                 str1[j]=demo;
//             }
//         }
//     }
//     str3[0]=str2[0];
//     str3[1]=str2[str2.length-1];
  
//     str3=str3.join()
//     return "\""+str3+"\"";
// }

// console.log(Str);

//......................Practise Problem3...........

//.................. Problem1...................

// let str="Geeks for Geeks pattabi";
// let str2=str.split(" ");
// console.log(str2);

// let str3="";
// for(let i=0;i<str2.length;i++){
//     // var  str3="";
//     for(let j=str2[i].length-1;j>=0;j--){

//         str3 += str2[i][j];
//     }
//     str3 += " "
// }

// str3="\""+str3+"\"";

// console.log(str3);

//..................Problem2...............//





// let str="The sky is blue";
// let str1=str.split(" ");

// let str3="";

// for(let i=str1.length-1;i>=0;i--){

// str3 += str1[i];
 
// str3 +=" "


// }
// str3="\""+str3+"\""
// console.log(str3);

//......................Problem3.............

// let str="room is very is poor";
  
//    let str1="";

// for(let i=0;i<str.length;i++){

   
//      if(str.match("a")==null && str.match("b")==null && str.match("c")==null){

//         // console.log("Null");
//         str1="null"
//     }
//    else if(str[i]!=="a" && str[i]!=="b" && str[i]!=="c"  ){
     
      
//             str1 += str[i]
//     }
// }
// console.log(str1);

//...........................Problem4...........................//

// let arr=Uniqui_Arry([1,2,2,3,3,-1,-2,-48,3,-2,1,4]);

// function Uniqui_Arry(x){
//      let arr1=[];
//      let count=0
//     for(let i=0;i<x.length;i++){
//         // console.log(x[i]);
//         if(x[i]>0 && arr1.includes(x[i])==false){
//             // console.log(x[i]);
//            arr1[count]=x[i];
//            count++;
//         }
//     }
//     return arr1
// }

// console.log(arr);

//..................................problem5.......//

// let arr= Mirror_Array([0,1,2,3,4])

// function Mirror_Array(x){
//     let arr1=[];
// let count=x.length*2-2;
   
//     console.log(count);
//     for(let i=0;i<x.length;i++){

//        arr1[i]=x[i];
//        arr1[count]=x[i];
//        count--;

//     }
//     return arr1;
// }
// console.log(arr);

//.......................Practise Problems 4..........//

//..................Prablem3...........

// let a=prompt("Enter the value:");
// a=a.trim();
// let b="";
// let c="";
// let count=a.length-1;
// for(var i=0;i<a.length;i++){
  
//     b+=a[i];

//     c+=a[count];
   
//     count--;
  
// }

// if((b==c) && (a!=="")){
//     alert("Its a palindrom");
// }
// else{
//     alert("its not palindrom");
// }

//..............................problem4..............//

//........................Problem4(For loop)...
// let num1=1221;
// let num=num1
// let valid ="";

// var value=1;

// for(let i=0;i<value;i++){

//     if(num1>valid){
//     valid=valid*10+num%10;
//     num=Math.floor(num/10);
//     value++
//     }
// }
// if (num1==valid) {
//     console.log(num1+" is a polindrome");
// }
// else{
//     console.log(num1+" is not a polindrome");
// }



//............................problem4 (while loop)..

// let num = 123345;
// let reversedNum = reverseNumber(num);

// function reverseNumber(num) {
//     let reversed = 0;
//     while (num !== 0) {
//       reversed = reversed * 10 + num % 10;
//       num = Math.floor(num / 10);
//     }
//     return reversed;
//   }
  
//  if(num == reversedNum){
//    console.log("its a palindrome");
//  }

//  else{
//     console.log("its not palindrom");
//  }
// let a=12334;
// console.log(a/10);
// console.log(Math.floor(a/10));

//.......................Problem2..............//
// let a=[16,2,17,4,3,5,2];

// let b=[];
// let c=[];

// for(let i=0;i<a.length;i++){

//     for(let j=i+1;j<a.length;j++){
    
//         if(a[i]<a[j]){

//             b=a[j];
//             a[i]=a[j];
//         }

//         else if(b>a[j] && c<a[j]){

//             c=a[j]
//         }

//     }
// }


// console.log();

//.......................Problem1..........................//

// let arr=[1,2,3,3,2,1,4,4];
// let valid="";

// for(let i=0;i<arr.length;i++){

//     for(let j=i+1;j<arr.length;j++){

//         if( arr[i]==arr[j] && valid.indexOf(arr[j]) ==-1 ){

//             valid += arr[j] + " ";
//         }
//     }
// }

// if(valid!=""){
//     console.log(valid);

// }

// else{

//     console.log("-1");
// }





//...........................Excersize..........//

//...........Polidrome Num & String..../
//..........Armstrong Numbers .........//
//...........Fibonacci Series ..........//
//..........Prime Numbers .................//



// let emoji = prompt("enter the reaction ");
// let covertemoji =emoji.toLowerCase();
// // emojif(covertemoji);
// alert( emojif(covertemoji))
// function emojif(emoji) {
//     switch (emoji) {
//         case "happy":
//             // console.log("after return");
//             return "🥳";
//             // break;

//         case "sad":
//             return " 🥺";
//             break;
//         case "angry":
//             return " 🤬"

//         case "romance":
//             return "👩‍❤️‍👨"
//         default:
//             return "😀 😃 😄 😁 😆 😅 😂 🤣 🥲 🥹 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😮‍💨 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🫣 🤗 🫡 🤔 🫢 🤭 🤫 🤥 😶 😶‍🌫️ 😐 😑 😬 🫨 🫠 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 😵‍💫 🫥 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾"

//     }
// }

// // Define a sample 2D array (you can change this to your own data)
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//   console.log(matrix.length);
//   // Initialize a variable to store the sum
//   let sum = 0;
  
//   // Use three nested for loops to iterate through the elements
//   for (let i = 0; i < matrix.length; i++) {
//     console.log("i "+i);
//     for (let j = 0; j < 2; j++) {
//         console.log("j "+j);
//       for (let k = 0; k < 2; k++) {
//         console.log("k "+k);
//         // Add the current element to the sum
//         sum += matrix[i][j][k];
//       }
//     }
//   }
  
//   // Print the result
//   console.log("The sum of all elements in the matrix is: " + sum);
  
//..................Amstrong Numbers.............//


// let a=8208;
// let c=a;
// let b=0;
// let valid=1;
// let count=0;
// for(let i=0;i<1;i++){

//     for(let j=0;j<valid;j++){
//         // // let c=i;
//         if(a!=0){
//         //     console.log(i);
//             b= b*10+(a%10);
//        count++;
//             a=Math.trunc(a/10);
//             valid++;
            
//         }
//             }
//             // let e=b;
//             // console.log(e);
//        valid=1;
//        var d=0;
//     for(let k=0;k<valid;k++){
//         // console.log(b);
//         if(b!=0){
//         // console.log("k "+k);
        
//         // console.log("b"+b);
//         d+= Math.pow(b%10,count);
//         // console.log("d "+d);
//         b=Math.trunc(b/10);
//          valid++;
//     }
       
// }      
// }
// if(c==d){
//     console.log("its a Amstrong Numbers");
// }
// else{
// console.log("its a not amstrong number");
// }
// console.log("d "+d);   
// console.log(count);
// console.log("b "+b);
// let d=Math.pow(3,3);
// console.log(a);

//........................Prime Numbers..........//

// let num=35;
// let count=1;
// for(let i=2;i<num;i++){
// if(num%i==0){
//     count=0;
// }


// }
// if(count==1){
//     console.log(num+" is prime numbers");
// }
// else{
//     console.log(num+" is not prime numbers");
// }

//..............another method................//

// let num=100;

// let valid="";
// for(let i=2;i<=num;i++){
//     let count=0;
//     for(let j=1;j<=i;j++){
//         if(i%j==0){
//             count++;
//         }
//     }

//     if(count==2){
//   valid+=i+" ";
//   count=0;
    // }

// }
// console.log(valid);
//.........................Fibonacci Serious.........//

// let a=10;

// for(let i=0;i<=a;i++){

    
// }

// let a=10;
// let valid=1;
// let b=0;

// for(let i=1;i<=a;i++){
// // console.log(i);
//     for(let j=0;j<valid;j++){
// // console.log(j);
      
//       if(i!=0){
//         console.log(i);
//         b+=(i%10)*(i%10)*(i%10);
//         var c=i;
//         c=Math.floor(c/10);
//         // valid++
//       }
//     }
//     console.log("b "+b);
//     b=0;
    
// }

// let n=5;
// let num=0;
// let num1=1;
// let total=[]
// console.log("fibonacci series"+""+n);

// for(let i=1;i<=n;i++){
//     console.log(num)
//     total=num+num1
//     num=num1;
//     num1=total
// }
// console.log(num1);

// function generateFibonacciSeries(n) {
//     const fibonacciSeries = [0, 1];
  
//     for (let i = 2; i < n; i++) {
//       const nextFibonacciNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
//       fibonacciSeries.push(nextFibonacciNumber);
//     }
  
//     return fibonacciSeries;
//   }
  
//   const n = 10; // Change n to the number of Fibonacci numbers you want to generate
//   const fibonacciSeries = generateFibonacciSeries(n);
//   console.log(fibonacciSeries);

// let Feb_Con= Feb_Conic(10);
// function Feb_Conic(x){
// let valid=[0,1];
//     for(let i=2;i<x;i++){
//       let Total=valid[i-1]+valid[i-2];
//       valid.push(Total);
//     }
//     return valid;
// }
// console.log(Feb_Con);
//......................Anagram..........//

// let Anagram=Anag_ram("hari","haroi");

// function Anag_ram(x,y){
//     var a=x.split("");
//     let b=y.split("")
//     console.log(b);
    
//     for(let i=0;i<a.length;i++){
//         // console.log(a[i]);
//         for(let j=i+1;j<a.length;j++){
//             // console.log(a[j]);
//             if(a[i]>a[j]){
//                 let demo=a[i];
//                 a[i]=a[j];
//                 a[j]=demo;
//             }
//         }

//         for(let k=i+1;k<b.length;k++){
         
//             if(b[i]>b[k]){
//                 let demo=b[i];
//                 b[i]=b[k];
//                 b[k]=demo;
//             }

//         }
     
//     }
//     b=b.join("");
//     a=a.join("")
//     return a==b;
    
//     // console.log(a);
// }
// console.log(Anagram);
// if(Anagram==true){
//     console.log("its a Anagram");
// }
// else{
//     console.log("Its a not Anagram");
// }
// console.log(a);
//...............Three Loop methods.......

// let n=5;
// let valid="";
// for(let i=1;i<=n;i++){
//     // console.log(i);

//     for(let j=1;j<=n-i;j++){
//         // console.log(j);
//         valid+=" ";

//     }

//     for(let k=1;k<=i*2-1;k++){
//         // console.log(k);
//         valid+=k;
//     }

//     valid+="\n";
// }
// ..console.log(valid)=

// Given an array A of positive integers.
// Your task is to find the leaders in the array.
// An element of array is leader if it is greater than or equal to the sum of all the elements to its right side. 
// The rightmost element is always a leader. 

// let A = leader([2,16,7,23,9,6,1,2]);

// function leader(x) {
//     let value2 = 0;
//     let leaders=""
//     for (let i=0; i < x.length; i++) 
//     {
//         for (let j=i+1; j < x.length; j++)
//         {
//             value2 = value2 + x[j];
//         }
//         if (x[i] >= value2) {
//             leaders += x[i] + " ";
//         }
//         value2 = 0;           
//     }
//     console.log(leaders);
// }

// let A=Find_leader([1,2,23,4,56,7,8,9,2]);

// function Find_leader(x){
//     let valid=0;
//     let Ans="";
//     for(let i=0;i<x.length;i++){
//         console.log(i);
//         for(let j=i+1;j<x.length;j++){
//            valid+=x[j];
//         }
//         if(x[i]>valid){
//       Ans+=x[i]+" "
//         }
//         valid=0;
//     }
//     return Ans;
// }

// console.log(A);

//.....................Diamond Pattern.......//

// let n = 5;
// let string = "";
// // Upside pyramid
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// // downside pyramid
// for (let i = 1; i <= n - 1; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = (n - i) * 2 - 1; k > 0; k--) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);