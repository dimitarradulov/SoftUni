function movies(arr) {
    let movies = [];
    for (const line of arr) {
        if (line.includes("addMovie")) {
            const name = line.split("addMovie ")[1];
            movies.push({name});
        } else if (line.includes("directedBy")) {
            const [name, director] = line.split(" directedBy ");
            
            // Check if the movie exists
            const movieExist = movies.find(m => m.name === name);
            if (movieExist) {
                movieExist.director = director;
            }
        } else if (line.includes("onDate")) {
            const [name, date] = line.split(" onDate ");

            // Check if the movie exists
            const movieExist = movies.find(m => m.name === name);
            if (movieExist) {
                movieExist.date = date;
            }
        }
    }

    for (const line of movies) {
        if (line.name && line.director && line.date) {
            console.log(JSON.stringify(line));
        }
    }
}