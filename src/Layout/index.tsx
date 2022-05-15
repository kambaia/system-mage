
import {TopBar} from "./../components/Topbar";
import {SideBar} from "./../components/SideBar";
import { useState } from "react";
const Layout: React.FC = ({ children }) => {
	const [menu, setMenu] = useState(true);
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col transition-colors duration-150">
      <TopBar />
      <div className="flex flex-1 ">
       {menu?  <SideBar />: ""}
        <main className={menu? `w-full pt-10 mt-4 lg:pl-72 xl:pl-76`: `w-full pt-10 mt-4 lg:pl-1 xl:pl-1`}>
          <div className="p-5 mt-4 md:p-8 overflow-y-auto h-full">{children}</div>
        </main>
      </div>
      {/* render modal */}
    </div>
  );
};
export default Layout;
