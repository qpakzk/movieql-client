import gql from "graphql-tag";

export const MOVIE_PAGE = gql`
    query {
        movies(limit: 100, rating: 3) {
            id
            title
            genres
            rating
            medium_cover_image
        }
    }
`;

export const MOVIE_DETAILS = gql`
    query getMovie($movieId: Int!) {
        movie(id: $movieId) {
            medium_cover_image
            title
            rating
            description_intro
            language
            genres
        }

        suggestions(id: $movieId) {
            id
            medium_cover_image
            title
            rating
        }
    }
`;