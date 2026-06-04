import React from 'react'
import { useState , useEffect } from 'react'
const Products = ({ cart, setCart }) => {
    const [product ,setProduct] = useState([])

    const addToCart =(item)=>{
        const existingItem = cart.find((cartItem)=> cartItem.id ===item.id)

        if(existingItem){
            setCart( 
                cart.map((cartItem)=>
                cartItem.id === item.id
                ? {...cartItem,quantity: cartItem.quantity + 1}
                : cartItem
                )
            )
        }else{
            setCart([...cart, { ...item, quantity: 1 }])
        }


    }

     useEffect(() => {
    console.log(cart);
  }, [cart]);

    const api = "https://fakestoreapi.com/products"

    const fetchProducts =async ()=>{
        try {
            const response = await fetch(api)
            const data = await response.json()
            setProduct(data)
            console.log(data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gradient-to-r from-gray-500 to-black-300 min-h-screen">
        {product.map((item)=>{
            return(
                <div key={item.id} >
                    <div className="w-72 rounded-3xl overflow-hidden shadow-lg bg-white">
  {/* Image Section */}
  <div className="bg-gradient-to-b from-gray-900 to-red-700 h-64 flex items-center justify-center">
    <img
      src={item.image}
      alt={item.title}
      className="h-48 object-contain"
    />
  </div>

  {/* Content Section */}
  <div className="bg-gray-300 rounded-t-[40px] -mt-6 relative z-10 p-6 text-center">
    <h2 className="font-bold text-xl uppercase">
      {item.title.slice(0, 20)}
    </h2>

    <p className="text-gray-400 text-sm mt-2">
      Lorem ipsum dolor sit amet.
    </p>

    {/* Stars */}
    <div className="flex justify-center gap-1 my-3 text-yellow-400">
      ⭐⭐⭐⭐☆
    </div>

    <p className="text-3xl font-bold">
      ${item.price}
    </p>
  </div>

  {/* Button */}
  <button className="w-full py-4 bg-gradient-to-r from-amber-900 to-amber-700 text-white font-semibold uppercase" onClick={()=> addToCart(item)}>
    Add To Cart
  </button>
</div>
                </div>
            )
        })}
    </div>
  )
}

export default Products