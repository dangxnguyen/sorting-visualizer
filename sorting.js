let sort = (x, y) => {
    let cur = x.style.height;
    x.style.height = y.style.height;
    y.style.height = cur;
}

const disableSortButton = () => {
    document.getElementById("bubbleSort").disabled = true;
    document.getElementById("selectionSort").disabled = true;
    document.getElementById("insertionSort").disabled = true;
    document.getElementById("mergeSort").disabled = true;
    document.getElementById("quickSort").disabled = true;
}

const enableSortButton = () => {
    document.getElementById("bubbleSort").disabled = false;
    document.getElementById("selectionSort").disabled = false;
    document.getElementById("insertionSort").disabled = false;
    document.getElementById("mergeSort").disabled = false;
    document.getElementById("quickSort").disabled = false;}

const disableGenerateButton = () => {
    document.getElementById("generate").disabled = true;
}

const enableGenerateButton = () => {
    document.getElementById("generate").disabled = false;
}

const disableArraySize = () => {
    document.getElementById("arrSize").disabled = true;
}

const enableArraySize = () => {
    document.getElementById("arrSize").disabled = false;
}

function waitForSorting(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('');
        }, time);
    });
}

let arraySize = document.getElementById("arrSize");

arraySize.addEventListener('input', function() {
    createNewArray(parseInt(arraySize.value));
});

let speed = 250

let arraySpeed = document.getElementById("arrSpeed");

arraySpeed.addEventListener('input', function() {
    speed = 300 - parseInt(arraySpeed.value);
});

let array = [];

createNewArray();

function createNewArray(numBars = 5) {
    deleteChild();

    array = [];
    for (let i = 0; i < numBars; i++) {
        array.push(Math.floor(Math.random() * 200) + 1);
    }
    console.log(array);

    const bars = document.getElementById("bars");
    for (let i = 0; i < numBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('items');
        bar.classList.add(`barNum${i}`);
        bars.appendChild(bar);
    }
}

function deleteChild() {
    const bar = document.getElementById("bars");
    bar.innerHTML = '';
}

const nextTry = document.getElementById("generate");

nextTry.addEventListener('click', function() {
    enableArraySize();
    enableSortButton();
    createNewArray(arraySize.value);
})





