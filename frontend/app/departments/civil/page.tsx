import DepartmentPage from "../DepartmentPage";
import { departments } from "../data";

export default function CivilPage() {
  return (
    <DepartmentPage
      department={departments.civil}
    />
  );
}