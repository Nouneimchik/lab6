function calcAverageCalories(days){
    if (days.length === 0) {
        return 0;
    }

    let sumCalories = 0;
    for(let i = 0; i < 7; i++){
        sumCalories += days[i].calories;
    }
    return sumCalories/7;
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

let weeklyCalories2 = [
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
    ];
console.log(calcAverageCalories(weeklyCalories2)); // 2270
<<<<<<< HEAD
console.log(calcAverageCalories([])); // 0
=======
console.log(calcAverageCalories([])); // 0
>>>>>>> 58f6814b45f7903fe1e4ff43d0f9f3e99df8f88d
