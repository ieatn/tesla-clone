import React from "react";

// learned to format document using prettier very cool
const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-sm font-bold px-12 p-4">
      <div>
        {/* copy image address using css peeper of logo */}
        <img
          className="h-3"
          src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
          alt="Tesla Logo"
        />
      </div>
      <div className="hidden lg:flex">
        <ul className="flex items-center justify-center space-x-6 cursor-pointer">
          <li className="hover-rounded hover:bg-black/5">Model S</li>
          <li className="hover-rounded hover:bg-black/5">Model 3</li>
          <li className="hover-rounded hover:bg-black/5">Model X</li>
          <li className="hover-rounded hover:bg-black/5">Model Y</li>
          <li className="hover-rounded hover:bg-black/5">Solar Roof</li>
          <li className="hover-rounded hover:bg-black/5">Solar Panels</li>
        </ul>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex items-center justify-center space-x-6 cursor-pointer">
          <li className="hover-rounded hover:bg-black/5">Shop</li>
          <li className="hover-rounded hover:bg-black/5">Account</li>
          <li className="hover-rounded hover:bg-black/5">Menu</li>
        </ul>
      </div>

      {/* mobile menu button */}
      <div className="lg:hidden">
        <button className="inline-flex justify-center items-center rounded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10">Menu</button>
      </div>
    </div>
  );
};

export default Navbar;
