import React from 'react'
import { post } from '@/app/types/all-types'


function Page({post}: post) {
  

    return (
        <div>
            {post.title}
        </div>
    )
}

export default Page
