import axios from "axios";
const api_key='2ec0d66f5bdf1dd12eefa0723f1479cf';
const movieBaseUrl = "https://api.themoviedb.org/3/";

const movieByGenreUrl = "https://api.themoviedb.org/3/discover/movie?api_key=";
//https://api.themoviedb.org/3/movie/550?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf

const getTrending =  axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenre=(id)=>axios.get(movieByGenreUrl+api_key+"&with_genres="+id);
export default {
    getTrending,getMovieByGenre
}


//https://api.themoviedb.org/3/2ec0d66f5bdf1dd12eefa0723f1479cf/&with_genres=28