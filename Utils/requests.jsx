const API_KEY = process.env.API_KEY;


const requests =  {
    fetchTrending: {
        title: 'Trending',
        url: '/trending/all/week?api_key=578bd26e2102a73b86a77ac23ff8fc51&language=en-US'
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=578bd26e2102a73b86a77ac23ff8fc51&language=en-US`
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=578bd26e2102a73b86a77ac23ff8fc51&with_genres=28`
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=578bd26e2102a73b86a77ac23ff8fc51&with_genres=35`
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=578bd26e2102a73b86a77ac23ff8fc51&with_genres=27`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=578bd26e2102a73b86a77ac23ff8fc51&with_genres=10749`
    },
    fetchMystery: {
        title: 'Mystery',
        url: `/discover/movie?api_key=578bd26e2102a73b86a77ac23ff8fc51&with_genres=6948`
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=578bd26e2102a73b86a77ac23ff8fc51&with_genres=878`
    },
    fetchWestern: {
        title: 'Romance',
        url: `/discover/movie?api_key=578bd26e2102a73b86a77ac23ff8fc51&with_genres=10749`
    },
    fetchAnimation: {
        title: 'Animation',
        url: `/discover/movie?api_key=578bd26e2102a73b86a77ac23ff8fc51&with_genres=16`
    },
    fetchTV: {
        title: 'TV Movie',
        url: `/discover/movie?api_key=578bd26e2102a73b86a77ac23ff8fc51&with_genres=10770`
    }
}

export default requests;