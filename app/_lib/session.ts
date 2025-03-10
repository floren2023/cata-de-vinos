import 'server-only'
import {SignJWT, jwtVerify} from 'jose'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { db } from '../db/drizzle'
import { rolesEnum, sessionTable } from '../db/schema'


const key=new TextEncoder().encode(process.env.AUTH_SECRET)


export async function encrypt(payload:any){
    return new SignJWT(payload)
    .setProtectedHeader({alg:'HS256'})
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(key)


}

export async function decrypt(input: string | undefined = '') {
    try {
      const { payload } = await jwtVerify(input, key, {
        algorithms: ['HS256'],
      })
      return payload
    } catch (error) {
      
      return null
    }
}
export async function createSession(id:number){

 const expiresAt=new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  const data = await db
  .insert(sessionTable).values({userId:id, expiresAt})
  // Return the session ID
  .returning({ id: sessionTable.id })

const sessionId = data[0].id
  const session = await encrypt({ sessionId, expiresAt })
    const cookieStore = await cookies()
    
 
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}
   



export async function verifySession(){
    const cookie=(await cookies()).get(cookies.name)?.value
     const session=await decrypt(cookie)
     if(!session ?.userId){
        redirect("/login")
     }
     return {userId :session.userId}
}

export async function updateSession() {
  const session = (await cookies()).get('session')?.value
  const payload = await decrypt(session)
 
  if (!session || !payload) {
    return null
  }
 
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
 
  const cookieStore = await cookies()
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: 'lax',
    path: '/',
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
}