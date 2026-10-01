import DepartmentPage from "../DepartmentPage";
import { departments } from "../data";

export default function ECPage() {
  return (
    <DepartmentPage
      department={departments.ec}
    />
  );
}