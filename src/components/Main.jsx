import React from "react";
import MainContent from "./Main/MainContent";
import Sidebar from "./Main/Sidebar";

function Main() {
  return (
    <main className="w-[100%] h-[100vh] pt-2 pb-2 flex items-center">
      <Sidebar />
      <MainContent />
    </main>
  );
}

export default Main;
