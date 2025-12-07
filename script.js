function getSecondsToTomorrow() {
    let now = new Date();

    let tomorrow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
    );

    let diff = (tomorrow - now) / 1000;
    return Math.floor(diff);
}

document.getElementById("result").textContent =
    getSecondsToTomorrow();
