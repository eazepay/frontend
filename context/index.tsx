"use client";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/lib";
import { ReactNode, createContext, useEffect, useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import { useWatchPendingTransactions } from "wagmi";

interface User {
  address: string;
  displayName: string;
  displayBalance: string;
  balanceSymbol: string;
  username: string;
  userId: string;
  isActive: boolean;
}

interface AuthContextType {
  user: User;
  setUser: (user: User) => void;
}

export const Context = createContext<AuthContextType | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const { address } = useAccount();
  const [newUpdate, setNewUpdate] = useState(false);
  const [user, setUser] = useState({
    address: "Not connected",
    displayName: "Not connected",
    displayBalance: "displayBalance",
    balanceSymbol: "EZT",
    username: "username",
    userId: "userId",
    isActive: false,
  });

  useWatchPendingTransactions({
    chainId: 1,
    listener: (hashes) => setNewUpdate(true),
  });

  const userId = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "addressToUserId",
    args: [address],
  });

  const userData = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "userIdToDetails",
    args: [Number(userId?.data)],
  });

  useEffect(() => {
    if (userData?.data) {
      setUser({
        ...user,
        address: userData?.data[2],
        displayName: userData?.data[0],
        username: userData?.data[0],
        userId: Number(userData?.data?.[3])?.toString(),
        displayBalance: Number(userData?.data?.[4])?.toString(),
        isActive: userData?.data[1],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, userData?.data, newUpdate]);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};
