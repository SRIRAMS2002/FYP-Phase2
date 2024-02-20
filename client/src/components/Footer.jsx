import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className=" flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-services">
    <div class="w-full mx-auto mt-10 py-5 max-w-7xl justify-around text-sm pt-6  flex flex-wrap gap-y-6 gap-4 items-center md:justify-between dark:border-white/10">
      <div class="order-2 sm:order-1 flex items-center gap-3 text-white/50">
        <svg
          className="h-8 w-8"
          id="logo-86"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="ccustom"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
            fill="#007DFC"
          ></path>
          <path
            class="ccustom"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z"
            fill="#007DFC"
          ></path>
        </svg>
        <p className="text-xl text-white ml-2.5 font-bold">Krypto</p>
      </div>
      <div class="order-first sm:order-2 flex flex-wrap justify-center gap-y-2 gap-x-4 text-gray-500">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Products
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Cart Items
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Contact us
        </p>
      </div>
      <div className="order-last -pb-4 flex gap-1 overflow-hidden font-medium text-gray-100 dark:text-white">
        Proudly made by
        <h2 className="-pt-[3px] flex items-start justify-center gap-2 text-center text-lg font-semibold text-blue-950 dark:text-white sm:gap-1">
          <div className="block">
            <div className="relative block pb-2">
              <span className="absolute inset-0 z-[1] block bg-gradient-to-b from-blue-950 via-blue-950 to-transparent bg-clip-text text-transparent dark:from-white dark:via-white">
                Batch 47
              </span>
              <span className="absolute inset-0 block bg-gradient-to-r from-purple-800 to-blue-400 bg-clip-text text-transparent">
               SRIT Batch 47
              </span>
              <span className="block">SRIT Batch 47</span>
            </div>
            <div className="-mt-5 grow overflow-hidden">
              <svg
                aria-hidden="true"
                className="w-24"
                height="22"
                viewBox="0 0 283 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332"
                  stroke="url(#paint0_linear_pl)"
                  strokeWidth="4"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_pl"
                    x1="282"
                    y1="5.49999"
                    x2="40"
                    y2="13"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#a855f7"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </h2>
      </div>
    </div>
  </div>
);

export default Footer;
