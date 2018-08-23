import React from "react";

const Detail = ({
    match: {
        params: { movieId }
    }
}) => {
    console.log(movieId);
    return <div>Detail</div>
}

export default Detail;