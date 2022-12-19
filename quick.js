async function partition(bar, l, r) {
    let i = l - 1;
    bar[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        bar[j].style.background = 'yellow';
        await waitForSorting(speed);

        if(parseInt(bar[j].style.height) < parseInt(bar[r].style.height)){
            i++;
            sort(bar[i], bar[j]);
            bar[i].style.background = 'orange';
            if(i != j) 
                bar[j].style.background = 'orange';
            await waitForSorting(speed);
        }
        else{
            bar[j].style.background = 'pink';
        }
    }
    i++; 
    await waitForSorting(speed);
    sort(bar[i], bar[r]);
    bar[r].style.background = 'pink';
    bar[i].style.background = 'green';

    await waitForSorting(speed);
    
    for(let k = 0; k < bar.length; k++) {
        if(bar[k].style.background != 'green')
            bar[k].style.background = 'cyan';
    }
    return i;
}

async function quickSort(bar, l, r){
    if(l < r) {
        let pivot = await partition(bar, l, r);
        await quickSort(bar, l, pivot - 1);
        await quickSort(bar, pivot + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l < bar.length && r < bar.length){
            bar[r].style.background = 'green';
            bar[l].style.background = 'green';
        }
    }
}


const quickButton = document.getElementById("quickSort");
quickButton.addEventListener('click', async function() {
    let bar = document.querySelectorAll('.bar');
    let l = 0;
    let r = bar.length - 1;
    disableSortButton();
    disableArraySize();
    disableGenerateButton();
    await quickSort(bar, l, r);
    enableSortButton();
    enableArraySize();
    enableGenerateButton();
});