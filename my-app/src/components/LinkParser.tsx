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
          <li key={`link${index}`}>
            <Link
              className="hover:text-white transition-all my-1"
              href={found ? `#${found[0]}` : "#"}
            >
              {elem}
            </Link>
          </li>
        );
    })}
    </ul>
    );
}
