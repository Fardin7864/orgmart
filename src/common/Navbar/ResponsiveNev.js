"use client"
import Category from "@/components/Category/category";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";

const ResponsiveNev = () => {
    const [isShow, setIsshow] = useState(true)

  return (
    <>
    <div className=" bg-white border-b">
    <div className="max-w-6xl mx-auto flex justify-between items-center lg:px-0 px-5">
      <div className=" flex items-center gap-14 py-3">
        <div>
        <button onClick={()=> setIsshow(!isShow)} className=" flex items-center gap-2 hover:text-[#00ab55] font-medium"><CgMenuRightAlt className=" text-xl md:text-2xl" /></button>
        </div>
        <div className=" lg:flex gap-14 hidden">
            <button className=" flex items-center gap-2 hover:text-[#00ab55] font-medium">Home <FaAngleDown className=" text-xs"/></button>
            <button className=" flex items-center gap-2 hover:text-[#00ab55] font-medium">Shop <FaAngleDown className=" text-xs"/></button>
            <button className=" flex items-center gap-2 hover:text-[#00ab55] font-medium">Pages <FaAngleDown className=" text-xs"/></button>
            <button className=" flex items-center gap-2 hover:text-[#00ab55] font-medium">Vegetables <FaAngleDown className=" text-xs"/></button>
            <button className=" flex items-center gap-2 hover:text-[#00ab55] font-medium">Blog <FaAngleDown className=" text-xs"/></button>
            <button className=" flex items-center gap-2 hover:text-[#00ab55] font-medium">Flash Sales</button>
        </div>
      </div>
      <div>
        <button className=" flex items-center gap-2 hover:text-[#00ab55] font-base  ">Recent Viewed Products <FaAngleDown className=" text-xs"/></button>
      </div>
    </div>
    </div>
    {isShow ? <div className=" max-w-6xl mx-auto">
        <Category/>
    </div> : ""}
    
    </>
  );
};

export default ResponsiveNev;
