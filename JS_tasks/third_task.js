function digitalRoot(num) {
    let arr = [];
    const reducerFunction = (a, b) => parseInt(a) + parseInt(b);
 
    while (num > 9) {
       arr = num.toString().split("");
       num = arr.reduce(reducerFunction);
    }
 
    console.log("sum:", num);
    return "done";
 }

 console.log(digitalRoot(51441));