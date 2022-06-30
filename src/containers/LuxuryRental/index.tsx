import Image from "next/image"
import { luxuryRentalData } from "../../../MOCK/luxuryCars"
import { Button } from "../../components/common/button"
import { YellowStarBig } from "../../envaironment"

export const LuxuryRental = () => {
  return (
    <div className="flex flex-col pb-8">
      <div className="border-b border-base_grey_80 w-full mb-[113px] pb-8">
        <p className="text-lg font-InterMedium text-white">Lorem ipsum</p>
        <p className=" text-base font-InterRegular text-lightGrey mt-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      </div>
      <div className="flex gap-5">
        {
          luxuryRentalData.map((car, index) => (
            <div 
              key={index}
              className="flex flex-col w-full bg-base_grey_200 rounded-xl justify-end items-center"
            >
              <div className="-mt-20">
                <Image 
                  src={car.imgUrl || "/"}
                  objectFit="contain"
                  width={car.width}
                  height={car.height}
                />
              </div>  
              <div className="flex items-center text-4xl font-InterSemiBold relative">
                <Image 
                  src={'/images/convert.png'}
                  objectFit="contain"
                  width={363}
                  height={153}
                />  
                <div className="flex gap-2.5 absolute bottom-0 top-0 mt-20 left-0 right-0 justify-center items-center">
                  <YellowStarBig />
                  <p className="text-4xl text-yellow font-InterSemiBold">
                    {car.price}
                  </p>
                  <p className="text-lg text-lightGrey font-InterSemiBold">/ Day</p>
                </div>  
              </div>  
              <div className="py-12">
                <Button
                  title="Continue"
                  className="bg-yellow text-black text-xs font-InterSemiBold px-8 py-3 shadow-lg rounded-lg shadow-darkYellow "
                />
              </div>  
            </div>  
          ))
        }
      </div>
    </div>
  )
}