import { ethers } from "ethers";

const provider = () =>
  new ethers.providers.JsonRpcProvider({
    url: "https://mainnet.infura.io/v3/d883d28b11404f4ead10cdc2c84b33f0",
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
