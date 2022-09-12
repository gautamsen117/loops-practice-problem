/* for(var i = 0; i <= 20; i++){
    if(i > 5){
        break;
    }
    console.log(i);
} */

// var roastGiven = 0;
// while(roastGiven < 10){
//     console.log('Roast Den, gift item anchi');
//     roastGiven++;
//     if(roastGiven > 4){
//         break;
//     }
// }

// var items = ['laptop', 'notebook', 'book', 'pen', 'mouse', 'keybord'];
// for(var i = 0; i < items.length; i++){
//     var item = items[i];
//     if(item == 'pen'){
//         break;
//     }
//     console.log(item);
// }

var numbers = [45, 12, 54, 88, 66, 14, 188, 52, 100, 27, 20];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
}