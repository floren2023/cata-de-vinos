import {NextResponse} from "next/server"
import type {NextRequest} from "next/server"
import { auth } from "./auth"
import { cookies } from "next/headers"
import { decrypt } from "./app/_lib/session"

const publicRoutes = ['/login', '/signup', '/','/testauth'] 
const protectedRoutes=["/users/client","/users"]

export default async function middleware(req:NextRequest){
    
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)
    // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)
  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith('/users/client')
  ) {
    return NextResponse.redirect(new URL('/users/client', req.nextUrl))
  }
 
  return NextResponse.next()
}
 


export const config={
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}