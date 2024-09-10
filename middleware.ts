
import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {

    // kullanıcını giriş yapıp yapmadığını kontrol et
    const token = request.cookies.get('token')?.value;
    const pathname = request.nextUrl.pathname


    // Eğer kullanıcı giriş yapmamışsa ve token yoksa "/" sayfasına yönlendir
    if (!token || token === "/home") {
        return NextResponse.redirect(new URL('/', request.url))
    }


    if (pathname === "/leftsidebar") {
        return NextResponse.redirect(new URL('/', request.url))
    }

    //diğer tüm durumarda normal devam et
    return NextResponse.next();
}



// middleware'ın izleyeceği yolları belirle
export const config = {
    matcher: ['/home',
        '/leftsidebar'],
}

