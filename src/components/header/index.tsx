import { NotificationIcon, SearchIcon, YellowStarSmIcon } from "../../envaironment";
import { Button } from "../common/button";

export const Header = () => {
  return (
    <div className="flex justify-between bg-base_grey_100 p-5 rounded-lg w-full ">
      <div className="items-center flex">
         <p className="text-white text-2xl font-semibold">Luxury Rental</p>
      </div>
      <div className="relative flex gap-5">
        <div className="absolute top-0 pl-3.5 pt-4">
          <SearchIcon />
        </div>
        <input 
          type="text"
          className="border border-base_grey_60  rounded-md outline-0 text-[14px] pl-10 bg-base_grey_80 text-lightGrey font-normal py-3"
          placeholder="Type to search..."
        />
        <Button 
          title={'25,000'} 
          leftIcon = {
            <div className="mr-1.5">
              <YellowStarSmIcon />
            </div>
          }
        />
        <div className="bg-base_grey_80 w-0.5 h-6 my-auto"/>
        <div className="flex items-center">
          <button>
            <NotificationIcon />
          </button>
        </div>
      </div>
    </div>
  )
}