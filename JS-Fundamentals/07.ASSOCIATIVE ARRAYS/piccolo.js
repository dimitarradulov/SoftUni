function piccolo(input) {
    let carsInParking = {};
    for (const line of input) {
        const [command, carNumber] = line.split(", ");
        carsInParking[carNumber] = command;
    }

    const keys = Object.keys(carsInParking);
    const filteredCars = keys
        .filter(carNum => carsInParking[carNum] === 'IN')
        .sort((a, b) => a.localeCompare(b))
        .join('\n');

    return filteredCars.length !== 0 ? `${filteredCars}` : `Parking Lot is Empty`; 
}