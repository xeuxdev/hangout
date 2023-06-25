export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_URL: string
      NEXTAUTH_SECRET: string
      JWT_SECRET: string
      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string
      MONGODB_URI: string
      FRONTEND_URL: string
      CLOUD_NAME: string
      CLOUD_API_KEY: string
      CLOUD_API_SECRET: string
      NEXT_PUBLIC_CLOUD_UPLOAD_PRESET: string
      NEXT_PUBLIC_CLOUD_UPLOAD_PRESET_PICS: string
      NEXT_PUBLIC_CLOUD_UPLOAD_URL: string
    }
  }
}
