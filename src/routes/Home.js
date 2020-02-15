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
    }
  }
`;
export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  return (
    <div>
      <h1>Apollo 2020</h1>
      {loading && <h2>Loading...</h2>}
      {!loading &&
        data.movies &&
        data.movies.map(m => <Movie key={m.id} {...m} />)}
    </div>
  );
};
