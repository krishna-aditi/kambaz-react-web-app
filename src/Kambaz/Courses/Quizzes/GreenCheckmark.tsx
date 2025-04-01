import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
export default function GreenCheckmark() {
  return (
    <span className="me-1 position-relative float-end d-flex align-items-center ms-2 mt-1">
        <FaCheckCircle style={{ top: "2px"}} 
            className="text-success me-1 position-absolute fs-5" />
        <FaCircle className="text-white me-1 fs-6" />
        <IoEllipsisVertical className="fs-4" />
    </span>
    );
}