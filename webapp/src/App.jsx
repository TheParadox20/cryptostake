import { useContext } from "react"
import { Context } from "./ContextProvider.jsx"

export default function App(){
  let {Wallet} = useContext(Context)
  return(
    <div className="bg-slate-900 h-screen">
      <h1 className="text-purple-600 font-bold text-lg">CryptoStake</h1>
    </div>
  )
}