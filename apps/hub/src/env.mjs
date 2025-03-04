import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  /*
   * ServerSide Environment variables, not available on the client.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === "production" ? z.string().min(1) : z.string().min(1).optional(),
    NEXTAUTH_URL: z.string().url(),

    // email
    SMTP_HOST: z.string().optional(),
    SMTP_PORT: z.string().optional(),
    SMTP_USER: z.string().optional(),
    SMTP_PASSWORD: z.string().optional(),
    SMTP_FROM_EMAIL: z.string().email().optional(),

    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),

    // aws cognito
    AWS_COGNITO_USER_POOL_ID: z.string(),
    AWS_COGNITO_USER_POOL_CLIENT_ID: z.string(),
    AWS_COGNITO_IDENTITY_POOL_ID: z.string(),
    COGNITO_CLIENT_ID: z.string(),
    COGNITO_CLIENT_SECRET: z.string(),
    COGNITO_ISSUER: z.string(),
    // AWS_COGNITO_DOMAIN: z.string(),
    // AWS_COGNITO_REDIRECT_SIGN_IN: z.string(),
    // AWS_COGNITO_REDIRECT_SIGN_OUT: z.string(),
  },
  /*
   * Environment variables available on the client (and server).
   */
  client: {
    NEXT_PUBLIC_APP_NAME: z.string().optional(),
    NEXT_PUBLIC_GOOGLE_MAP_API_KEY: z.string().optional(),
    NEXT_PUBLIC_USER_POOL_ID: z.string(),
    NEXT_PUBLIC_USER_POOL_CLIENT_ID: z.string(),
  },
  runtimeEnv: process.env,
});
