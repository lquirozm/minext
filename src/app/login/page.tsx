"use client"
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useState } from "react";
import "./styles.css"
import { useRouter } from "next/navigation";

export default function Login(){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const router = useRouter();

    const iniciarSesion = () =>{
        try {
            const result = signInWithEmailAndPassword(auth, email, password)
            console.log(result)
            alert('Bienvenido')
            router.push('/')

        } catch (error) {
            alert(error);
        }
      
    }
    return (
        <div className="flex items-center">
            <div className="w-[50%] p-16 text-center ">
                <h1 className="text-5xl bebas">LOGIN</h1>
                <h4 className="font-sans mb-5">Log in with your credentials</h4>
                <div className="flex flex-col gap-4 font-sans">
                {/* <input type="text" placeholder="Name" className="p-2 border rounded-lg px-3"/> */}
                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="p-2 border rounded-lg px-3"  />
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="p-2 border rounded-lg px-3" />
                <div className="text-left flex gap-2">
                    <input type="checkbox" id="remember" title="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button className="bg-black text-white py-2 rounded-3xl mb-5" onClick={iniciarSesion}>Login</button>
                <p>Dont' have an account? <span className="text-yellow-500">Sign up</span></p>
                </div>
            </div>
            <div className="w-[50%]">
                <Image src={'/image-register.png'} width={1000} height={1000} alt="imagen" className="w-full h-screen object-cover"/>
            </div>
    </div>
    )
}