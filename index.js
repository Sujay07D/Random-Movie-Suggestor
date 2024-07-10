
async function fetchData(){

    const randNum = Math.floor(Math.random() * 100) + 1;
    const url = `https://imdb-top-100-movies.p.rapidapi.com/top${randNum}`;
    const options = {
	    method: 'GET',
	    headers: {
            'x-rapidapi-key': '6d0a4bbbf1msh5d85b47aef08efdp1ca6cfjsnd62c477eea62',
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
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

