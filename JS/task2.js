function calcAverageCalories(days){
    if (days.length === 0) {
        return 0;
    }

    let averageCalories = 0;
    for(let i = 0; i < 7; i++){
        averageCalories += days[i].calories;
    }
    return averageCalories;
}

let weeklyCalories = [
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
    ];
    console.log(calcAverageCalories(weeklyCalories)); // 3180