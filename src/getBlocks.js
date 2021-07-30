import { ethers } from "ethers";

const provider = () =>
  new ethers.providers.JsonRpcProvider({
    url: process.env.REACT_APP_INFURA_PROVIDER,
  });

export const getLatestBlock = async () => {
  const blockNumber = await provider().getBlockNumber();
  return blockNumber;
};

export const getBlockInfo = async (_blockNumber) => {
  const blockInfo = await provider().getBlockWithTransactions(_blockNumber);
  //console.log(blockInfo);
};

export default provider;
