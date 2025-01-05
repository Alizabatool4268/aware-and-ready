"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGrids() {
  return (
    <section className="w-screen flex justify-center items-center">
      <div className="h-screen py-30 w-[550px] mt-6">
        <h1 className="text-[35px] font-bold text-center">Deadly diseases</h1>
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
       Dengue
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A deadly disease which is caused by mosquito bites.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
       Lung cancer
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A condition in which lung cells become abnormal due to some conditions
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Diabetes mellitus
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A condition in which insulin needs are not full filled in the body which causes increase in glucose.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Covid-19
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A virus which created a global pandemic causing millions of deaths.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
     "https://th.bing.com/th/id/R.dab740deac39d67f03b090e5ff4d612e?rik=RnHmDCihT8RJ6Q&riu=http%3a%2f%2fwww.drugsbanks.com%2fwp-content%2fuploads%2f2017%2f08%2fmosquito-542156_1920.jpg&ehk=cEM9zGYP4ht%2fQB65ah3snCYLvlJT3Z1tvXhWA%2fWvETY%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://th.bing.com/th/id/R.cb8db4b02ec94575dd0fdd2d47312657?rik=0JZSiKpTZMlHrg&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://th.bing.com/th/id/OIP.Lrm1VkIDRdtdIbn6Jio8dAHaE8?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://th.bing.com/th/id/OIP.-V2wfKXLldR5Qh6ytUSQrAHaEK?rs=1&pid=ImgDetMain",
  },
];
