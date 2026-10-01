import DepartmentPage from "../DepartmentPage";
import { departments } from "../data";

export default function MechanicalPage() {
  return (
    <DepartmentPage
      department={departments.mechanical}
    />
  );
}