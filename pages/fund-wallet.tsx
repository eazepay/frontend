import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/navbar-fund";
import Footer from "@/components/footer";
import { useContractWrite } from "wagmi";
import { useState, useEffect, useContext, SetStateAction } from "react";

import { useRouter } from "next/navigation";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/lib";
import { Context } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export default function FundWallet() {
  const userContx = useContext(Context);
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("naira");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedCurrency(event.target.value);
  };

  const router = useRouter();

  const fund = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "recharge",
    args: [userContx?.user?.userId, selectedCurrency, amount],
  });

  const UpdateUser = (e: any) => {
    e.preventDefault();
    fund.write();
  };

  useEffect(() => {
    if (fund.isSuccess) {
      router.push("/dashboard");
    }

    if (fund.isError) {
      alert(fund.error?.cause);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fund.isSuccess, fund.isError]);

  return (
    <main>
      <Navbar />
      <div className="flex w-screen h-full bg-white min-h-screen flex-1 flex-col justify-center px-6 py-1 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <h3 className="my-4 md:py-2 text-5xl font-bold text-black leading-tight text-center">
            Fund Wallet
          </h3>
          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={UpdateUser}>
              <div>
                <label
                  htmlFor="question1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Amount
                </label>
                <div className="mt-2">
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    autoComplete="amount"
                    required
                    placeholder="Input amount"
                    onChange={(e) => setAmount(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#532775] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Choose Currency
                </label>
                <div className="mt-2">
                  <select
                    id="currency"
                    name="currency"
                    autoComplete="currency-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#532775] focus:ring-2 focus:ring-inset focus:ring-[#532775] sm:max-w-lg sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={selectedCurrency}
                  >
                    <option value="naira">Naira</option>
                    <option value="cedis">Cedis</option>
                    <option value="usdt">USDT</option>
                    <option value="cefas">CFA</option>
                  </select>
                </div>
              </div>

              <div>
                <button
                  disabled={fund.isLoading}
                  className="flex w-full justify-center rounded-md bg-[#532775] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#532775] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#532775]"
                >
                  {fund.isLoading ? "Processing..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
