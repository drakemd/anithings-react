export const REQUEST_ANIME_LIST = 'REQUEST_ANIME_LIST';
export const RECEIVED_ANIME_LIST = 'RECEIVED_ANIME_LIST';

export const requestAnimeList = () => ({
    type: REQUEST_ANIME_LIST
});

export const receivedAnime = animeList => ({
    type: RECEIVED_ANIME_LIST,
    animeList: animeList.data
});

export function fetchAnimeList(){
    return function(dispatch){
        dispatch(requestAnimeList());
        return fetch('https://kitsu.io/api/edge/anime?page[limit]=10')
        .then(
            response => response.json(),
            error => console.log(error)
        ).then(animeList => {
            dispatch(receivedAnime(animeList))
        })
    }
}