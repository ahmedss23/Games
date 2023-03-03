import Game from './Game.js';
import {getGamesFromApi, gameDetailsFromAPI} from './API.js';

let allGames = [];

export async function displayGames(category){
    let games = await getGamesFromApi(category);
    allGames = games.map(el=>new Game(el))
    $('#games-container').html('');
    let gen = paginateGames();
    gen.next();
    return gen;
}

function* paginateGames(){
    $('#show-more-btn').removeClass('d-none')
    for(let i = 0; i < allGames.length; i++){
        $('#games-container').append(allGames[i].gameCard())
        if( (i + 1) % 24 == 0 && (i + 1) != allGames.length){
            yield;
        }
    }
    $('#show-more-btn').addClass('d-none')
}
function displayGameDetail(id){
    $('#game-detail').show(0,function(){
        $('#loading').show(0, async function(){
            $('body').addClass('overflow-hidden');
            let data = await gameDetailsFromAPI(id);
            $('#game-thumbnail').attr('src',data.thumbnail)
            $('#game-thumbnail').attr('alt', data.title + ' ' + 'Thumbnail')
            $('#game-title').text(data.title)
            $('#game-description').text(data.description)
            $('#game-category').text(data.genre)
            $('#game-platform').text(data.platform)
            $('#game-status').text(data.status)
            $('#game-link').attr('href', data.game_url)
            $('#loading').hide();
        });
    });
}
window.displayGameDetail = displayGameDetail;
