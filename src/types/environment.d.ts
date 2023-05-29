export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_URL: string
      NEXTAUTH_SECRET: string
      GOOGLE_ID: string
      GOOGLE_SECRET: string
    }
  }
}
