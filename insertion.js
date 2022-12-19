async function insertionSort() {
    const bar = document.querySelectorAll(".bar");
    bar[0].style.background = '#2AA817';
    for(let i = 1; i < bar.length; i++) {
        let j = i - 1;
        let key = bar[i].style.height;
        bar[i].style.background = '#D7D720';
        
        await waitForSorting(speed);
        while( j >= 0 && (parseInt(bar[j].style.height) > parseInt(key))) {
            bar[j].style.background = '#D7D720';
            bar[j+1].style.height = bar[j].style.height;
            j--;
        
            await waitForSorting(speed);
            for(let k = i; k >= 0; k--) {
                bar[k].style.background = '#2AA817';
            }
        }
        bar[j+1].style.height = key;
        bar[i].style.background = '#2AA817';
    }
}

const insertionButton = document.getElementById("insertionSort");
insertionButton.addEventListener('click', async function() {
    disableSortButton();
    disableArraySize();
    disableGenerateButton();
    await insertionSort();
    enableSortButton();
    enableArraySize();
    enableGenerateButton();
});