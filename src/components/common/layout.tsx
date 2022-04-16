
import Navbar from "./navbar";
import Sidebar from "./sidebar";
const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
      <Navbar />
      <div className="flex flex-1 pt-10 mt-4">
        <Sidebar />
        <main className="w-full lg:pl-72 xl:pl-76">
          <div className="p-5 md:p-8 overflow-y-auto h-full">{children}</div>
        </main>
      </div>
      {/* render modal */}
      
    </div>
  );
};
export default Layout;
