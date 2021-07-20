import { ethers } from "ethers";

const provider = () =>
  new ethers.providers.JsonRpcProvider({
    url: "https://mainnet.infura.io/v3/9b9f057582ab4e2bbb44024ba59e56f7",
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
