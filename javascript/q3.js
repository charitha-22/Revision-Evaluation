function mySetInterval(callback, delay){
    let timerId;
    function repeat(){
        timerId = setTimeout(()=>{
            callback();
            repeat();
        },delay);
    }
    repeat();
    return timerId
}

function myClearInterval(id){
    clearTimeout(id);
}

// const id = mySetInterval(()=>{
//     console.log("hello")
// },1000);

// myClearInterval(id);
