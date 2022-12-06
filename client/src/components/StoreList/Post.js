import React from "react";
import "./Post.css";

export default function Post({ posts, loading }) {
  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  let Show1render = posts.map((item) => {
    return (
      <div className="d-flex flex-column m-3  " key={item._id}>
        <img
          className="itemImg"
          src={
            "http://tlwsn.westeurope.cloudapp.azure.com/api/image/" + item._id
          }
        />
        <div className="d-flex flex-row m-3 p-1 justify-content-between align-items-baseline">
          <p className="m-1 fs-4 ">{item.name}</p>
          <p className="m-1 fs-4 text-muted">{item.price}</p>
        </div>
        <p className=" m-4">{item.description}</p>
      </div>
    );
  });
  return Show1render;
}
