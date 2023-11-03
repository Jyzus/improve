import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NavbarNextUI,
} from "@nextui-org/react";
import React from "react";
import { useAuthStore } from "../../../store/auth";
import { LogginModal } from "../../auth/LogginModal";
import { LoggoutModal } from "../../auth/LoggoutModal";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { status, username, avatar } = useAuthStore((state) => state);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
      <NavbarNextUI
        onMenuOpenChange={setIsMenuOpen}
        className="bg-cyan-/-aqua-900 text-white"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <img
              src="https://avatars.githubusercontent.com/u/86389661?v=4"
              className="w-12 h-12 rounded-full"
            />
            <p className="ml-2 font-bold text-inherit">IMPROVE</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" to="/">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/games">Juegos</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/">Integrations</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {status == "not logged" && (
            <NavbarItem className="hidden lg:flex">
              <LogginModal />
            </NavbarItem>
          )}
          {status == "anonymous" && (
            <>
              <NavbarItem className="hidden lg:flex">
                <div className="flex-center-center gap-2">
                  <img
                    src="/icons/anonimus.apng"
                    alt="anonimus"
                    className="w-6 h-6 rounded-full"
                  />
                  <p className="font-semibold">{username}</p>
                </div>
              </NavbarItem>
              <NavbarItem className="hidden lg:flex">
                <LoggoutModal />
              </NavbarItem>
            </>
          )}
          {status == "logged" && (
            <>
              <NavbarItem className="hidden lg:flex">
                <div className="flex-center-center gap-4">
                  <img
                    src={`${avatar ? avatar : "userNull"}`}
                    alt=""
                    className="w-6 h-6 rounded-full"
                  />
                  <p className="font-semibold">{username}</p>
                </div>
              </NavbarItem>
              <NavbarItem className="hidden lg:flex">
                <LoggoutModal />
              </NavbarItem>
            </>
          )}
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                to="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarNextUI>
      <Outlet />
    </>
  );
}
