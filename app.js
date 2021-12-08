const btn = document.getElementById('click')
const result = document.getElementById('result')


function startGame() {
    let counter = 0;

    document.getElementById('click').addEventListener('click', () => {
        ++counter
    })

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (counter > 5) {
                resolve(counter);
            } else {
                reject();
            }
        }, 3000)
    })
}


startGame()
    .then((count) => result.innerText = `You win with ${count} clicks`)
    .catch(() => result.innerText = 'You lost')