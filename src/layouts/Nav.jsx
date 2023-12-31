import { useState, useEffect, createElement } from "react";
import { useNavigate } from "react-router-dom";
import { fetchResults } from "../api/search";
import { useSelector } from "react-redux";
import WineDetail from "../components/WineDetail";

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
  Dialog,
  DialogHeader,
  DialogBody,
  Badge,
} from "@material-tailwind/react";

import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
  Bars2Icon,
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

//search bar
export function DialogDefault({ open, toggleDialog }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      const getResults = async () => {
        try {
          const data = await fetchResults(query);
          setResults(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      };
      getResults();
    } else {
      setResults([]);
    }
  }, [query]);

  const handleClose = () => {
    setResults([]);
    toggleDialog();
  };
  return (
    <Dialog className="" open={open} size={"xxl"} handler={toggleDialog}>
      <DialogHeader className=" px-5 py-5 flex justify-between ">
        <input
          name="query"
          className={`w-full rounded bg-white h-12  pr-12 placeholder-zinc-700 text-wine  pl-12 outline-none`}
          placeholder="Search ..."
          autoComplete="off"
          onChange={(e) => setQuery(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 cursor-pointer text-red-500 align-middle"
          onClick={handleClose}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </DialogHeader>
      <DialogBody
        divider
        className="overflow-scroll w-full  flex flex-wrap justify-evenly gap-y-8"
      >
        {results.map((wine) => (
          <WineDetail handleClose={handleClose} wine={wine} />
        ))}
      </DialogBody>
    </Dialog>
  );
}

//dropdown menu
function AccountMenu({ user, handleLogOut }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen}>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-1 rounded-full"
          style={{ color: "rgb(159, 0, 63)" }}
        >
          {createElement(UserCircleIcon, {
            className: "h-7 w-7",
            style: { color: user ? "green" : "rgb(159, 0, 63)" },
          })}

          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-4 w-4 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
            style={{ color: user ? "green" : "rgb(159, 0, 63)" }}
          />
        </Button>
      </MenuHandler>

      <MenuList className="p-1">
        <Typography as="a" href="/account-info">
          <MenuItem
            onClick={closeMenu}
            className={"flex items-center gap-2 rounded"}
            style={{ color: "rgb(159, 0, 63)" }}
          >
            {createElement(UserCircleIcon, {
              className: "h-4 w-4",
              strokeWidth: 2,
            })}
            My Account
          </MenuItem>
        </Typography>

        <Typography as="a" href="/development">
          <MenuItem
            onClick={closeMenu}
            className={"flex items-center gap-2 rounded"}
            style={{ color: "rgb(159, 0, 63)" }}
          >
            {createElement(Cog6ToothIcon, {
              className: "h-4 w-4",
              strokeWidth: 2,
            })}
            Edit Account
          </MenuItem>
        </Typography>

        <Typography
          as="a"
          onClick={user ? handleLogOut : undefined}
          href={user ? undefined : "/sign-in"}
        >
          <MenuItem
            onClick={closeMenu}
            className={"flex items-center gap-2 rounded"}
            style={{ color: "rgb(159, 0, 63)" }}
          >
            {createElement(PowerIcon, {
              className: "h-4 w-4",
              strokeWidth: 2,
            })}
            {user ? "Sign Out" : "Sign In"}
          </MenuItem>
        </Typography>
      </MenuList>
    </Menu>
  );
}

// Creates favorites and shopping cart icons
function NavList({ user, handleLogOut }) {
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  return (
    <div className="flex items-center justify-between">
      <Typography
        as="a"
        href="/favorites"
        variant="small"
        className="font-normal"
      >
        <MenuItem
          className="flex items-center gap-2 rounded-full"
          style={{ color: "rgb(159, 0, 63)" }}
        >
          {createElement(HeartIcon, { className: "h-7 w-7" })}
        </MenuItem>
      </Typography>

      <Typography
        as="a"
        href="/shopping-cart"
        variant="small"
        className="font-normal"
      >
        {cartQuantity > 0 ? (
          <MenuItem
            className="flex items-center gap-2 rounded-full"
            style={{ color: "rgb(159, 0, 63)" }}
          >
            <Badge
              placement="top-end"
              content={cartQuantity}
              className="min-w-[18px] min-h-[18px] p-0 m-0 text-xxs text-white"
            >
              {createElement(ShoppingCartIcon, {
                className: "h-7 w-7",
              })}
            </Badge>
          </MenuItem>
        ) : (
          <MenuItem
            className="flex items-center gap-2 rounded-full"
            style={{ color: "rgb(159, 0, 63)" }}
          >
            {createElement(ShoppingCartIcon, {
              className: "h-7 w-7",
            })}
          </MenuItem>
        )}
      </Typography>
      <AccountMenu user={user} handleLogOut={handleLogOut} />
    </div>
  );
}

