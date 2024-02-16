'use client'

import { useQuery } from 'react-query'
import { useParams } from 'next/navigation'
import { getOneProduct } from '@/src/shared/api/api'

 interface pageProps {
   className?: string
}
const page = ({ className }: pageProps) => {
    const { id } = useParams()

    return (
        <h1>
            ds
        </h1>
    )
}

export default page
