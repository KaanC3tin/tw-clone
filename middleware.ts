
import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {

    // kullanıcını giriş yapıp yapmadığını kontrol et
    const token = request.cookies.get('token');



    // Eğer kullanıcı giriş yapmamışsa ve token yoksa "/" sayfasına yönlendir
    if (!token) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    //diğer tüm durumarda normal devam et
    return NextResponse.next();
}



// middleware'ın izleyeceği yolları belirle
export const config = {
    matcher: ['/home'],
}

