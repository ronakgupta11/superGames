import React from 'react'

import SuperfluidWidget from '@superfluid-finance/widget';


import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from 'flowbite-react';


function SubscriptionPage() {
 const data = {
  productDetails: {
    name: "SuperGames",
    description: "Play Games With Every SuperToken",
    imageURI: "data:image/jpeg;base64,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"
  },
  paymentDetails: {
    paymentOptions: [
      {
        receiverAddress: "0xD7D98e76FcD14689F05e7fc19BAC465eC0fF4161",
        chainId: 84531,
        superToken: {
          address: "0x7ffce315b2014546ba461d54eded7aac70df4f53"
        },
        flowRate: {
          amountEther: "0.001",
          period: "month"
        }
      }
    ]
  },
  type: "dialog",
  theme: {
    typography: {
      fontFamily: "'Noto Sans', 'sans-serif'"
    },
    palette: {
      mode: "light",
      primary: {
        main: "#1DB227"
      },
      secondary: {
        main: "#fff"
      }
    },
    shape: {
      borderRadius: 20
    },
    components: {
      MuiStepIcon: {
        styleOverrides: {
          text: {
            fill: "#fff"
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 10
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10
          }
        }
      }
    }
  }
}

    
  return (
    <ConnectButton.Custom>
    {({ openConnectModal, connectModalOpen }) => {
      const walletManager = {
        open: async () => openConnectModal(),
        isOpen: connectModalOpen,
      };
      return (
        <>
          <SuperfluidWidget

            {...data}
            walletManager={walletManager}
            
          >
            {({ openModal }) => (
              <Button
              className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
      type="button"
              onClick={() => openModal()}>
                <p>
                  
                  Subscribe
                  </p>
                   </Button>
            )}
          </SuperfluidWidget>
          
        </>
      );
    }}
  </ConnectButton.Custom>


   


  )
}

export default SubscriptionPage