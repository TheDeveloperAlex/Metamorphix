import { notFound } from "next/navigation";
import posts from "../../../../posts";
import { splitTitle } from "./(helpers)/splitTitle";
import Image from "next/legacy/image";
import path from "path";
import fs from "fs";
import parser from "html-react-parser";
import { Remarkable } from "remarkable";
import styles from "./page.module.css";

interface PageProps {
  params: {
    slug: string;
  };
}

const md = new Remarkable();

export default async function ProjectsNews({ params: { slug } }: PageProps) {
  let post = posts.find((elem) => elem.slug === slug);

  if (!post) return notFound();
  const [mainHeader, secondHeader] = splitTitle(post.title);

  const filePath = path.join(process.cwd(), "src", "posts", post.file);
  const policy = fs.readFileSync(filePath, "utf8");
  const raw = md.render(policy);

  return (
    <div className="flex flex-col mt-[76px] px-4">
      <h1
        className="text-[30px] md:text-[40px] text-center leading-[40px] text-white relative"
        style={{ fontFamily: "TacticSans-Bld, sans-serif" }}
      >
        <span className="absolute w-[80%] md:w-[554px] h-[66px] bg-red-header left-1/2 -translate-x-1/2 bottom-0 -z-10 blur-[100px]" />
        {mainHeader}
        <br />
        <span className="sm:text-[36px] md:text-[48px] text-red-header">
          {secondHeader}
        </span>
      </h1>
      <div className={styles.postGrid}>
        <div className={styles.image}>
          <img src={post.image}/>
        </div>
        <div className={styles.post}>
          <div className={styles.content}>{parser(raw)}</div>
          <span className={"text-red-header " + styles.gTop}>Г</span>
          <span className={"text-red-header " + styles.gBottom}>Г</span>
        </div>
      </div>
    </div>
  );
}
