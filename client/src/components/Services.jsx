import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className=" w-full justify-center items-center ">
    {/* languages */}
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src="https://imgs.search.brave.com/YVCdJ7d_-q_J8GwPP2VMcZ0b4_ho_Mh6eF7_J1DoyDQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kd2ds/b2dvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNy8wOS9S/ZWFjdF9sb2dvLnBu/Zw"
            alt="React"
            width={158}
            height={48}
          />

          <img
            className="col-span-2 max-h-24   w-full object-contain lg:col-span-1"
            src="https://imgs.search.brave.com/nBY8w4wTAau1dNRjSHWGoM5Ykg8bklGHM5214kBMIaM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzI2/OTkvUE5HLzUxMi90/YWlsd2luZGNzc19s/b2dvX2ljb25fMTcw/NjQ5LnBuZw"
            alt="Tailwind css"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-10 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="../../images/images-removebg-preview.png"
            alt="Statamic"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="../../images/blockchain.png"
            alt="SavvyCal"
            width={158}
            height={68}
          />
          <img
            className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="../../images/solidity.png"
            alt="SavvyCal"
            width={158}
            height={68}
          />
        </div>
      </div>
    </div>
    {/* Services */}
    <div className="max-w-7xl mx-auto flex mf:flex-row flex-col items-center justify-between md:p-10 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient2 ">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>
  </div>
);

export default Services;
