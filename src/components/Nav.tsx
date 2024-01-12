import { NextPage } from "next";
import { FaShoppingCart } from "react-icons/fa";

interface Props {}

const Nav: NextPage<Props> = () => {
    
    
    return (
        <div>
        <div className='bg-blue-700 text-white py-4 px-4 flex justify-around'>
        <h1>MKS Sistemas</h1>
        <div className='bg-white flex px-4 py-2 rounded-md items-center justify-around w-28'>
          <FaShoppingCart color='black'/>
          <span className="text-black">0</span>
        </div>

        </div>
      </div>
    )
}

export default Nav