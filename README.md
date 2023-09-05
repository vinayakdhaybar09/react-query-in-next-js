## UNDERSTANDING

- in next js app router every file or a component rendering is a server side.
- when we write "use client" in the top of the file that file or component will render on a client side.


- first created ReactQueryProvider file to wrap children inside react query provider.
- because it is client side rendering.
- then inside layout.tsx wrap whole app inside ReactQueryProvider.

- <ReactQueryProvider>{children}</ReactQueryProvider>

- then inside page.tsx created function for fetching api also exporting this function.

- inside page.tsx calling the faction and passing the userdata as a props to Hero.tsx components.

- we can't pass function as a props thats whay i am exporting it

- inside hero.tsx file userData is pass to reactquery as a initial state.

- react-query is used for caching data and it uses react hooks that why we need to write "use client" at the top.






This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
