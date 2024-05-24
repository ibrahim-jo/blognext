import type { NextAuthConfig } from "next-auth";

export const authorizeConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token }) {
      session.user = token.user;
      return session;
    },

    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl.pathname.startsWith("/admin");
      const isBlog = request.nextUrl.pathname.startsWith("/blog");
      const isLogIn = request.nextUrl.pathname.startsWith("/login");

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }
      if (isBlog && !user) {
        return false;
      }
      if (isLogIn && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
