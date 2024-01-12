import Cart from '@/components/Cart';
import Nav from '@/components/Nav'
import { NextPage } from 'next'
import 'tailwindcss/tailwind.css';
import { useState, useEffect } from 'react'



export async function getStaticProps() {
    
    try {
        const data = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC')
        const response = await data.json()
        const items = response.products || []
        console.log(items)
        return {
            props: {items},
        }
    } catch (error) {
        
        console.error('Error fetching data.', error)
        return {
            props: { items: [] },
        }
    }
}


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

interface Props {
    items: Items[],
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        useGrouping: false,
    }).format(price);
}

const Home: NextPage<Props> = ({ items }) => {

    const [cartItems, setCartItems] = useState<Items[]>([])
    const [dados, setDados] = useState<Items[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/shop')
                if(!response) {
                    throw new Error('Error fetchind data from the Cart API')
                }

                const result = await response.json()
                setDados(result)
            } catch (error) {
                console.error('Error fetchig data', error)
                
            }
        }

        fetchData()
    }, [])

    const addToCart = (item: Items) => {

        setCartItems((prevItems) => [...prevItems, item])

        fetch('http://localhost:3000/api/shop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: item.id,
                name: item.name,
                price: item.price,
                photo: item.photo,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Resposta da API:', data)
        })
        .catch((error) => {
            console.error('Erro a fazer a requisição POST:', error)
        })

    }

  return (
    <div>
    <Cart data={cartItems}/>
    <Nav/>

    <div className='flex justify-center'>
            
            <ul className='flex items-center justify-around flex-wrap w-6/12'>
                
                {items.map((item) => (

                           
                    
                        <li key={item.id} className='shadow-md rounded-md w-56 h-[360px] flex flex-col justify-between my-4'>
                        <div className='flex flex-col items-center '>
                        <img width={160} src={item.photo} alt="Product Image" />
                        </div>
                        <div className='flex justify-between items-center py-2 m-2'>
                        <h2 className='w-[90px] font-semibold text-zinc-700'>{item.name}</h2>
                        <div className='bg-zinc-700 rounded-md text-white p-1 h-8 font-bold'>
                        <span>{formatPrice(item.price)}</span>
                        </div>
                        </div>
                        <p className=' text-gray-500 font-light text-xs py-2 px-2'>{item.description}</p>
                        <button onClick={() => {addToCart(item)}} className='bg-blue-800 rounded-b-md text-white hover:bg-blue-700'>COMPRAR</button>        
                        </li>
                    
                ))}
            </ul>
        </div>
    </div>
  
  
  )
}

export default Home