import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import Title from "../components/title";
const components = {
  Title,
};
export default function Post({ source }) {
  const content = hydrate(source, { components });
  return <div className="wrapper">{content}</div>;
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = "Some **mdx** text, with component <Title value='example'/>";
  const mdxSource = await renderToString(source, { components });
  return { props: { source: mdxSource } };
}
