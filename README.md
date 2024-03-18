This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Node Version 20.5

## Database Used

Supabase
ORM Prisma

## Prisma

Prisma is used to connect to the database and create the schema. The schema is defined in the `schema.prisma` file. The schema is then used to generate the Prisma Client. The Prisma Client is used to interact with the database.

To generate the Prisma Client, run the following command:

npx prisma generate

## Supabase

Supabase is used to create the database and manage the data. The database is created in the Supabase dashboard. The database URL is then used to connect to the database in the Prisma schema.

## Authentication with Clerk

Clerk is used to handle authentication. Clerk is a complete user authentication system that provides a complete user authentication system that includes user sign up, sign in, and user management. Clerk is used to handle the user authentication and user management.

## Environment Variables

The environment variables are used to store sensitive information such as the database URL and the Clerk API key. The environment variables are stored in a `.env.local` file. The `.env.local` file is used to store the environment variables that are specific to the local development environment. The `.env.local` file is not committed to the repository.

First, run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# lazyconsultants
# lazyconsultants
# lazyconsultants
