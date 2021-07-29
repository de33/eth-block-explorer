import { useState, useEffect } from "react";
import getProvider from "../getBlocks";

const useGetBlocks = () => {
  const [latestBlock, setLatestBlock] = useState(12917150);
  //const [error, setError] = useState(null);
  //const [loading, setLoading] = useState(true);

  // const [network, setNetwork] = useState("mainnet");

  // const handleChange = (event) => {
  //   setNetwork(event.target.value);
  // };

  useEffect(() => {
    const getBlock = async () => {
      const blockNumber = await getProvider().getBlockNumber();
      setLatestBlock(blockNumber);
      return blockNumber;
    };
    getBlock();
  }, []);

  return latestBlock;
};

export default useGetBlocks;
