import React, { useState, useEffect } from "react";
import provider from "../getBlocks";

const Transaction = () => {
  const [txInfo, setTxInfo] = useState();

  const getTransaction = async () => {
    const _txInfo = await provider().getTransaction(
      "0x5b73e239c55d790e3c9c3bbb84092652db01bb8dbf49ccc9e4a318470419d9a0"
    );
    setTxInfo(formatEther(_txInfo));
  };

  useEffect(() => {
    getTransaction();
  }, []);

  console.log("txInfo", txInfo);
  return <div>transaction </div>;
};

export default Transaction;
