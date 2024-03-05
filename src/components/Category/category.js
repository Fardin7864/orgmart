import { CiApple } from "react-icons/ci";
import { PiCarrotThin } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";
import { IoFishOutline } from "react-icons/io5";
import { TbEggs } from "react-icons/tb";
import { LuMilk } from "react-icons/lu";
import { GiFrozenArrow } from "react-icons/gi";


const Category = () => {
    return (
        <div className=" w-72 flex flex-col justify-center bg-white absolute border border-t-0 py-3">
            <ul className=" flex flex-col px-5">
                <li className=" border-b py-3 px-5 text-xs font-bold">ALL CATEGORYS</li>
                <li className=" flex items-center gap-2 border-b py-3 px-5 text-xs"><CiApple className=" text-lg"/> Fruit</li>
                <li className=" flex items-center gap-2 border-b py-3 px-5 text-xs"><PiCarrotThin className=" text-lg"/>Vegetables</li>
                <li className=" flex items-center gap-2 border-b py-3 px-5 text-xs"><TbMeat className=" text-lg"/>Meat & Poultry</li>
                <li className=" flex items-center gap-2 border-b py-3 px-5 text-xs"><IoFishOutline className=" text-lg"/>Fish & Seafood</li>
                <li className=" flex items-center gap-2 border-b py-3 px-5 text-xs"><TbEggs className=" text-lg"/>Dairy & Eggs</li>
                <li className=" flex items-center gap-2 border-b py-3 px-5 text-xs"><LuMilk className=" text-lg"/>Milk & Drinks</li>
                <li className=" flex items-center gap-2 border-b py-3 px-5 text-xs"><GiFrozenArrow className=" text-lg"/>Frozen Foods</li>
            </ul>
        </div>
    );
};

export default Category;