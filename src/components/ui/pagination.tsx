import RCPagination, { PaginationProps } from "rc-pagination";
import { MdOutlineNavigateNext } from "react-icons/md"
import "rc-pagination/assets/index.css";

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <RCPagination
      nextIcon={<MdOutlineNavigateNext />}
      prevIcon={<MdOutlineNavigateNext />}
      {...props}
    />
  );
};

export default Pagination;
