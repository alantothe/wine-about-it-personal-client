import { useState, useEffect, createElement } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
  Bars2Icon,
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon, // For navigating to browse page later on
} from "@heroicons/react/24/outline";

function AccountMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const AccountMenuItems = [
    {
      label: "My Account",
      icon: UserCircleIcon,
    },
    {
      label: "Edit Account",
      icon: Cog6ToothIcon,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
    },
  ];

  // Creates menu when clicking on account icon
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          {createElement(UserCircleIcon, { className: "h-[24px] w-[24px]" })}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {AccountMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === AccountMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              // { key  === "My Account" ? "href=/account-info" : ""}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// Creates favorites and shopping cart icons
function NavList() {
  return (
    <div className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Typography
        as="a"
        href="/favorites"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <MenuItem className="flex items-center gap-2 lg:rounded-full">
          {createElement(HeartIcon, { className: "h-[24px] w-[24px]" })}
        </MenuItem>
      </Typography>

      <Typography
        as="a"
        href="/shopping-cart"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <MenuItem className="flex items-center gap-2 lg:rounded-full">
          {createElement(ShoppingCartIcon, {
            className: "h-[24px] w-[24px]",
          })}
        </MenuItem>
      </Typography>
    </div>
  );
}

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar>
      {/* ==================== */}
      <div className="relative mx-auto flex text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Wine About It
        </Typography>

        {/* Favorites and shopping cart icons */}
        <div className="absolute top-2/4 right-3 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>

        {/* Responsive menu change (NavList > Bars2Icon) when Collapse is open (determined by useEffect above) */}
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <AccountMenu />
      </div>
      {/* ==================== */}

      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
