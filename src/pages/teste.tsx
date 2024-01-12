import { NextPage } from 'next'
import 'tailwindcss/tailwind.css';


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


const Showcase: NextPage<Props> = ({ items }) => {

    

  return <div className='flex justify-center'>
            
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
                        <button className='bg-blue-800 rounded-b-md text-white '>COMPRAR</button>        
                        </li>
                    
                ))}
            </ul>
        </div>
}


export default Showcase