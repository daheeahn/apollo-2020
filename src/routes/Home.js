import Movie from "../components/Movie";
import React from "react";
import { gql } from "apollo-boost"; // query는 component 밖에 있어.
import { useQuery } from "@apollo/react-hooks";

// ` is backtick.
const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`; // isLiked는 우리가 만드는거니까 client 붙여준다.
export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(data?.movies);
  return (
    <div>
      <h1>Apollo 2020</h1>
      {loading && <h2>Loading...</h2>}
      {!loading &&
        // data?.movies?.map(m => <Movie isLiked={m.isLiked} key={m.id} {...m} />)} // ...m에 isLiked 있으니까 괜찮지
        data?.movies?.map(m => <Movie key={m.id} {...m} />)}
    </div>
  );
};
