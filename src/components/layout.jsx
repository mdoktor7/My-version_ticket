import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = () => {
  return (
    <Suspense>
      <Outlet fallback={<div>...Loading</div>} />
    </Suspense>
  );
};

export default Layout