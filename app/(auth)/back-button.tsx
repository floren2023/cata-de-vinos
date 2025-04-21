"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

interface BackButtonProps {
    label:string
    href:string
}

function BackButton({label, href}: BackButtonProps) {
    

    return (
        
        <Button variant="link" className='font-normal w-full text-red-800 italic' size="lg" asChild>
            <Link href={href}>{label}</Link>
        </Button>
    )
}

export default BackButton
