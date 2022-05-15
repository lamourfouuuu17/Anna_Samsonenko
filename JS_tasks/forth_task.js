const arr = [ 1, 3, 6, 2, 2, 0, 4, 5];
const target = 5;

function count(arr, target)
{
    let index = 0; 
    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] + arr[j] === target)
                index++;
    return index;
}

console.log('number of pairs is', count(arr, target));