//real below
export default function Nav({ user, handleLogOut }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  //search
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialog = () => setDialogOpen((prev) => !prev);

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  // When productType button is clicked, it will navigate to the url, with above useEffect re-rendering page
  const handleProductTypeFilter = async (e) => {
    if (e.target.id === "red") {
      navigate("/filter/red");
    } else if (e.target.id === "white") {
      navigate("/filter/white");
    } else if (e.target.id === "rose") {
      navigate("/filter/rose");
    } else if (e.target.id === "all") {
      navigate("/filter/all");
    }
  };

  return (
    <div className="bg-white">
      <div className="bg-black text-white font-bold text-center text-lg align-middle h-10 w-full left-0 z-50 flex items-center justify-center">
        <h1>
          FREE Shipping on orders of <span className="text-red-500">$100</span>{" "}
          or more
        </h1>
      </div>
      <Navbar className="max-w-full rounded-none py-0 ">
        {/* ==================== */}
        <div className="flex items-center bg-white">
          {/* Search Icon */}
          <Typography
            onClick={() => toggleDialog()}
            className="flex items-center justify-start flex-1"
            style={{ color: "rgb(159, 0, 63)" }}
          >
            {createElement(MagnifyingGlassIcon, {
              className: "h-7 w-7",
              strokeWidth: 2,
            })}
          </Typography>

          {/* Le Vino Logo */}
          <img
            onClick={() => navigate("/")}
            className="flex items-center justify-center grow cursor-pointer h-32 flex-1"
            src="https://res.cloudinary.com/dzjr3skhe/image/upload/v1696266588/610740ed726dc75a8e9e3126_1_iliqrj.svg"
            style={{ fontFamily: "Wine Date" }}
          />

          {/* Conditional Rendering for Nav Icons */}
          <div className="flex flex-1 items-center justify-end lg:hidden">
            <IconButton
              size="sm"
              variant="text"
              onClick={toggleIsNavOpen}
              className="my-auto leading-relaxed"
              style={{ color: "rgb(159, 0, 63)" }}
            >
              <div className="w-1/3 leading-relaxed">
                <Bars2Icon className="h-7 w-7 " />
              </div>
            </IconButton>
          </div>

          <div className="hidden lg:flex items-center justify-end sm:w-1/3 sm:justify-end flex-1">
            <NavList user={user} handleLogOut={handleLogOut} />
          </div>
        </div>
        {/* ==================== */}
        <Collapse open={isNavOpen} className="overflow-scroll w-1/3 ">
          <NavList user={user} handleLogOut={handleLogOut} />
        </Collapse>
        <DialogDefault open={dialogOpen} toggleDialog={toggleDialog} />
      </Navbar>
      <div
        className="flex justify-center border-b border-t"
        style={{ borderColor: "rgb(159, 0, 63)" }}
      >
        <Button
          id="all"
          variant="text"
          onClick={handleProductTypeFilter}
          style={{
            color: "rgb(159, 0, 63)",
            fontFamily: "'HelpUsGiambattista', sans-serif",
          }}
        >
          All Wines
        </Button>

        <Button
          id="red"
          variant="text"
          onClick={handleProductTypeFilter}
          style={{
            color: "rgb(159, 0, 63)",
            fontFamily: "'HelpUsGiambattista', sans-serif",
          }}
        >
          Red Wines
        </Button>

        <Button
          id="white"
          variant="text"
          onClick={handleProductTypeFilter}
          style={{
            color: "rgb(159, 0, 63)",
            fontFamily: "'HelpUsGiambattista', sans-serif",
          }}
        >
          White Wines
        </Button>

        <Button
          id="rose"
          variant="text"
          onClick={handleProductTypeFilter}
          style={{
            color: "rgb(159, 0, 63)",
            fontFamily: "'HelpUsGiambattista', sans-serif",
          }}
        >
          Rosé Wines
        </Button>
      </div>
    </div>
  );
}
