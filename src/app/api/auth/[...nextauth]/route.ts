import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Admin yapılandırması
const adminAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.ADMIN_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.ADMIN_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/admin/register/page.tsx",
  },
};

// Kullanıcı yapılandırması
const userAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.USER_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.USER_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/ecommerce/register/page.tsx",
  },
};

// `NextAuth` handler'ı bir fonksiyon olarak tanımlayın
export async function handler(req: NextRequest) {
  // İstek URL'sine göre admin veya kullanıcı yapılandırmasını seçin
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const options = isAdminRoute ? adminAuthOptions : userAuthOptions;

  // NextAuth ile yapılandırmaları kullanarak bir yanıt döndürün
  const response = await NextAuth(options);
  
  // Eğer bir yanıt varsa onu döndürün, yoksa hata yanıtı gönderin
  if (response) {
    return new Response(response.body, {
      status: response.status,
      headers: response.headers,
    });
  }

  // Eğer `response` null veya undefined ise hata yanıtı döndürün
  return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
}

export { handler as GET, handler as POST };
