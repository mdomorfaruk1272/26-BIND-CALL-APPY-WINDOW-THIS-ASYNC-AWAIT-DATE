function doSomeThing(){
    console.log(3333);
}
console.log(2222);
// doSomeThing();

/**
 * setTimeout() => used to do a work some time later. 1st param is the callback function of work. 2nd param is the 
 * time that i wait for the result.
 */

// setTimeout(doSomeThing, 4000);

// setTimeout(function(){
//     console.log('lazy and waiting');
// }, 4000);

// setTimeout(() => {
//     console.log('See you later.');
// },0);

/**
 * setInterval() => used to repeat a work by accroding a time. 1st param is the callback function of work. 2nd param is the 
 * time that i wait for the result.
 */
setInterval(function(){
    console.log('doing it again');
}, 3000);
console.log(4444);
