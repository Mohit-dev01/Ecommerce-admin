'use client'

import { StoreModal } from "@/components/modals/store-modal"
import { useState, useEffect } from "react"

export const ModalProvider = () => {
    const [isMounted, SetisMounted] = useState(false)

    useEffect( () => {
        SetisMounted(true)
    }, [])

    // {used to resolve hydration error}
    if(!isMounted){
        return null
    }

    return(
        <>
        <StoreModal/>
        </>
    )
}