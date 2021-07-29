import React from "react";

const BlockPage = ({
  match: {
    params: { blockNumber },
  },
}) => {
  return <div>blockNumber: {blockNumber}</div>;
};

export default BlockPage;
