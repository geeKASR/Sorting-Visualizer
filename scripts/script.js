

//========================================================================
//                          project constants

const baseLength = 1100;


const maxHeight = 380;
const minHeignt = 20;

const maxNumber = 500;
const minNumber = 10;

let timeDelay = 10;

const arr = [];
const tempArray = [];

let isRunning = false;
let isPaused = false;
let currNum = 10;
let currWidth = baseLength/currNum;
let sortType = 0;

const valueBox = document.getElementById('values');
const sliderNumber = document.getElementById("numberNum");
const sliderSpeed = document.getElementById('speedNum');
const generateButton = document.getElementById('generate');

const mergeSortButton = document.getElementById('MergeId');
const quickSortButton = document.getElementById('QuickId');
const selectionSortButton = document.getElementById('SelectionId');
const insertionSortButton = document.getElementById('InsertionId');
const bubbleSortButton = document.getElementById('BubbleId');
const sortButton = document.getElementById('Sort');
const resetButton = document.getElementById('Reset');




//----------------------------------------------------
//              for updating array values


const updateArrayValue = function(index,value){
    valueBox.children[index].style.height = `${value}px`;
}

const changeArrayValues = function(){

    for(let i =0;i<arr.length;i++)
    {
        let tempValue = Math.max(Math.round(Math.random()*381),20);
        arr[i] = tempValue;
        updateArrayValue(i,tempValue);
        valueBox.children[i].style.backgroundColor = "brown";
    }
}

const changeArrayLength = function(len){
    arr.length = 0;
    currNum = len;
    currWidth = baseLength/len;

    for(let i =0;i<len;i++) 
    {
        arr.push(20);
    }

    while(valueBox.children.length > 0){
        valueBox.removeChild(valueBox.lastElementChild);
    }

    for(let i=0;i<arr.length;i++)
    {
        let tempDiv = document.createElement('div');
        tempDiv.classList.add('value');
        tempDiv.style.width = `${currWidth}px`;
        tempDiv.style.height = `${arr[i]}px`;

        valueBox.appendChild(tempDiv);
    }

    changeArrayValues();
}
changeArrayLength(10);


// ---------------------------------------------------




generateButton.addEventListener('click',changeArrayValues);




//----------------------------------------------------
//                  slider inputs


sliderNumber.addEventListener('input',()=>{
    changeArrayLength(sliderNumber.value);
})
sliderSpeed.addEventListener('input',()=>{
    let x = sliderSpeed.value;
    if(x == 1){
        timeDelay = 1000;
    }
    else if(x == 2){
        timeDelay = 250;
    }
    else if(x == 3){
        timeDelay = 50;
    }
    else if(x==4){
        timeDelay = 20;
    }
    else{
        timeDelay = 1;
    }
})


//----------------------------------------------------





//----------------------------------------------------
//          sorting buttong animation and selection


const activateButton = function(num){
    let x;
    if(num==1) x = mergeSortButton;
    else if(num==2) x = quickSortButton;
    else if(num==3) x = selectionSortButton;
    else if(num==4) x = insertionSortButton;
    else if(num==5) x = bubbleSortButton;

    if(sortType === 0)
    {   
        sortType = num;
        x.classList.toggle('selected');
        x.classList.toggle('buttonHover');

        let tempDiv = document.querySelector('#buttonSection');
        for(let i =0;i<tempDiv.children.length;i++)
        {
            if(i==sortType-1) continue;
            tempDiv.children[i].classList.toggle('notSelected');
            tempDiv.children[i].classList.toggle('buttonHover');
        }
    }
    else if(sortType == num){
        
        x.classList.toggle('selected');
        x.classList.toggle('buttonHover');

        let tempDiv = document.querySelector('#buttonSection');
        for(let i =0;i<tempDiv.children.length;i++)
        {
            if(i==sortType-1) continue;
            tempDiv.children[i].classList.toggle('notSelected');
            tempDiv.children[i].classList.toggle('buttonHover');
        }
        sortType = 0;
    }
}

mergeSortButton.addEventListener('click',()=>{
    activateButton(1);  
})
quickSortButton.addEventListener('click',()=>{
    activateButton(2);  
})
selectionSortButton.addEventListener('click',()=>{
    activateButton(3);  
})
insertionSortButton.addEventListener('click',()=>{
    activateButton(4);  
})
bubbleSortButton.addEventListener('click',()=>{
    activateButton(5);  
})


//------------------------------------------------------------------
//                  time delay functions and color schemes


function disable_buttons(){
    generateButton.classList.toggle('disabled');

    mergeSortButton.classList.toggle('disabled');
    quickSortButton.classList.toggle('disabled');
    selectionSortButton.classList.toggle('disabled');
    insertionSortButton.classList.toggle('disabled');
    bubbleSortButton.classList.toggle('disabled');
    sliderNumber.classList.toggle('disabled');
}


const changeColorCompare = function(index)
{
    valueBox.children[index].style.backgroundColor = "yellow";
}
const changeColorGreen = function(index){
    valueBox.children[index].style.backgroundColor = "#4adf72";
}
const changeColorRed = function(index){
    valueBox.children[index].style.backgroundColor = "red";
}
const changeColorDefault = function(index){
    valueBox.children[index].style.backgroundColor = "#6b334e";
}



const foo = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },timeDelay);
    })
};

const foo2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },20);
    })
};

//---------------------------------------------------------------------------------------------------------------
//                                  sorting button function  

sortButton.addEventListener('click', ()=>{
    if(sortType === 0 || isRunning)
    {   
        if(isRunning){
            isPaused = !isPaused;
        }
        else{ 
            alert("Select Any Sorting Algorithm!");
            return;
        }

        if(isPaused){
            sortButton.innerHTML = "<i class=\"fa-solid fa-play\"></i>";
            sortButton.style.backgroundColor = "red";
        }
        else{
            sortButton.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
            sortButton.style.backgroundColor = "#4adf72";
        }

    }
    else
    {
        sortButton.classList.toggle('bigButtonHover');
        sortButton.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
        sortButton.style.backgroundColor = "#4adf72";
        sortButton.style.color = "#0b2c46";

        if(sortType === 1)
        {
            mergeSort();
        }
        else if(sortType === 2){
            quickSort();
        }
        else if(sortType === 3)
        {
            selectionSort();
        }
        else if( sortType === 4){
            insertionSort();
        }
        else if(sortType === 5)
        {
            bubbleSort();
        }
    }
})



//-------------------------------------------------------------------------------------