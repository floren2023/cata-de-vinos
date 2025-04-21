"use client"
import { Card,CardHeader, CardContent,CardFooter } from '@/components/ui/card'
import React from 'react'
import { Header } from './header'
import Social from '../social'

import BackButton from '../back-button'


interface CardWrapperProps{
    children:React.ReactNode
    headerLabel:string
    backButtonLabel:string
    backButtonHref:string
    showSocial?:boolean
}


export default function CardWrapper  ({children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial}:CardWrapperProps) {
    

    return (
        <Card className="sombra1 w-[400px] p-6 mx-auto bg-white">
            <CardHeader >
                <Header label={headerLabel}/>
                
               </CardHeader>
               <CardContent > {children}
              
               </CardContent>
               <CardFooter className='justify-center text-center flex flex-col gap-5'>
               {showSocial&&
               (
                <div className='w-full'>
                    <Social/>
                </div>
               )}
                <BackButton href={backButtonHref} label={backButtonLabel}>

</BackButton>
            </CardFooter>
               
           
        </Card>
        
    )
}


