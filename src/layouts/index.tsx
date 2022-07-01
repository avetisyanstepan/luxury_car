import { FC, ReactNode } from "react"
import { Header } from "../components/header"
import { SideBar } from "../components/sideBar"

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout:FC<MainLayoutProps> = ({children}) => {
  return (
    <div className="w-full min-h-screen flex gap-5 p-7">
      <SideBar />
      <div className="flex flex-col gap-5 w-full flex">
        <Header />
        <main className="w-full flex-1 h-full">
          {children}
        </main>
      </div>
    </div>
  )
}