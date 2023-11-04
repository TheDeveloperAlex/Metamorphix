import { promises } from "fs";
import Link from "next/link";

export interface TXTprops {
  filePath: string;
}

export default async function LinksPolicy({ filePath }: TXTprops) {
  const data = await promises.readFile(filePath, "utf-8");
  const paragraphs = data.split(/\n/);
  let regex = /\d+/;

  return (
    <ul className="gap-2">
      {paragraphs.map((elem, index) => {
        const found = regex.exec(elem);
        return (
          <Link
            className="hover:text-white transition-all list-item my-1"
            key={`link${index}`}
            href={found ? `#${found[0]}` : "#"}
          >
            {elem}
          </Link>
        );
      })}
    </ul>
  );
}
