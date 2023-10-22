import Link from "next/link";
import { useAccount, useContractReads } from "wagmi";
import { useContext, useEffect, useState } from "react";
import { CONTRACT_CONFIG } from "@/lib";
import { Context } from "@/context";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

export default function DashboardHero() {
  const [naira, setNaira] = useState("");
  const router = useRouter();
  const { address } = useAccount();
  const userContx = useContext(Context);

  useEffect(() => {
    if (!address) {
      router.push("/");
    }
  }, [userContx?.user?.isActive, address, router]);

  const GET_RECHARGE_TOKENS = gql`
    {
      rechargedTokens(id: 1001) {
        id
        user
        currencySymbol
        amount
      }
    }
  `;

  const {
    loading,
    error,
    data: transactionData,
  } = useQuery(GET_RECHARGE_TOKENS);

  // console.log("data", transactionData, "loading", loading, "error", error);

  const currencyPrices = useContractReads({
    contracts: [
      { ...CONTRACT_CONFIG, functionName: "currencyPrices", args: ["usdt"] },
      { ...CONTRACT_CONFIG, functionName: "currencyPrices", args: ["naira"] },
      { ...CONTRACT_CONFIG, functionName: "currencyPrices", args: ["cedis"] },
      { ...CONTRACT_CONFIG, functionName: "currencyPrices", args: ["cefas"] },
    ],
  });

  const currencies = ["USD", "NGN", "Cedis", "CFA"];

  return (
    <div className="w-full h-full text-[#532775] bg-white">
      <div className="container mx-auto flex px-5 py-10 items-center justify-center md:flex-row-reverse flex-col-reverse w-[90%]">
        <div className="text-left w-full">
          {/* <h1 className="my-4 mt-[10px] md:py-8 text-5xl font-bold leading-tight">
            Welcome <span>0x0763738...</span>
          </h1> */}
          <div>
            {/* <p className='text-2xl font-bold leading-tight mb-4'>Current Holding</p> */}
            <div className="flex justify-center items-center">
              <div className="flex bg-[#4527a0] text-white w-full mr-2 mb-2 h-[150px] justify-center items-center border rounded-2xl">
                <span className="text-[50px] mr-2">
                  {userContx?.user?.displayBalance}
                </span>
                <span>Eaze Token</span>
              </div>
            </div>
            <p className="text-2xl font-bold leading-tight my-4">
              Current Exchange Rates
            </p>
            <div className="flex md:flex-row flex-col mb-6">
              {currencies.map(
                (curr, i) =>
                  currencyPrices?.data && (
                    <div
                      key={i}
                      className="flex bg-[#532775] text-white md:w-1/4 w-full mr-2 mb-2 h-[150px] justify-center items-center border rounded-2xl"
                    >
                      <span className="text-[50px] mr-2">
                        {" "}
                        {currencyPrices?.data[i]?.result?.toString()}{" "}
                      </span>
                      <span>{curr}</span>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="mx-auto mt-10">
            <p className="text-2xl font-bold leading-tight mb-8">
              Recent Transactions
            </p>
            {/* <div className="container flex flex-row justify-between bg-[#d0c5c56e] p-3 my-2 rounded-xl border text-[#333333]">
              <div className="px-4">
                <p className="text-leading text-xl font-semi-bold leading-tight ">
                  Sent <span>20</span>
                  <span className="ml-1">CFA</span> to <span>0x2736384938</span>
                </p>
                <p>2nd Sept, 2023</p>
              </div>
              <div>
                <div className="px-4">
                  <Link
                    href="/"
                    className="text-center mt-2 flex justify-center underline"
                  >
                    View Tx
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="container flex flex-row justify-between bg-[#d0c5c56e] p-3 my-2 rounded-xl border text-[#333333]">
              <div className="px-4">
                <p className="text-leading text-xl font-semi-bold leading-tight">
                  Sent <span>20</span>
                  <span className="ml-1">NGN</span> to{" "}
                  <span>79283738383 UBA Bank</span>
                </p>
                <p>2nd Sept, 2023</p>
              </div>
              <div className="px-4">
                <Link
                  href="/"
                  className="text-center mt-2 flex justify-center underline"
                >
                  View Tx
                </Link>
              </div>
            </div> */}
            {/* <div className="container flex flex-row justify-between bg-[#d0c5c56e] p-3 my-2 rounded-xl border text-[#333333]">
              <div className="px-4">
                <p className="text-leading text-xl font-semi-bold leading-tight">
                  Received <span>20</span>
                  <span className="ml-1">Cedis</span> from{" "}
                  <span>0x79283738383</span>
                </p>
                <p>6nd Sept, 2023</p>
              </div>
              <div className="px-4">
                <Link
                  href="/"
                  className="text-center mt-2 flex justify-center underline"
                >
                  View Tx
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
