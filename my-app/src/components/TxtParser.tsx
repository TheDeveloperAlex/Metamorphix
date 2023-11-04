import { TXTprops } from "./LinkParser";
import { promises } from "fs";

const numberRegex = /\d+\.\s/;

export default async function TxtParser({}: TXTprops) {
  const data = await promises.readFile("./public/privacy/privacy.txt", "utf-8");
  const paragraphs = data.split(/\n/);
  let elemsToSkip: number[] = [];

  return (
    <>
      {paragraphs.map((elem, index, array) => {
        if (elemsToSkip.includes(index)) return null;
        if (numberRegex.test(elem)) {
          const found = numberRegex.exec(elem);
          const number = /\d+/.exec(found![0]);
          return (
            <h4 className="font-medium" key={index} id={String(number)}>
              {elem}
            </h4>
          );
        }
        if (elem.includes("▪️")) {
          const sliced = array.slice(index);
          const lastIndex = sliced.findIndex(
            (listElem) => !listElem.includes("▪️")
          );
          return (
            <ul key={`list${index}`} className="ml-6">
              {sliced.slice(0, lastIndex).map((liElem, liIndex) => {
                elemsToSkip.push(index + liIndex);
                return <li key={liIndex + index}>{liElem}</li>;
              })}
            </ul>
          );
        }

        return <p key={index}>{elem}</p>;
      })}
    </>
  );
}
