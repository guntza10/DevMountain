import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const devMoutainLogo = "/images/dev-mountain-logo.png";
const devMoutainLabel = "/images/dev-mountain-label.png";

function Header() {
  const router = useRouter();
  console.log("router", router);
  console.log("router.asPath", router.asPath);

  return (
    <header className="flex items-center justify-between px-28 py-8">
      <ul className="flex items-center gap-5">
        <li><img className="max-w-full h-auto" src={devMoutainLogo} /></li>
        <li><div className="w-px h-9 border border-solid border-grey"></div></li>
        <li><img className="max-w-full h-auto" src={devMoutainLabel} /></li>
      </ul>
      <ul className="flex items-center gap-10">
        <li>
          <Link href={"/"}>
            <a className={`link-menu ${router.asPath === "/" ? "active" : ""}`}>
              HOME <br />
              หน้าหลัก
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/event"}>
            <a className={`link-menu ${router.asPath === "/event" ? "active" : ""}`}>
              EVENT
              <br />
              อีเว้นท์
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/article"}>
            <a className={`link-menu ${router.asPath === "/article" ? "active" : ""}`}>
              ARTICLE
              <br />
              บทความ
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/video"}>
            <a className={`link-menu ${router.asPath === "/video" ? "active" : ""}`}>
              VIDEO
              <br />
              วิดีโอ
            </a>
          </Link>
        </li>
        <li>
          <Link href={"membership"}>
            <a
              className={`link-menu ${router.asPath === "/membership" ? "active" : ""
                }`}
            >
              MEMBERSHIP
              <br />
              สมาชิก
            </a>
          </Link>
        </li>
      </ul>
      <div class="flex items-center">
        <div class="input-group relative flex flex-wrap items-stretch w-ful rounded">
          <input type="search" class="form-control relative flex-auto min-w-0 block w-12 p-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-sky rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
          <span class="input-group-text flex items-center px-3 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
