import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AdminLayout } from "../Layouts/AdminLayout";
import { Dashboard } from "../components/Dashboard/Dashboard";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/admin" element={<AdminLayout />} >
        <Route path="" element={<Dashboard/>}/>
      </Route>
    </Route>
  )
);
export default router;
