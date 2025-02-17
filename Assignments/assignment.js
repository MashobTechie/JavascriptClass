// store movies - store in an array
// add new ones - use array.push method
// display them - log the array


// Created our array instance
const movieArray = []
console.log(`Our  movie array is ${movieArray}`);



// Add new movies
const addMovie = () => {

    // Storing user input into a variable
    let movieTitle = prompt('Write your movie  title');
    let movieYear = prompt('Enter your movie year');

    // Validate user input
    if (
        !movieTitle || !movieYear || isNaN(movieYear)) {
        console.log('Invlid user input.Please enter a valid movie title and movie year');
        return;
    }


    // Add the movie to the array
    movieArray.push({ movieYear, movieTitle });
    console.log(`${movieYear} ${movieTitle} has been added to your list`);

};
addMovie()


// console.log(movieArray)

const displayMovie = () => {
    if (movieArray.length === 0) {
        console.log(`No movies in your list`);
        return;
    }

    // console.log(movieArray) Instead of direct logging

    console.log(`Your movie list : `);

    movieArray.forEach((movie, index) => console.log(`${index + 1}.${movie.movieTitle} (${movie.movieYear})`));
}

displayMovie();