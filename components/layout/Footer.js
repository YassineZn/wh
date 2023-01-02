import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();
  return (
    <footer class="body-font bg-secondary-400 text-white">
      <div class="my-container  mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div class="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <Link href="#" class="title-font flex items-center justify-center font-medium text-white md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Wh International</span>
          </Link>
          <p class="mt-2 text-sm text-white">Air plant banjo lyft occupy retro adaptogen indego</p>
        </div>
        <div class="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
          <div class="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 class="title-font mb-3 text-sm font-medium tracking-widest text-white">CATEGORIES</h2>
            <nav class="mb-10 list-none">
              <li>
                <Link href="#" class="text-white hover:opacity-80">
                  First Link
                </Link>
              </li>
              <li>
                <Link href="#" class="text-white hover:opacity-80">
                  Second Link
                </Link>
              </li>
              <li>
                <Link href="#" class="text-white hover:opacity-80">
                  Third Link
                </Link>
              </li>
              <li>
                <Link href="#" class="text-white hover:opacity-80">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 class="title-font mb-3 text-sm font-medium tracking-widest text-white">CATEGORIES</h2>
            <nav class="mb-10 list-none">
              <li>
                <Link href="#" class="text-white hover:opacity-80">
                  First Link
                </Link>
              </li>
              <li>
                <Link href="#" class="text-white hover:opacity-80">
                  Second Link
                </Link>
              </li>
              <li>
                <Link href="#" class="text-white hover:opacity-80">
                  Third Link
                </Link>
              </li>
              <li>
                <Link href="#" class="text-white hover:opacity-80">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 class="title-font mb-3 text-sm font-medium tracking-widest text-white">CATEGORIES</h2>
            <nav class="mb-10 list-none">
              <li>
                <Link href="#" class="text-white hover:text-gray-800">
                  First Link
                </Link>
              </li>
              <li>
                <Link href="#" class="text-white hover:text-gray-800">
                  Second Link
                </Link>
              </li>
              <li>
                <Link href="#" class="text-white hover:text-gray-800">
                  Third Link
                </Link>
              </li>
              <li>
                <Link href="#" class="text-white hover:text-gray-800">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 class="title-font mb-3 text-sm font-medium tracking-widest text-white">CATEGORIES</h2>
            <nav class="mb-10 list-none">
              <li>
                <Link href="#" class="text-white hover:text-gray-800">
                  First Link
                </Link>
              </li>
              <li>
                <Link href="#" class="text-white hover:text-gray-800">
                  Second Link
                </Link>
              </li>
              <li>
                <Link href="#" class="text-white hover:text-gray-800">
                  Third Link
                </Link>
              </li>
              <li>
                <Link href="#" class="text-white hover:text-gray-800">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="my-container bg-secondary-400">
        <div class=" mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
          <p class="text-center text-sm text-white sm:text-left">
            © {new Date().getFullYear()} WH Internation —
            <Link href="#" rel="noopener noreferrer" class="ml-1 text-white" target="_blank">
              @wh
            </Link>
          </p>
          <span class="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <Link href="#" class="text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link href="#" class="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link href="#" class="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link href="#" class="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
