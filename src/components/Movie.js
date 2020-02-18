import { Link } from "react-router-dom";
import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "react-apollo";

// likeMovie 리턴값 없어도 되나? TODO:
// 서버로 보내지 않을거고 클라이언트에서만 사용하니까 @client 써준다.
const TOGGLE_LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

export default ({ id, medium_cover_image, isLiked }) => {
  const [toggleLikeMovie] = useMutation(TOGGLE_LIKE_MOVIE, {
    variables: { id: parseInt(id), isLiked }
  }); // [potato]도 가능, useMutation이 arr의 첫번째를 리턴하기 때문에 likeMovie는 그 arr의 첫 번째 원소가 된다

  return (
    <div>
      <Link to={`/${id}`}>
        <img src={medium_cover_image} width={100} />
      </Link>
      <button onClick={toggleLikeMovie}>{isLiked ? "UnLike" : "Like"}</button>
    </div>
  );
}; // id를 props로 받는 것.
