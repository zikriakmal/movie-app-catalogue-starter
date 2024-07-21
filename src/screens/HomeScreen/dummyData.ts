import { NowShowingType, PopularType } from "./type";


const NowShowingList: Array<NowShowingType> = [
    {
        image: require('../../assets/now_showing/now_showing_1.png'),
        title: "Spiderman:No Way Home",
        ratingText: "9.1/10 IMDb"
    },
    {
        image: require('../../assets/now_showing/now_showing_2.png'),
        title: "Eternals",
        ratingText: "9.5/10 IMDb"
    },
    {
        image: require('../../assets/now_showing/now_showing_3.png'),
        title: "Shang-chi",
        ratingText: "8.1/10 IMDb"
    }
];

const PopularList: Array<PopularType> = [
    {
        image: require('../../assets/popular_movie/popular_movie_1.png'),
        title: "Venom Let There Be Carnage",
        ratingText: "9.1/10 IMDb",
        categories: ['Horror'],
        durationText: "1h 47m"
    },
    {
        image: require('../../assets/popular_movie/popular_movie_2.png'),
        title: "The King's Man",
        ratingText: "9.1/10 IMDb",
        categories: ['Horror'],
        durationText: "1h 47m"
    }
];


export { NowShowingList, PopularList }