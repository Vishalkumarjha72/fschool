import { IoIosArrowDown } from "react-icons/io";
import Live from "./Live";

const Courses = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col  w-[81%]">
        <div className="flex w-full h-16 items-center justify-between mt-4">
          <div className="text-xl font-semibold ">All Courses</div>
          <div className="flex items-center gap-2  ">
            <div className="flex items-center gap-2 text-[#525252] py-1 rounded-lg bg-gray-100 px-2">
              <span className="text-sm font-semibold"> Most Popular</span>
              <IoIosArrowDown />
            </div>
            <div className="flex items-center text-[#525252] py-1 rounded-lg bg-gray-100 px-2">
              <span className="text-sm font-semibold"> Search (Ctrl + k)</span>
            </div>
          </div>
        </div>

        <div className="flex border-b border-[#928f8f] cursor-pointer gap-6 mt-4 pb-2">
          <div className="flex gap-1 items-center ">
            <span className="">Live</span>
            <div className=" px-[6px] border-black border h-4 rounded-xl text-xs">
              18
            </div>
          </div>
          <div className="flex gap-1 items-center cursor-pointer ">
            <span className="">Upcoming</span>
            <div className="px-[7px] border border-black h-4 rounded-xl text-xs">
              0
            </div>
          </div>
        </div>

        <Live/>

      </div>
    </div>
  );
};

export default Courses;
