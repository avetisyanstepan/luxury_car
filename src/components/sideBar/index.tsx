import Image from "next/image";
import { FC, useState } from "react";
import { CategoryIcon, ChevronLeftIcon, ChevronRightIcon, GreyCarIcon, ImageIcon, StarGreyIcon, YellowCarIcon, YellowCategoryIcon } from "../../envaironment";

interface ISideBarProps {
  children?: any;
}

export const SideBar: FC<ISideBarProps> = ({children}) => {
  const [active, setActive] = useState<any>(["car"]);
  const [openSide, setOpenSide] = useState<any>(false)
  const handleActive = (e:string) => {
      setActive(e)
  }
  return (
    <div className={`flex flex-col gap-5 bg-base_grey_100 ${openSide ? "w-[249px]" : "w-[79px]"} rounded-xl items-center`}>
      <div className={`border-b border-base_grey_80 ${openSide ? "py-4" : "py-7"} flex justify-center relative w-full`}>
        {
          openSide 
          ?
            <Image 
              src={'/../public/images/logo2.png'}
              width={177}
              height={47}
            />
          :
            <Image 
              src={'/../public/images/logo1.png'}
              width={62}
              height={23}
            />
        }
        <button
          className="flex items-center justify-center h-5 w-5 rounded-full bg-base_grey_80 absolute -bottom-2.5 -right-2.5"
          onClick={() => setOpenSide(!openSide)}
        >
          {openSide ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
        </button>
      </div>
      <div className="flex flex-col gap-2.5 mt-5 items-center jusitfy-center w-full">
        <button 
          className={`${active.includes("category") ? "bg-base_grey_80 text-white" : "text-lightGrey"} py-3 text-sm  w-full flex pl-7`}
          onClick={ () => handleActive("category")}
        >
          {active.includes("category") ? <YellowCategoryIcon /> : <CategoryIcon />}
          {openSide && <p className="pl-4">Dashboard</p>}
        </button>
        <button 
          className={`${active.includes("star") ? "bg-base_grey_80 text-white" : "text-lightGrey"} py-3 text-sm text-white font-InterRegular w-full flex pl-7`}
          onClick={ () => handleActive("star")}
        >
          <StarGreyIcon />
          {openSide && <p className="pl-4">Points</p>}
        </button>
        <button 
          className={`${active.includes("car") ? "bg-base_grey_80 text-white" : "text-lightGrey"} py-3 text-sm text-white font-InterRegular w-full flex pl-7`}
          onClick={ () => handleActive("car")}
        >
          {active.includes("car") ? <YellowCarIcon /> : <GreyCarIcon />}
          {openSide && <p className="pl-4">Luxury Rental</p>}
        </button>
        <button 
          className={`${active.includes("garage") ? "bg-base_grey_80 text-white" : "text-lightGrey"} py-3 text-sm text-white font-InterRegular w-full flex pl-7`}
          onClick={ () => handleActive("garage")}
        >
          <ImageIcon />
          {openSide && <p className="pl-4">Garage (staking)</p>}
        </button>
      </div>
    </div>
   
  )
};