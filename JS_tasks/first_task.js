let listOfItems = [5, "sfre", 133, "gdr", 45, 33, "rrr", 55, "loool"];
console.log(listOfItems);
       
function filterListOfItems(arr){
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (typeof arr[i] === 'number') {
            newArr.push(arr[i]);
        } 
    }
    return newArr;
};

console.log("Filtered list: \n", filterListOfItems(listOfItems));