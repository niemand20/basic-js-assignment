// Problem 1


function radianToDegree(radian){
    const degree = (radian * 57.2958)
    if(typeof radian !== 'number'){
        return "please enter a valid number"
    }
    else{
        
        return degree.toFixed(2);

    }
    
    
}


const degreeCount = radianToDegree(4)
console.log(degreeCount);

// <<---------------------------------------------------------------->>
// problem 2


function isJavaScriptFile(string){
    if (typeof string !=="string"){
        return "please enter a string value";
    }
    else{
        if(string.endsWith(".js") === true){
            return true;
        }
        else {
            return false;
        }

    }
   
}

const returnJs = isJavaScriptFile("file.js");
console.log(returnJs);

// <<---------------------------------------------------------------->>

// Problem 3

function oilPrice(diesel, petrol, octen){
    if(typeof diesel!== "number" || typeof petrol!== "number" || typeof octen!== "number"){
        return "please enter a valid number"
    }
    else{
        const dieselPrice = diesel*114;
    const petrolPrice = petrol*130;
    const octenPrice = octen*135;
    const totalPrice = dieselPrice + petrolPrice + octenPrice;

    return totalPrice;

    }
    
}

const totalAmountOfPrice = oilPrice(2,3,1);
console.log(totalAmountOfPrice);
// <<---------------------------------------------------------------->>

// Problem 4

function publicBusFare(passanger){
    if (typeof passanger !=="number"){
        return "please enter a valid number";
    }
    else{
        const busCapacity = 50;
        const microBusCapacity = 11;
        const remainder3 = passanger%busCapacity;
        const remainder4 = (passanger%busCapacity)%microBusCapacity;
        // console.log(remainder3, remainder4);
        if(remainder3===0){
        // console.log(0);
            return 0;
    }
    else if (remainder3>0 && remainder3<=10){
        // console.log(remainder3*10)
        return remainder3*10;
    }
    else if (remainder4 === 0){
        // console.log("0");
        return 0;
    }
    else if(remainder4>0 && remainder4<=10){
        // console.log(remainder4*250);
        return remainder4*250;
    }
    else{
        // console.log("nothing");
        return;
    }
}
}

const busFare = publicBusFare(365);

console.log(busFare);

// <<---------------------------------------------------------------->>

// problem 5

function isBestFriend(friendName1 , friendName2){
    if (typeof friendName1 !=='object' || typeof friendName2 !=='object'){
        return "Please enter an object value";
    }
    else {
        if (friendName1.friend===friendName2.name && friendName2.friend===friendName1.name){
            return true;
        }
        else {
            return false;
        }

    }
   
    
}
const friend1 = {
    name: 'sabul',
    friend: 'abul'
};
const friend2 =  {
    name: 'abul',
    friend:'safbul'
};

const bestFriend = isBestFriend(friend1, friend2);
console.log(bestFriend);
