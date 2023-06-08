function printNumbers (from, to){
    let current = from;
    
    let timerId = setInterval(function(){
        console.log(current);
        alert(current);
       
        if(current == to){
            clearInterval(timerId);
        }
        current++;

    }, 1000);
}
// printing by passing numbers from 3 to 13
printNumbers(5, 10); 
// output 
// 5
// 6
// 7
// 8
// 9
// 10