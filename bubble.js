async function bubbleSort() {
    const bar = document.querySelectorAll('.bar');
    for (let i = 0; i < bar.length-1; i++) {
        for (let j = 0; j < bar.length-i-1; j++) {
            bar[j].style.background = '#D7D720';
            bar[j+1].style.background = '#D7D720';
            if (parseInt(bar[j].style.height) > parseInt(bar[j+1].style.height)) {
                await waitForSorting(speed);
                sort(bar[j], bar[j+1]);
            }
            bar[j].style.background = '#2778E3';
            bar[j+1].style.background = '#2778E3';
        }
        bar[bar.length-1-i].style.background = '#2AA817';
    }
    bar[0].style.background = '#2AA817';
}

const bubbleButton = document.getElementById('bubbleSort');
bubbleButton.addEventListener('click', async function() {
    disableSortButton();
    disableArraySize();
    disableGenerateButton();
    await bubbleSort();
    enableSortButton();
    enableArraySize();
    enableGenerateButton();
})