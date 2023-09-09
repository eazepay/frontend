"use client"
import { createContext, useState } from "react";

export const Context = createContext();

// const Web3 = require('web3')

// var web3 = new Web3("https://eth-mainnet.alchemyapi.io/v2/FVhKzRogIAlI_zgqGdtgyVzZYTL9_yct");

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({ 
      address:"Not connected",
      displayName: "0x1...9",
      displayBalance: "0",
      balanceSymbol: "SEP",
      username: "username"
    })
 
    // console.log(web3)

     const contractAddress = "0x7c063ddA35237E2daa19C7B74E0C9f52a7CE0453";

    // const result = web3.eth.getBalance('0x6e35A20a740bC7288bdec5d4E138a253D4A72660');
    // console.log("result", result)

    return (
        <Context.Provider value={{ user, setUser, contractAddress }}>
            {children}
        </Context.Provider>
    );
};