import gql from "graphql-tag";

export const MOVIE_PAGE = gql`
    query {
        movies(limit:50, rating: 1) {
            id
            title
            genres
            rating
            medium_cover_image
        }
    }
`;