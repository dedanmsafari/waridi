import React from "react";

import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
}
