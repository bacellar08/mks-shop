import { NextApiRequest, NextApiResponse } from "next";

const dadosArmazenados: any[] = []

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if (req.method === 'POST') {

        const { body } = req

        dadosArmazenados.push(body)
        console.log('Dados recebidos', body)

        res.status(200).json({message: 'Dados recebidos com sucesso!'})
    } else if (req.method === 'GET') {
        res.status(200).json(dadosArmazenados)
    } else {
        res.status(405).json({message: 'Método não permitido'})
    }



}