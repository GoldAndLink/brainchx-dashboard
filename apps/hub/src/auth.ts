import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import CognitoProvider from "./providers/cognito";
import { env } from "./env.mjs";

const auth: AuthOptions = {
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  providers: [
    // CredentialsProvider({
    //   name: "credentials",
    //   credentials: {
    //     email: { type: "email" },
    //     password: { type: "password" },
    //   },
    //   authorize(credentials) {
    //     if (credentials?.email === "admin@admin.com" && credentials.password === "admin") {
    //       return { id: "1", name: "admin" };
    //     }

    //     return null;
    //   },
    // }),
    CognitoProvider({
      clientId: '3lm94uskr5s6mb44atlif1ejn3',
      clientSecret: 'n4iiv1j0m6bjspp3pncqq9urrcqull0t2adimo26p6rvfl38ers',
      issuer: 'https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_4E8RBTweP',
    })
  ],
};

export default auth;
