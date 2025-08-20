let count = 0;

function Dec() {
    if (count > 0) {
        count -= 1;
        document.getElementById("Count").textContent = count;
    }
}
function Reset() {
    count = 0;
    document.getElementById("Count").textContent = count;
}

function Add() {
    count += 1;
    document.getElementById("Count").textContent = count;
}