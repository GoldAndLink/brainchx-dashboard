"use client"

import { Amplify, type ResourcesConfig } from "aws-amplify"
import { env } from "process"

export const authConfig: ResourcesConfig["Auth"] = {
  Cognito: {
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID || "eu-central-1_4E8RBTweP",
    userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID!,
  },
}

Amplify.configure(
  {
    Auth: authConfig,
  },
  { ssr: true }
);

export default function ConfigureAmplifyClientSide() {
  return null;
}
