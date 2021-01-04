import fs from "fs";
import remark from "remark";
import html from "remark-html";

export default function Post({ contents }) {
  return <div dangerouslySetInnerHTML={{ __html: contents }} />;
}

export async function getStaticProps() {
  const content = await remark()
    .use(html)
    .process(fs.readFileSync("source/example.md"));
  return { props: { ...content } };
}
