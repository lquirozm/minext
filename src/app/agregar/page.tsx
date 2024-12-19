"use client";
import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

export default function Page() {
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");

  const agregar = async () => {
    try {
      const newDoc = await addDoc(collection(db, "productos"), {
        nombre: producto,
        precio: precio,
      });
      console.log(newDoc);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1>Agregar producto</h1>
        <input
          onChange={(e) => setProducto(e.target.value)}
          type="text"
          placeholder="Nombre"
          className="border border-black"
        />
        <input
          onChange={(e) => setPrecio(e.target.value)}
          type="text"
          placeholder="Precio"
          className="border border-black"
        />
        <button onClick={agregar}>Agregar</button>
      </div>
    </>
  );
}
