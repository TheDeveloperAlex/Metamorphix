"use client";

import { Fragment } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import Link from "next/link";

import { languages } from "./Language.constants";

import style from "./Language.module.css";

const getQueryParams = (query: any) => {
  let params: any = {};
  query.forEach((value: string, key: string) => {
    if (params[key] !== undefined) {
      if (!Array.isArray(params[key])) {
        params[key] = [params[key]];
      }
      params[key].push(value);
    } else {
      params[key] = value;
    }
  });
  return params;
};

export default function Language() {
  const pathname = usePathname();
  const query = useSearchParams();
  const queryParams = getQueryParams(query);

  const currentLang = "ru";

  return (
    <div className={style.wrapper}>
      {languages.map(({ label, disabled }, i, array) => {
        const linkDisabledClass = disabled ? style.disabledLink : "";
        const linkActiveClass = currentLang === label ? style.activeLink : "";
        const linkDefaultClass =
          currentLang === label || disabled ? "" : style.linkDefault;
        const linkClassName = `${style.link} ${linkDefaultClass} ${linkDisabledClass} ${linkActiveClass}`;

        if (i === array.length - 1) {
          return (
            <span className={linkClassName} key={label}>
              <Link href={{ pathname, query: queryParams }} locale={label}>
                {label}
              </Link>
            </span>
          );
        }

        return (
          <Fragment key={label}>
            <span className={linkClassName}>
              <Link href={{ pathname, query: queryParams }} locale={label}>
                {label}
              </Link>
            </span>
            <div className={style.delimiter}></div>
          </Fragment>
        );
      })}
    </div>
  );
}
