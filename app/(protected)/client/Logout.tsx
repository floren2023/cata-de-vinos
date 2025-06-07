"use client"
import { logout } from '@/app/actions/user-actions'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'

import React from 'react'

function Logout() {
    const clickHandler=async()=>{
       // await logout()
       
        
    }

    return (
        <Button variant="destructive" size ="sm" onClick={clickHandler} >Logout</Button>
        
    )
}

export default Logout
