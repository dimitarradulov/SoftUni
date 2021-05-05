function houseParty(arr) {
    let guestList = [];

    for (const elem of arr) {
        let [guestName, second, third] = elem.split(" ");
        if (third === "going!") {
            if (guestList.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);
            } else {
                guestList.push(guestName);
            }
        } else {
            if (guestList.includes(guestName)) {
                guestList.splice(guestList.indexOf(guestName), 1);
            } else {
                console.log(`${guestName} is not in the list!`);
            }
        }
    }

    return guestList.join("\n");
}