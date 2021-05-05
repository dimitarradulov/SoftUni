function solve(people, groupType, day) {
    people = Number(people);
    let sum = 0;

    if (day === "Friday") {
        switch(groupType) {
            case "Students":
                if (people >= 30) {
                    sum = (people * 8.45) * 0.85;
                } else {
                    sum = people * 8.45;
                }
                break;
            case "Business":
                if (people >= 100) {
                    sum = (people - 10) * 10.90;
                } else {
                    sum = people * 10.90;
                }
                break;
            case "Regular":
                if (people >= 10 && people <= 20) {
                    sum = (people * 15) * 0.95;
                } else {
                    sum = people * 15;
                }
                break;
        }
    } else if (day === "Saturday") {
        switch(groupType) {
            case "Students":
                if (people >= 30) {
                    sum = (people * 9.80) * 0.85;
                } else {
                    sum = people * 9.80;
                }
                break;
            case "Business":
                if (people >= 100) {
                    sum = (people - 10) * 15.60;
                } else {
                    sum = people * 15.60;
                }
                break;
            case "Regular":
                if (people >= 10 && people <= 20) {
                    sum = (people * 20) * 0.95;
                } else {
                    sum = people * 20;
                }
                break;
        }
    } else if (day === "Sunday") {
        switch(groupType) {
            case "Students":
                if (people >= 30) {
                    sum = (people * 10.46) * 0.85;
                } else {
                    sum = people * 10.46;
                }
                break;
            case "Business":
                if (people >= 100) {
                    sum = (people - 10) * 16;
                } else {
                    sum = people * 16;
                }
                break;
            case "Regular":
                if (people >= 10 && people <= 20) {
                    sum = (people * 22.50) * 0.95;
                } else {
                    sum = people * 22.50;
                }
                break;
        }
    }

    console.log(`Total price: ${sum.toFixed(2)}`);
}