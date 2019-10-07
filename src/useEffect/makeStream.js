const makeStream = (ms = 500) => {
    let count = 1;
    let handlers = [];

    setInterval(() => {
        handlers.map(handler => handler(count));
        count++;
    }, ms);

    return {
        subscribe(handler) {
            handlers.push(handler);
        },
        unsubscribe() {
            handlers = [];
        }
    }
};


export default makeStream;
