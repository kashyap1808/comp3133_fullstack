const lowerCaseWords = (array) => {
    const arr = array.filter(word => typeof word === 'string');

    i = new Promise((resolve, reject) => {
        if(arr.length > 0){
            resolve(arr.map(word => word.toLowerCase()));
        }
        else{
            reject('No Words Found');
        }
    })
    
    return i;
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error))