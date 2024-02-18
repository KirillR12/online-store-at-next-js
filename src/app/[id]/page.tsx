'use client'

import { useParams } from 'next/navigation'
import { ItemDetaliPage } from '@/src/pages/ItemDetailPage'

const page = () => {
    const params = useParams()

    return (
        <ItemDetaliPage id={params.id} />
    )
}

export default page
