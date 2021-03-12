const randomInteggerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
    return new Promise((resolve, reject) => {
        const delay = randomInteggerFromInterval(200, 500);
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;

            if (canProcess) {
                resolve(`Transaction ${transaction.id} processed in ${delay}ms`);
            } else {
                reject(`Error processing transaction ${transaction.id}. Please try again later.`);
            }
        }, delay);
    });
};

const logSuccess = message => {
    console.log(message);
}

const logError = message => {
    console.log(message);
}

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logSuccess);
makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);