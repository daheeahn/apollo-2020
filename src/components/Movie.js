import { Link } from "react-router-dom";
import React from "react";
export default ({ id, medium_cover_image }) => (
  <div>
    <Link to={`/${id}`}>
      <img src={medium_cover_image} width={100} />
    </Link>
  </div>
); // id를 props로 받는 것.
