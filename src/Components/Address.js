import React, { useState, useEffect } from "react";
import provider from "../getBlocks";
import { formatEther } from "@ethersproject/units";

const Address = () => {
  const [balance, setBalance] = useState();

  const getBalance = async () => {
    const _balance = await provider().getBalance(
      "0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c"
    );
    setBalance(formatEther(_balance));
  };

  useEffect(() => {
    getBalance();
  }, []);

  console.log("bbbbb", balance);
  return <div>balance </div>;
};

export default Address;
