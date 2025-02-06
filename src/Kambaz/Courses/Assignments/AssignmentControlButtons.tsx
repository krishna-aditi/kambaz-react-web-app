import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from 'react-icons/bs';
import { Button } from "react-bootstrap";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
        {/* <div className="border-gray" style={{ borderRadius: '50px', border: '1px solid black', padding: '1px' }}>
        40% of Total
      </div> */}
      <BsPlus className="me-1 fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}