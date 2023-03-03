const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '836d7e7980msh3bbc47dc0399fc2p18224ajsnaa3965323738',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};


export async function getGamesFromApi(category){ 
    let res = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games' + (category ? `?category=${category}` : ''), options)
	let data = await res.json();

	return data;
}

export async function gameDetailsFromAPI(id){
    let res = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=' + id, options)
    let data = await res.json();
    // console.log(data)
    return data;
}