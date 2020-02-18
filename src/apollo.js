import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  resolvers: {
    // 서버에서 작성하는 것과 아주 유사하지!
    Movie: {
      isLiked: () => true // 왜 func일까?
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        // console.log("id", id);
        // console.log(cache.writeData);
        // writeData! 뭐뭐가 있는지 궁금하면 cache 콘솔 찍어보기
        // 근데 cache에 writeData 안보여서 cache.writeData했는데 함수가 찍히긴 찍힘. 꼭 보여야지 사용할 수 있는건 아닌가보다

        // 오프라인 노트앱에서 했던 것과 같은 맥락!  nomad-notes -> dataIdFromObject 참고
        // medium_image_cover도 바꿔도 돼~
        // 따로 ...는 안해줘도 되네??? 알아서 해주나봐
        cache.writeData({ id: `Movie:${id}`, data: { isLiked: !isLiked } });
      }
    }
  }
});

export default client;
