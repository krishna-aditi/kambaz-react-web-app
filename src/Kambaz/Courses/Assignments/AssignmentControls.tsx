import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function AssignmentControls() {
  return (
    <div className="float-end d-flex align-items-center ms-2">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}