import { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri"
import { IoIosArrowForward, IoMdHeartEmpty } from "react-icons/io"
import { NextPage } from "next";




    interface Items {
        id: number,
        name: string,
        brand: string,
        description: string,
        photo: string
        price: number,
        createdAt: string,
        updatedAt: string,
    }

    interface CartProps {
        data: Items[]
    }

const Cart: NextPage<CartProps> = ({ data }) => {

    


    const [cartVisible, setCartVisible] = useState(false)
    const [arrowVisible, setArrowVisible] = useState(false)

    const hideAndShow = () => {
      setCartVisible(!cartVisible)
      setArrowVisible(!arrowVisible)
    }

  
    const cartStyles = {
      transform: cartVisible ? "translateX(-100%)" : "translateX(0)",
      transition: "transform 0.6s ease-in-out",
    }


    const buttonStyle: React.CSSProperties = {
        opacity: arrowVisible ? 1 : 0,
        transition: "opacity 0.6s ease-in-out",
      }

      const totalPrice = 0

    return (
        <>
        <button className="bg-black p-8 w-1/3 z-20 text-white absolute bottom-0 font-bold text-2xl opacity-95" style={cartStyles}>Finalizar compra</button>
        <div className="bg-blue-700 w-1/3 h-full absolute text-white font-bold text-2xl p-10 shadow-lg items-center opacity-95" style={cartStyles} >
            <div className="flex justify-between">
            <button className="absolute left-[92%] bottom-[46%] h-24 w-24 rotate-45 bg-blue-700" onClick={hideAndShow} style={buttonStyle}>
            <IoIosArrowForward className='-rotate-45 absolute left-14 bottom-14'/>
            </button>
            <h1 className="mb-5">Meu Carrinho</h1>
            <RiCloseCircleFill className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' onClick={hideAndShow} size={42}/>
            </div>

            <div className="flex flex-col items-center h-5/6">
                {data.map((item) => (
                    
                <div key={item.id} className="bg-white w-5/6 rounded-lg h-28 flex items-center justify-around text-black text-sm my-2">
                    <RiCloseCircleFill className='cursor-pointer' color='crimson' size={28}/>
                    <img src={item.photo} alt="Imagem do produto" width={100}/>
                    <h3>{item.name}</h3>
                    <div className="flex flex-col items-start text-black bg-white border-2 rounded-md p-1">
                        <span>Qtde:</span>
                        <input className="w-8" type="number" name="" id="" step={1} />
                    </div>
                    <span className="font-extrabold">R${item.price}</span>
                </div>
                    
                ))}

                
            </div>
                <div className=" w-full text-2xl flex justify-between">
                    <span>Total</span>
                    <span>R${totalPrice}</span>
                </div>

        </div>
        </>
    )
}

export default Cart