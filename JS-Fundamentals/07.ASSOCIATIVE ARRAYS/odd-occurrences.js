function oddOcccurrences(input) {
    let wordEncounter = new Map();
    
    const lowerCased = input
        .toLowerCase()
        .split(" ")
        .forEach(w => {
            if (!wordEncounter.has(w)) {
                wordEncounter.set(w, 1);
            } else {
                const plusOne = wordEncounter.get(w) + 1;
                wordEncounter.set(w, plusOne);
            }
        });

    const keys = Array.from(wordEncounter.keys());
    const filteredWords = keys
        .filter(w => wordEncounter.get(w) % 2 === 1)
        .join(" ");
    
    return filteredWords;
    
}