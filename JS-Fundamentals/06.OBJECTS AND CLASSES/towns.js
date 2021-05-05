function towns(townsInfo) {
    for (const line of townsInfo) {
        let [town, latitude, longitude] = line.split(" | ");
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        const townInfo = {
            town,
            latitude,
            longitude
        };
        console.log(townInfo);
    }
}