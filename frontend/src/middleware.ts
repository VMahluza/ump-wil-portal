import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/lib/services/constants';
import { cookies } from 'next/headers';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookieStore = cookies();  
    // Get the access token from cookies
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
  if(!accessToken){
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/profile/:path*', 
    '/jobposts/:path*', 
    '/'
  ],
}