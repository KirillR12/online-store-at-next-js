'use client'

import { memo } from 'react'
import { ItemDetali } from '@/src/entities/ItemDetali'

 interface ItemDetaliProps {
   id: string | string[]
}

export const ItemDetaliPage = memo(({ id }: ItemDetaliProps) => (
    <ItemDetali id={id} />
))
