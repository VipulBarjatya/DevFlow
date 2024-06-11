import React from "react";
import { UserButton } from "@clerk/nextjs";
// import { useTheme } from "@/context/ThemeProvider";

const Home = () => {
  // const { theme } = useTheme("light");
  return (
    <div>
      {/* {theme} */}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
