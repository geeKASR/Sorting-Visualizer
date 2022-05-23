


async function quickSortHelper(l,r)
{
    if(l>r) return;
    else if(l==r)
    {
        changeColorCompare(l);
        await foo();
        changeColorGreen(l);
        return;
    }


    let start = l;
    let end = r;

    let ind = Math.round(l + (r-l)/2)-1;
    let val = arr[ind];


    while(l<=r)
    {
        

        while(isPaused){
            await foo();
        }


        changeColorCompare(l);
        changeColorCompare(r);
        

        if(arr[l] >= val && arr[r] <= val)
        {
            let tempVal = arr[l];
            arr[l] = arr[r];
            arr[r] = tempVal;

            await foo();

            updateArrayValue(l,arr[l]);
            updateArrayValue(r,arr[r]);


            changeColorDefault(l);
            changeColorDefault(r);
            
            l++;
            r--;
        }
        else{
            await foo();
            changeColorDefault(l);
            changeColorDefault(r);
        }
        
        await foo();

        while(arr[l] < val){
            
            changeColorCompare(l);
            await foo();
            changeColorDefault(l);
            l++;
        }
        while(arr[r] > val){
            
            changeColorCompare(r);
            await foo();
            changeColorDefault(r);
            r--;
        }
    }
    
    await quickSortHelper(start,l-1);
    await quickSortHelper(l,end);
    
}

async function quickSort()
{
    isRunning = true;
    disable_buttons();
    let l = 0;
    let r = arr.length-1;

    await quickSortHelper(l,r);

    for(let i =0;i<arr.length;i++)
    {
        changeColorCompare(i);
        await foo2();
        changeColorGreen(i);
    }
    disable_buttons();
    isRunning = false;

    sortButton.innerHTML = "<i class=\"fa-solid fa-play\"></i>";
    sortButton.style.backgroundColor = "#0b2c46";
    sortButton.classList.toggle('bigButtonHover');
    sortButton.style.color = "#b8d9f6";
}