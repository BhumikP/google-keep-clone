import { Navigate, Route, Routes } from "react-router-dom";
import Notes from "../pages/Notes";
import NoMatch from "../pages/NoMatch";
import LayoutComponent from "@/components/layout";
import Reminder from "@/pages/Reminder";
import Archive from "@/pages/Archive";
import Trash from "@/pages/Trasht";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutComponent />}>
        <Route index element={<Navigate to="/notes" replace />} />
        <Route path="notes" element={<Notes />} />
        <Route path="reminders" element={<Reminder />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="*" element={<Navigate to="/notes" />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default AppRoutes;