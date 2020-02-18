import React from "react";
import { gql } from "apollo-boost";
import { useParams } from "react-router-dom";
import { useQuery } from "react-apollo";

// 그 쿼리의 이름을 적어야 해. 쿼리에 파람이 있으면
// 저 query getMovie line은 이건 우리 서버를 위한게 아니라, ******apllo를******* 위한거야. 타입 써줬으니까 검사해줄거야.
// 그 다음은 *****우리 서버를 위해******* 날리는 쿼리를 그대로 써주면 되는거야.
const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      language
      rating
      summary
      medium_cover_image
      isLiked @client
    }
    suggestions(id: $id) {
      title
    }
  }
`;

export default () => {
  let { id } = useParams(); // /:id로 보냈는데, 이걸 param으로 사용 가능한가봄! 맞나?
  id = parseInt(id);
  const { loading, data } = useQuery(GET_MOVIE, {
    // open option object
    variables: { id } // === { id:id }
  });
  console.log(loading, data);

  return (
    <div>
      {
        <h1>
          {loading
            ? "Loading..."
            : `${data.movie.title} ${data.movie.isLiked ? "💕" : "😨"} `}
        </h1>
      }
      {!loading && data.movie && (
        <>
          <h1>{data.movie.summary}</h1>
          <h1>{data.movie.rating}</h1>
          <img src={data.movie.medium_cover_image} width={100} />
          <h1>추천</h1>
          {data?.suggestions?.map(s => (
            <h1>{s.title}</h1>
          ))}
        </>
      )}
    </div>
  ); // 여기서 data.movie는, GET_MOVIE의 movie임!
};
