function describeValue(value){
    let type = typeof value;

    let result;

    if(value){
        result = "truthy";
    }else {
        result = "falsy";
    }
    return type + " | " + result;
}

console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));

// question no- 2
function getDayType(day){   
    let fixedDay = day.toLowerCase();

    switch(fixedDay){
        case "friday":
            case "saturday":
                return "Weekend";

                case "sunday":
                    case "monday":
                        case "tuesday":
                            case "wednesday":
                                case "thursday":
                                    return "Working day";

                    default: 
                    return "Invalid Day";


    }


}

console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("Monday"));
console.log(getDayType("Banderban"));

// question no - 03
function validateUserName(username){
    if(username.length < 4){
        return " Too Short";

    }
    if(username.includes(" ")){
        return " No Space Allowed";
    }
    if(username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }
    return "Available";
}

console.log(validateUserName("rahim123"));
console.log(validateUserName("ab"));
console.log(validateUserName("a b"));
console.log(validateUserName("abcd"));
console.log(validateUserName("rahim islam"));
console.log(validateUserName("superadmin99"));
console.log(validateUserName("Admin_Rahim"));

// question no -4

 function getCngFare(distance,isNight=false,WaitingMinutes=0){
    let minimumFare= 50;

    if(distance>2){
        minimumFare += (distance-2)*15;

    }
    let waitingCharge= WaitingMinutes*2;
    let totalFare= minimumFare + waitingCharge;
    if(isNight){
        totalFare = totalFare*1.2;
    }
    return totalFare;
 }

 console.log(getCngFare(2));
 console.log(getCngFare(1));
 console.log(getCngFare(5));
 console.log(getCngFare(10));
 console.log(getCngFare(5,false,10));
 console.log(getCngFare(5,true));
 console.log(getCngFare(5,true,10));

//  question no-5

function getChaseVerdict(target,scored,ballsLeft){
    let runsNeeded = target -scored;
    if(runsNeeded<=0){
        return "Won";
    
    }
    if(ballsLeft <= 0){
        return "Lost";
    }

    let requiredRate = (runsNeeded/ballsLeft)*6;

    let verdict;
    if(requiredRate <= 6){
        verdict = "Comfortable";
    }
    else if(requiredRate<=12){
        verdict="Tough";

    }else{
        verdict="Almost Impossible";
    }
     return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;

}

console.log(getChaseVerdict(200,200,12));
console.log(getChaseVerdict(200,190,0));
console.log(getChaseVerdict(100,90,12));
console.log(getChaseVerdict(100,80,12));
console.log(getChaseVerdict(100,70,12));
console.log(getChaseVerdict(150,149,1));