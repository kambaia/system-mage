import { FaDoorClosed } from "react-icons/fa";

type DrawerWrapperProps = {
  children: any;
  onClose: () => void;
};

const DrawerWrapper: React.FunctionComponent<DrawerWrapperProps> = ({
  children,
  onClose,
}) => {
  return (
    <div className="flex flex-col h-full relative">
      <div className="flex items-center justify-between px-5 md:py-5 md:px-8 mb-4 md:mb-6 border-b border-gray-200 border-opacity-75 absolute top-0 left-0 w-full h-16 z-30">
        <button
          onClick={onClose}
          className="w-7 h-7 flex items-center justify-center rounded-full text-gray-500 bg-gray-200 transition-all duration-200 focus:outline-none hover:bg-primary focus:bg-primary hover:text-white focus:text-white"
        >
          <FaDoorClosed className="w-2.5 h-2.5" />
        </button>
      </div>
      {/* End of header part */}
      <div className="pt-16 h-full">
      
      </div>
      {/* End of menu part */}
    </div>
  );
};

export default DrawerWrapper;
