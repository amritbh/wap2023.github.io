function getNewArray(stringArr){
const filteredArr1 = stringArr.filter(element=>element.length>=5);
const filteredArr2 = filteredArr1.filter(element=>element.includes("a"));
return filteredArr2;
}

const strArray = ['Amrit','Filter','Greater','Parameter','Computer','Contains','JavaScript','workshop'];
const result = getNewArray(strArray);
console.log(result);