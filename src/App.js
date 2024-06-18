import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const FormData = lazy(() => import("./pages/Home"));
const TicketPage = lazy(() => import("./pages/Ticket"));
const Layout = lazy(() => import("./components/layout"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FormData />} />
        <Route path="/:carNumber/:passengers" element={<TicketPage />} />
      </Route>
    </Routes>
  );
};
