import Header from "../components/Header"
import PotCard from "../components/PotCard"
import Table from "../components/Table"
import style from "../styles/Home.module.css"

import { useMemo } from "react"
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
require("@solana/wallet-adapter-react-ui/styles.css")
import { AppProvider } from "../context/context"

export default function Home() {
  const endpoint =
    "https://devnet.helius-rpc.com/?api-key=254d74c6-1d72-4d01-9d9e-3bc61b6c2280"
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <AppProvider>
            <div className={style.wrapper}>
              <Header />
              <PotCard />
              <Table />
            </div>
          </AppProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
