import SidebarMenu from "@components/ui/sidebar-menu";
import { useMeQuery } from "@data/user/use-me.query";
import { ROUTES } from "@utils/routes";


const Sidebar = () => {

  return (
    <aside style={{overflowX:"scroll"}} className="shadow w-72 xl:w-76 hidden lg:block overflow-y-auto bg-white px-4 fixed left-0 bottom-0 h-full pt-20">
      <SidebarMenu  />
    </aside>
  );
};

export default Sidebar;
