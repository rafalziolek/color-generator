import ColorConfigForm from "../ColorConfigForm";
import ColorList from "../ColorList";
import { ColorItem } from "../ColorList";
import ColorsList from "../ColorsList";
import CustomColorsList from "../CustomColorsList";
import { Input } from "../input";

export default function Sidebar() {
  return (
    <aside className="col-span-3 border-l p-6 bg-white flex flex-col gap-6">
      <ColorsList />
      <CustomColorsList />
      <hr className="border-gray-200 " />
      <ColorConfigForm />
    </aside>
  );
}
