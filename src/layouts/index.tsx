import { SideBar } from "../components/sideBar"

export const MainLayout = () => {
  return (
    <div className="max-w-[1440px] w-full m-auto flex gap-5 pt-7">
      <SideBar />
    </div>
  )
}