'use client'

import { useParams } from 'next/navigation'
import { ItemDetali } from '@/src/pages/ ItemDetail/ItemDetali'

const page = () => {
    const params = useParams()

    return (
        <ItemDetali id={params.id} />
    )
}

export default page
