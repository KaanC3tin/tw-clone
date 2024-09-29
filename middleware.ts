
import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {

    // kullanıcını giriş yapıp yapmadığını kontrol et
    const token = request.cookies.get('token')?.value;
    const pathname = request.nextUrl.pathname




    //eğer token varsa kullanıcı "/" sayfasındaysa ve token varsa direkt "/home" a yönlendirilir!
    if ((pathname === "/") && token) {
        return NextResponse.redirect(new URL("/home", request.url))
    }


    // Eğer kullanıcının token'ı yoksa giriş yapmaya çalışıyorsa "/" 'e yönlendir
    if (!token && pathname === "/home") {
        return NextResponse.redirect(new URL('/', request.url))
    }

    //diğer tüm durumarda normal devam et
    return NextResponse.next();
}




export const config = {
    matcher: ['/home'],
}

