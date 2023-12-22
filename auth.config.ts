import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtegido = nextUrl.pathname.startsWith('/logado');
      if (isProtegido) {
        if (isLoggedIn) return true;
        return false; //redireciona para o login
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/logado', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
