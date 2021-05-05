function storeProvision(currentStock, orderedStock) {
    let store = {};

    addToStore(currentStock, store);
    addToStore(orderedStock, store);
    
    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }

    function addToStore(arr, obj) {
        for (let i = 0; i < arr.length; i += 2) {
            const product = arr[i];
            const quanity = Number(arr[i+1]);

            if (obj.hasOwnProperty(product)) {
                obj[product] += quanity;
            } else {
                obj[product] = quanity;
            }
        }
        return obj;
    }
}