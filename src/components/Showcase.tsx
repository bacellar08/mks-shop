"use client"

import { NextPage } from 'next'
import { useEffect, useState } from 'react'

interface Props {}

const Showcase: NextPage<Props> = ({}) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC')
            const newData = await res.json()

            setData(newData)
        }

        fetchData()
    }, [])

    if(!data) {
        return <div>Carregando...</div>
    }

  return (
        <div>
            {}
        </div>)
}

export default Showcase