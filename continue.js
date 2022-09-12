var numbers = [42, 56,  25, 70, 88, 16, 122, 30];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}