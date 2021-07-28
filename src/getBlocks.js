import { ethers } from "ethers";

const provider = () =>
  new ethers.providers.JsonRpcProvider({
    url: `https://mainnet.infura.io/v3/2b3f02d5ea1744418f4a7f1aae197184`,
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
