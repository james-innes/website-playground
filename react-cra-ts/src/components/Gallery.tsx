import React from "react";
import { GetImages } from "../__generated__/types";
import { GetImages as QUERY } from "../queries";
import { useQuery } from "@apollo/react-hooks";

export default () => {
  const { loading, error, data } = useQuery<GetImages>(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <div className="gallery">
      {data &&
        data.allFile.edges.map(
          (edge: { node: { relativePath: string | undefined } }): any => (
            <div>
              <img src={"https://localhost:4000/public/" + edge.node.relativePath} />
              {edge.node.relativePath}
            </div>
          )
        )}
    </div>
  );
};
