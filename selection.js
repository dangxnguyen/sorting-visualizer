async function selectionSort() {
    const bar = document.querySelectorAll(".bar");
    for(let i = 0; i < bar.length; i++) {
        let min = i;
        bar[i].style.background = "#D7205D";
        for(let j = i+1; j < bar.length; j++) {
            bar[j].style.background = "#D7D720";
            await waitForSorting(speed);
            if(parseInt(bar[j].style.height) < parseInt(bar[min].style.height)) {
                if(min !== i) {
                    bar[min].style.background = '#2778E3';
                }
                min = j;
            }
            else {
                bar[j].style.background = '#2778E3';
            }
        }
        await waitForSorting(speed);
        sort(bar[min], bar[i]);
        bar[min].style.background = '#2778E3';
        bar[i].style.background = '#2AA817';
    }
}

const selectionButton = document.getElementById("selectionSort");
selectionButton.addEventListener('click', async function() {
    disableSortButton();
    disableArraySize();
    disableGenerateButton();
    await selectionSort();
    enableSortButton();
    enableArraySize();
    enableGenerateButton();
});