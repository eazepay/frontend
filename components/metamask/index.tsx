import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import metamask from "../../assets/metamask.svg"

import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { Context } from '@/context';

export const MetaMask = () => {
  const { user, setUser } = useContext(Context)
  console.log("checking user", user);
  const router = useRouter();

  function reroute () {

    router.push('/security-questions');
  }

  
  
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

       
            if (connected) {
              setUser({
                address: account?.address,
                displayName: account?.displayName,
                displayBalance: account?.displayBalance,
                balanceSymbol: account?.balanceSymbol,
              })
    
              console.log("account dets", user);
    
              reroute()
            }
        // console.log("account dets", account?.displayName);
        // balanceSymbol
        // displayBalance
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button" className='flex flex-row justify-center items-center my-3 w-full border rounded-2xl bg-white py-[25px] px-[70px]' >
                    <Image width={40} height={40} src={metamask} alt="MetaMask logo" className='mr-2' />
                    Create account with MetaMask
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};