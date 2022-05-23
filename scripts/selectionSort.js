
async function selectionSort(){
    disable_buttons();
    isRunning = true;
    for(let i =0;i<arr.length;i++)
    {
        for(let j = i+1;j<arr.length;j++)
        {

            while(isPaused){
                await foo();
            }

            changeColorCompare(i);
            changeColorCompare(j);
            await foo();

            if(arr[j] <= arr[i])
            {
                let tempVal = arr[j];
                arr[j] = arr[i];
                arr[i] = tempVal;

                updateArrayValue(i,tempVal);
                updateArrayValue(j,arr[j]);
            }

            changeColorGreen(i);
            changeColorRed(j);

            await foo();
        }
        changeColorGreen(i);
    }

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
