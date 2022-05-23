

async function insertionSort(){
    disable_buttons();
    isRunning = true;
    for(let i = 0;i<arr.length;i++)
    {   
        let val = arr[i];
        for(let j = i-1;j>=0;j--)
        {
            while(isPaused){
                await foo();
            }

            changeColorCompare(j);
            changeColorCompare(j+1);

            await foo();

            if(arr[j] >= val){
                arr[j+1] = arr[j];
                arr[j] = val;

                updateArrayValue(j+1,arr[j+1]);
                updateArrayValue(j,val);


                changeColorRed(j);
                changeColorGreen(j+1);
            }
            else{

                changeColorGreen(j);                
                changeColorGreen(j+1);
                break;
            }
            
            if(j === 0){

                await foo();
                changeColorGreen(j);
            }
            await foo();
        }

        changeColorGreen(i);
    }

    await foo();

    for(let i = 0;i<arr.length;i++)
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
