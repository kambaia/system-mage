
import { TopBar } from "./../components/Topbar";
import { SideBar } from "./../components/SideBar";
import { useContext, useState } from "react";
import { AuthContext } from "@contexts/AuthContext";
import { MainContent } from "src/styles/genelStyle";
import { Footer } from "@components/Footer/Footer";
const Layout: React.FC = ({ children }) => {
  const { menu } = useContext(AuthContext);


  return (
    <div className="min-h-screen bg-slate-900 flex flex-col transition-colors duration-150">
      <TopBar />
      <div className="flex flex-1 ">
        <SideBar />

        <MainContent menu={menu} className={menu ? `w-full pt-10 mt-4` : `w-full pt-10 mt-4`}>
          <div className="p-5 mt-4 md:p-8 overflow-y-auto h-full">{children}</div>
        </MainContent>
        <Footer/>
      </div>
      {/* render modal */}
    
    </div>
  );
};
export default Layout;
