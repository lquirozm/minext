import Image from "next/image";

export default async function Page() {
  const data = await fetch("https://fakestoreapi.com/products");
  const productos = await data.json();
  console.log(productos);

  // const [mostrarCarrito, setMostrarCrrito] = useState()
  
  return (
    <>
      <div className="flex flex-wrap p-5 gap-5 justify-center">
        {productos.map((producto) => (
          <div className="w-64 border-2 rounded-lg p-4 shadow-sm font-sans" key={producto.id}>
              <Image
                src={producto.image}
                width={300}
                height={300}
                alt="imagen-producto"
                className="w-64 h-64 object-contain mb-5"
              />
            <h3 className="truncate">{producto.title}</h3>
            <h2 className="font-bold">${producto.price}</h2>
            <button className="bg-black text-white p-2 rounded-lg mt-4">Agregar al carrito</button>
          </div>
        ))}
      </div>
      <div></div>
    </>
  );
}
