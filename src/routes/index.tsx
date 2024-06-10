import { Route, Routes } from "react-router-dom";
import Notes from "../pages/Notes";
import NoMatch from "../pages/NoMatch";
import LayoutComponent from "@/components/layout";
import Reminder from "@/pages/Reminder";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutComponent />}>
        <Route path="notes" element={<Notes />} />
        <Route path="reminders" element={<Reminder />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default AppRoutes;