function createCountdown(seconds, onTick, onComplete){
    let remaining = seconds;
    let timerId = null;
    let startTime;
    let expected;

    function tick(){
        const data = Date.now() - expected;
        if(remaining <= 0){
            onComplete();
            return;
        }

        onTick(remaining);
        remaining--;

        expected += 1000;
        timerId = setTimeout(tick, Math.max(0, 1000-data));

    }

    function start(){
        expected = Date.now() + 1000;
        timerId = setTimeout(tick, 1000);
    }
    function pause(){
        clearTimeout(timerId);
    }

    function resume(){
        start();
    }

    start();

    return{
        pause, resume
    };
}