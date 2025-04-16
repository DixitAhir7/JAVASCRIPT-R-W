const promise = new Promise((resolve, reject) => {
    let message = true;
    function task() {
        if (message) {
            setInterval(() => {
                resolve("task completed");
            }, 3000);
        } else {
            reject("rejected");
        }
    }
    task();
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finaly done");
    });