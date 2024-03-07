const getRandEvent = random=>{
    random = Math.floor(Math.random()*3)
    if (random === 0){
        return 'Marathon';
    }
    else if(random ===1){
        return 'Triathlon';
    }
    else{
        return 'Pentathlon';
    }
};

const randEvent = getRandEvent();
 const getTrainingDays = (days)=>{
    if(randEvent === 'Marathon'){
        return days = 50;
    }
    else if(randEvent === 'Triathlon'){
        return days = 100;
    }
    else if(randEvent === 'Pentathlon'){
        return days = 200;
    }
 };
 const getDays = getTrainingDays();
 const logEvent = UserName=>{
    return `${UserName}'s time to train is: ${getDays}.`
 }
 console.log(logEvent('Media'));