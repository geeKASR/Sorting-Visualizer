


async function mergeSortHelper(l,r)
{

    if(l>r)
    {
        return;
    }
    else if(l == r)
    {
        changeColorCompare(l);
        await foo();
        changeColorGreen(l);
        return;
    }

    let mid = Math.round(l + (r-l)/2) -1;


    await mergeSortHelper(l,mid);
    await mergeSortHelper(mid+1,r);


    let p = l;
    let q = mid+1;


    while(q<=r && p<q)
    {
        
        
        while(isPaused){
            await foo();
        }


        if(arr[p] <= arr[q]){
            changeColorCompare(p);
            changeColorCompare(q);
            await foo();

            changeColorGreen(p);
            changeColorGreen(q);

            p++;
        }
        else{
            changeColorCompare(p);
            changeColorCompare(q);
            await foo();

            let tempVal = arr[q];

            for(let i = q;i>p;i--)
            {
                arr[i] = arr[i-1];
                updateArrayValue(i,arr[i-1]);
            }

            arr[p] = tempVal;
            updateArrayValue(p,arr[p]);

            changeColorGreen(p);
            changeColorGreen(q);

            p++;
            q++;
        }

        await foo();
    }

}


async function mergeSort(){

    disable_buttons();
    isRunning = true;


    let l = 0;
    let r = arr.length-1;


    await mergeSortHelper(l,r);

    for(let i =0;i<arr.length;i++)
    {
        changeColorCompare(i);
        await foo2();
        changeColorGreen(i);
    }
    isRunning = false;
    disable_buttons();

    sortButton.innerHTML = "<i class=\"fa-solid fa-play\"></i>";
    sortButton.style.backgroundColor = "#0b2c46";
    sortButton.classList.toggle('bigButtonHover');
    sortButton.style.color = "#b8d9f6";
}
