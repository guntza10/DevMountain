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
    <nav
      className="
      relative
      flex flex-wrap items-center
      w-full
      py-4
      bg-gray-100
      text-gray-500
      hover:text-gray-700
      focus:text-gray-700
      shadow-lg
      navbar navbar-expand-lg navbar-light"
    >
      <div class="container-fluid w-full flex flex-wrap items-center lg:justify-between md:justify-center sm:justify-center lg:px-64 md:px-30 sm:px-20">
        <div className="flex items-center">
          <img className="max-w-full h-auto mr-4" src={devMoutainLogo} />
          <div className="w-px h-9 border-2 border-solid border-gray-300 mr-4"></div>
          <img className="max-w-full h-auto" src={devMoutainLabel} />
        </div>

        <div className="navbar-nav flex">
          <div className="nav-item pr-7 text-center">
            <Link href={"/"}>
              <a className={`${router.asPath === "/" ? "active" : ""}`}>
                HOME <br />
                หน้าหลัก
              </a>
            </Link>
          </div>
          <div className="nav-item pr-7 text-center">
            <Link href={"/event"}>
              <a className={`${router.asPath === "/event" ? "active" : ""}`}>
                EVENT
                <br />
                อีเว้นท์
              </a>
            </Link>
          </div>
          <div className="nav-item pr-7 text-center">
            <Link href={"/article"}>
              <a className={`${router.asPath === "/article" ? "active" : ""}`}>
                ARTICLE
                <br />
                บทความ
              </a>
            </Link>
          </div>
          <div className="nav-item pr-7 text-center">
            <Link href={"/video"}>
              <a className={`${router.asPath === "/video" ? "active" : ""}`}>
                VIDEO
                <br />
                วิดีโอ
              </a>
            </Link>
          </div>
          <div className="nav-item text-center">
            <Link href={"membership"}>
              <a
                className={` ${
                  router.asPath === "/membership" ? "active" : ""
                }`}
              >
                MEMBERSHIP
                <br />
                สมาชิก
              </a>
            </Link>
          </div>
        </div>

        <div class="input-group relative flex items-center">
          <input
            type="search"
            class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <span
            class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
            id="basic-addon2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              class="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
