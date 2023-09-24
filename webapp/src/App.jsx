import { useContext } from "react"
import { Context } from "./ContextProvider.jsx"
import Landing from "./components/Landing.jsx"
import Dashboard from "./components/Dashboard.jsx"

export default function App(){
  let {Wallet} = useContext(Context)
  let [wallet,setWallet] = Wallet
  return(
    <div className="">
      {wallet ? <Dashboard/> : <Landing/>}
    </div>
  )
}