"use client"
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({ 
      address:"0x123456789",
      displayName: "0x1...9",
      displayBalance: "0",
      balanceSymbol: "SEP",
       // console.log("account dets", account?.address);
          // console.log("account dets", account?.displayName);
          // balanceSymbol
          // displayBalance
    })

    
    

    const [freelancer, setFreelancer] = useState({
        name: "Glory Praise Emmanuel",
        email: "work.glorypraise@gmail.com",
        jobRole: "FullStack Developer",
        jobCategory: "Blockchain Development",
        country: "Nigeria",
        city: "Uyo",
        address: "",
        postalCode: "",
        phoneNumber: "",
        bio: "Worldclass Developer,  I specialize in blockchain development, web3 frontend engineering, and technical writing.",
        walletName: "",
        walletAddress: "",
        hourlyRate: "",
        serviceFee: "",
        amountPaid: "",
        portfolioLink: "wwww.github.com/emmaglorypraise",
        hoursPerWeek: "More than 30 hrs",
        contractPreference: "No contract-to-hire preference set",
        language: ["English: Fluent", "Igbo: Fluent", "Yoruba: Fluent"],
        university: "University of Uyo",
        degree: "Bachelor of Science (BS),",
        department: "Public Administration",
        yearOfStudy: "2017-2022",
        careerTitle: "Blockchain Developer",
      },)

    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
        </Context.Provider>
    );
};