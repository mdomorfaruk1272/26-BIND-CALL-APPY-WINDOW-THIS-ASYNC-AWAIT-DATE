var name = 'Kuddus';
function add(num1, num2){
     result = num1 + num2;
    console.log('name indide', name);
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
}
// console.log('result outside', result);
var sum = add(13, 21);
console.log(sum);
console.log('result outside', result);