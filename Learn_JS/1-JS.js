/*     Data Types     */
// var a = 10; 
// console.log(a + " : "+ typeof a);

// var a="10";
// console.log(a + " : "+ typeof a);

// var a;
// console.log(a + " : "+ typeof a);

// var a=true;
// console.log(a + " : "+ typeof a);

// var a=10;
// a=a+2;
// console.log(a + " : "+ typeof a);


/* if else & Switch case */

/* ======= if else ======= */
var m = 68;

if (m < 35 && m>=0) {
    document.write("F");
}
else if (m >= 35 && m < 50) {
    document.write("D");
}
else if (m >= 50 && m < 60) {
    document.write("C");
}
else if (m >= 60 && m < 70) {
    document.write("B");
}
else if (m >= 70 && m < 80) {
    document.write("A");
}
else if (m >= 80 && m < 90) {
    document.write("A+");
}
else if (m >= 90 && m <= 100) {
    document.write("O");
}

document.write("<br/>");


/* ======= Switch ======= */
var m=-9;
switch(true)
{
    case (m<35 && m>=0):
        document.write("F");
        break;
    case (m>=35 && m<50):
        document.write("D");
        break;
    case (m>=50 && m<60):
        document.write("C");
        break;
    case (m>=60 && m<70):
        document.write("B");
        break;
    case (m>=70 && m<80):
        document.write("A");
        break;
    case (m>=80 && m<90):
        document.write("A+");
        break;
    case (m>=90 && m<=100):
        document.write("O");
        break;
    default:
        document.write("Invalid marks!!!");
}
document.write("<br/>");    

/* Using Multiple cases in single */

var day = 6;

switch (day) {
    case 6:
        // Saturday...
    case 7:
        // Sunday...
        document.write("Weekend");
        break;
    default:
        document.write("...Working day...");
}
document.write("<br/>");

/* ======= While Loop ======= */

var x = 65;

while ((x >= 65 && x <= 90) || (x >= 97 && x <= 122)) {
    document.write(String.fromCharCode(x) + "<br/>");

    if (x == 90) {
        x = 97;
    } else {
        x++;
    }
}

// var x = 65;

// while (x <= 122) {
//     if (x >= 65 && x <= 90 || x >= 97 && x <= 122) {
//         document.write(String.fromCharCode(x) + "<br/>");
//     }
//     x++;
// }


