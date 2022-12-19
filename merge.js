async function merge(bar, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++) {
        await waitForSorting(speed);
        bar[low+i].style.background = '#D7205D';
        left[i] = bar[low+i].style.height;
    }
    for(let i = 0; i < n2; i++) {
        await waitForSorting(speed);
        bar[mid+1+i].style.background = '#D7D720';
        right[i] = bar[mid+1+i].style.height;
    }
    await waitForSorting(speed);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitForSorting(speed);
    
        if(parseInt(left[i]) <= parseInt(right[j])) {
            if((n1 + n2) === bar.length){
                bar[k].style.background = '#2AA817'
            }
            else{
                bar[k].style.background = '#8A39B9';
            }
            
            bar[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            if((n1 + n2) === bar.length){
                bar[k].style.background = '#2AA817';
            }
            else{
                bar[k].style.background = '#8A39B9';
            } 
            bar[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await waitForSorting(speed);
        if((n1 + n2) === bar.length){
            bar[k].style.background = '#2AA817';
        }
        else {
            bar[k].style.background = '#8A39B9';
        }
        bar[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await waitForSorting(speed);
        if((n1 + n2) === bar.length){
            bar[k].style.background = '#2AA817';
        }
        else{
            bar[k].style.background = '#8A39B9';
        }
        bar[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(bar, l , r) {
    if(l >= r) {
        return;
    }
    const m = l + Math.floor((r-l) / 2);
    await mergeSort(bar, l, m);
    await mergeSort(bar, m + 1, r);
    await merge(bar, l, m, r);
}

const mergeButton = document.getElementById("mergeSort");
mergeButton.addEventListener('click', async function() {
    let bar = document.querySelectorAll(".bar");
    let l = 0;
    let r = parseInt(bar.length) - 1;
    disableSortButton();
    disableArraySize();
    disableGenerateButton();
    await mergeSort(bar, l, r);
    enableSortButton();
    enableArraySize();
    enableGenerateButton();
})