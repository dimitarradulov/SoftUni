function wordsTracker(input) {
    let wordsEncounter = {};
    const wordsToTrack = input
        .shift()
        .split(" ")
        .forEach(w => {
            wordsEncounter[w] = 0;
        });
    
    input.forEach(w => {
        if (wordsEncounter.hasOwnProperty(w)) {
            wordsEncounter[w]++;
        }
    });

    const sortedWordsByCount = Object.keys(wordsEncounter)
        .sort((a, b) => wordsEncounter[b] - wordsEncounter[a])
        .map(x => `${x} - ${wordsEncounter[x]}`)
        .join('\n');

    return sortedWordsByCount;
    
}