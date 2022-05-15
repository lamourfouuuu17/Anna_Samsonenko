let str = "Abracadabra";

function first_non_repeating_letter(str){
  console.log(str);

  let newStr =  str.toLowerCase();
    for (let i = 0; i < newStr.length; i++) {
      let letter = newStr.charAt(i);

      if (newStr.indexOf(letter) === i && newStr.indexOf(letter, i+1 ) === -1) return "This letter doesn't repeat: '"+ str[i] + "'";
    }
    return null;
}

console.log(first_non_repeating_letter(str));
