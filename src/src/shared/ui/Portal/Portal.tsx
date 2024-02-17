'use client'

import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalSchema {
    children: ReactNode
}

export const Portal = (props: PortalSchema) => {
    const {
        children,
    } = props

    return createPortal(children, document.body)
}
