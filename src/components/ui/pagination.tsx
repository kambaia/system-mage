import RCPagination, { PaginationProps } from "rc-pagination";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md"
import "rc-pagination/assets/index.css";

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <RCPagination
      nextIcon={<MdOutlineNavigateNext size={30} color="#287bff" />}
      prevIcon={<MdOutlineNavigateBefore size={30} color="#287bff" />}
      {...props}
    />
  );
};

export default Pagination;
