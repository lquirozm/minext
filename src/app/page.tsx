import CardCrypto from "@/components/CardCrypto";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-black font-sans">
        <div className="bg-[rgb(18,19,24)] mx-10 py-10 px-6 rounded-xl flex items-center">
          <div className=" flex flex-col justify-center p-10 w-[50%]">
            <h1 className="text-white text-5xl font-bold">Buy & Sell <br></br><span className="text-blue-600">Crypto Instant</span></h1>
            <p className="text-white mt-5 mb-5 w-[80%]">
              Join world's biggest & tursted Exchange.Trade inBitcoin, Ethereum,
              Ripple and many more currencies.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg w-fit">
              Start trading
            </button>
            <div className="mt-16 flex flex-wrap">
              <Image src="/logoipsum1.png" alt="Pc-indices" width={150} height={150} className="object-contain"/>
              <Image src="/logoipsum2.png" alt="Pc-indices" width={150} height={150} className="object-contain"/>
              <Image src="/logoipsum3.png" alt="Pc-indices" width={150} height={150} className="object-contain"/>
              <Image src="/logoipsum4.png" alt="Pc-indices" width={150} height={150} className="object-contain"/>
              <Image src="/logoipsum5.png" alt="Pc-indices" width={150} height={150} className="object-contain"/>
              <Image src="/logoipsum6.png" alt="Pc-indices" width={150} height={150} className="object-contain"/>
            </div>
          </div>
          <div className="w-[50%]">
            <Image src="/pc.png" alt="Pc-indices" width={500} height={500}/>
          </div>
        </div>
        <div className="mt-10">
          <h5 className="text-blue-600 text-center">Top Market</h5>
          <h2 className="text-white text-2xl text-center font-bold">Get Various Crypto Coin</h2>
        </div>
        <div className="flex mx-10 my-8 gap-5 justify-center">
          <CardCrypto imagen='/crypto1.png' titulo='Bitcoin' tipo='BTC' precio='38,447.54' indice='+2%' grafica='/grafica1.png'/>
          <CardCrypto imagen='/crypto2.png' titulo='Binance' tipo='BNB' precio='38,447.54' indice='+2%' grafica='/grafica1.png'/>
          <CardCrypto imagen='/crypto3.png' titulo='Ethereum' tipo='ETH' precio='38,447.54' indice='+2%' grafica='/grafica1.png'/>
          <CardCrypto imagen='/crypto4.png' titulo='XRP' tipo='XRP' precio='38,447.54' indice='+2%' grafica='/grafica1.png'/>
        </div>
        ...
      </div>
    </>
  );
}
