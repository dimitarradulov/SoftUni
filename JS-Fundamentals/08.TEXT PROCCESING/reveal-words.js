function revealWords(words, template) {
    words = words.split(', ');
    let replacedSentance = '';
    for (const word of words) {
        const repeatTemplate = '*'.repeat(word.length);
        template = template.replace(repeatTemplate, word);
    }
    console.log(template);
    
}