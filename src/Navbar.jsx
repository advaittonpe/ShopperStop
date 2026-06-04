import { CiMenuBurger } from "react-icons/ci";
import { MdAcUnit } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = ({ setIsOpen , cart }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between p-6 bg-black text-white">
        {/* left */}
        <div>
            <MdAcUnit size={30} />
        </div>
       
        <div>
          <h1 className="text-xl font-bold underline font-italic" >Shoppers Stop</h1>
        </div>
         {/* right */}
        <div className="flex gap-6 items-center">
          <div className="relative">
  <FaShoppingCart size={25} onClick={() => navigate("/cart")} />

  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
    {cart.length}
  </span>
</div>
          <CiMenuBurger size={25} onClick={()=> setIsOpen(prev => !prev)}/>
        </div>


    </div>
  )
}

export default Navbar