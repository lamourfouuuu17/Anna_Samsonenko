const list = "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

function sortingList(list){
    let upperLettersList =  list.toUpperCase();
    let newlist = upperLettersList.replace(/:/g, ", ");
    newlist = newlist.replace(/;/g, ") (");
    let arr = newlist.split(") (");
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
      let resultArr = arr[i].split(", ");
      let temp = resultArr[0];
       resultArr[0] = resultArr[1];
       resultArr[1] = temp;
      let resultFinal = "(" + resultArr[0]+ ", " + resultArr[1] + ")";
      arr[i] = resultFinal;
    }
 
    arr = arr.sort();
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
  }
  
console.log('result:', sortingList(list));