"use client"
import Image from "next/image";
import "./styles.css"
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/config";
import { use, useState } from "react";


export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrarUsuario = async () =>{
    const result = await createUserWithEmailAndPassword(auth, email, password)
    console.log(result);
    alert("Usuario registrado");
  }
  const registrarseConGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    console.log(result)
  } 

  return (
    <div className="flex items-center">
      <div className="w-[50%] p-16 text-center ">
        <h1 className="text-5xl bebas">WELCOME RUIX</h1>
        <h5 className="text-lg mb-10 font-sans">Welcome to Crypto Planet dashboard Community</h5>
        <div className="flex flex-col gap-4 font-sans">
          <button className="border border-black py-2 rounded-3xl mb-5" onClick={registrarseConGoogle}>Registrarse con Google</button>
          <hr />
          {/* <input type="text" placeholder="Name" className="p-2 border rounded-lg px-3"/> */}
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="p-2 border rounded-lg px-3"  />
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="p-2 border rounded-lg px-3" />
          <div className="text-left flex gap-2">
            <input type="checkbox" id="remember" title="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button className="bg-black text-white py-2 rounded-3xl mb-5" onClick={registrarUsuario}>Register</button>
          <p>Already have an account? <span className="text-yellow-500">Log in</span></p>
        </div>
      </div>
      <div className="w-[50%]">
        <Image src={'/image-register.png'} width={1000} height={1000} alt="imagen" className="w-full h-screen object-cover"/>
      </div>
    </div>
  );
}
