import { QueryFunctionContext } from 'react-query'

const api = 'http://localhost:8000/scooters'

export const getAllProduct = () => fetch(api, {
    method: 'GET',
    next: { revalidate: 10 },
})
    .then((res) => {
        if (res.status !== 200) {
            return res.json().then((data) => {
                throw new Error(data.message)
            })
        }
        return res.json()
    })
    .then((data) => data)

export const getOneProduct = ({ queryKey }: QueryFunctionContext<string[]>) => {
    const [id] = queryKey
    return fetch(`${api}/${id}`, {
        method: 'GET',
        next: { revalidate: 10 },
    })
        .then((res) => {
            if (res.status !== 200) {
                return res.json().then((data) => {
                    throw new Error(data.message)
                })
            }
            return res.json()
        })
        .then((data) => data)
}
