import Head from "next/head";
export default function Layout({ children, meta }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      {children}
    </>
  );
}
