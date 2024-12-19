import Image from "next/image";

export default function CardCrypto(props){
    return (
        <div className="bg-[rgb(18,19,24)] px-8 py-4 rounded-lg">
            <div className="flex gap-4 items-center">
                <Image src={props.imagen} alt="cryptocoin" width={60} height={60} />
                <h3 className="text-white">{props.titulo}</h3>
                <div className="bg-[rgb(8,8,8)] text-blue-600 px-3 py-1">{props.tipo}</div>
            </div>
            <div className="flex gap-3">
                <h3 className="text-white">{props.precio}</h3>
                <h4 className="text-green-600">{props.indice}</h4>
            </div>
            <img src={props.grafica} alt="" />
        </div>

    )
}