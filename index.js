
async function fetchData(){

    const randNum = Math.floor(Math.random() * 100) + 1;
    const url = `https://imdb-top-100-movies.p.rapidapi.com/top${randNum}`;
    const options = {
	    method: 'GET'
    };

    try {
	    const response = await fetch(url, options);
	    const data = await response.json();

        const movieImg = document.getElementById("movieImg");
        movieImg.src = data.image;

        const movieName = document.getElementById("movieName");
        movieName.textContent = data.title;

        const movieDesc = document.getElementById("movieDesc");
        movieDesc.textContent = data.description;


    } 
    catch (error) {
    	console.error(error);
    }
}

