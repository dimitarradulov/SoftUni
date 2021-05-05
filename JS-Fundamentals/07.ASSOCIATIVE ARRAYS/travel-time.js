function travelTime(input) {
    let travelDestinations = [];
    for (const line of input) {
        let isMatchingCountry = false;
        let index = 0;
        let [country, town, price] = line.split(" > ");
        price = Number(price);

        let destinationInfo = {
            country,
            [town]: price
        }

        for (const obj of travelDestinations) {
            if (obj.country === country) {
                index = travelDestinations.indexOf(obj);
                isMatchingCountry = true;
                break;
            } else {
                continue;
            } 
        }

        if (isMatchingCountry) {
            const object = travelDestinations[index];
            if (object.hasOwnProperty(town)) {
                if (object[town] > price) {
                    object[town] = price;
                } 
            } else {
                object[town] = price;
            }
        } else {
            travelDestinations.push(destinationInfo);
        }
    }

    travelDestinations.sort((a, b) => a.country.localeCompare(b.country));
    for (const obj of travelDestinations) {
        let sortable = [];
        for (const key in obj) {
            sortable.push([key, obj[key]]);
        }
        sortable
            .sort((a, b) => a[1] - b[1])
            .map(arr => {
                if (arr.includes('country')) arr.splice(0, 1);
            })
        const country = sortable.shift();
        sortable[0].unshift(...country);
        const finalArr = sortable.map(arr => arr.join(" -> "));
        console.log(finalArr.join(" "));
    }
}