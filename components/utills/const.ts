import {
  CiInstagram,
  CiLogout,
  CiSearch,
  CiTwitter,
  CiUser,
} from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaUser, FaBars, FaEye, FaStar, FaLinkedinIn } from "react-icons/fa6";
import {
  IoIosHeartEmpty,
  IoMdNotifications,
  IoMdSettings,
} from "react-icons/io";
import {
  MdArrowBack,
  MdArrowForward,
  MdDashboard,
  MdKeyboardArrowRight,
  MdLocalShipping,
  MdOutlineCancel,
  MdPayment,
  MdShoppingBag,
} from "react-icons/md";
import { RiFacebookLine } from "react-icons/ri";
import { LiaLocationArrowSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";

export const ICONS = {
  cart: IoCartOutline,
  user: FaUser,
  heart: IoIosHeartEmpty,
  menu: FaBars,
  arrow: MdKeyboardArrowRight,
  leftArrow: MdArrowBack,
  rightArrow: MdArrowForward,
  search: CiSearch,
  eye: FaEye,
  star: FaStar,
  facebook: RiFacebookLine,
  twitter: CiTwitter,
  instagram: CiInstagram,
  linkedIn: FaLinkedinIn,
  farrow: LiaLocationArrowSolid,
  Google: FcGoogle,
  User: CiUser,
  shopBag: FiShoppingBag,
  cancel: MdOutlineCancel,
  logout: CiLogout,
  DownArrow: BiSolidDownArrow,
  notification: IoMdNotifications,
  message: BiSolidMessage,
  powerOff: GiPowerButton,
  plus: GoPlus,
  // Dashboard icons
  dashboard: MdDashboard,
  shopongbag: MdShoppingBag,
  shipping: MdLocalShipping,
  payment: MdPayment,
  settings: IoMdSettings,
} as const;

export type IconName = keyof typeof ICONS;

export const NavigateURL = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
  {
    id: 4,
    title: "Sign Up",
    link: "/signup",
  },
];

export const slides = [
  {
    id: 1,
    title: ["Up to 10%", "off Voucher"],
    subtitle: "iPhone 14 Series",
    imag: "/Apple.png",
    image: "/iPhone.png",
  },
  {
    id: 2,
    title: ["Big Sale on Electronics"],
    subtitle: "iPhone 14 Series",
    imag: "/Apple.png",
    image: "/iPhone2.png",
  },
  {
    id: 3,
    title: ["Up to 10%", "off Voucher"],
    subtitle: "iPhone 14 Series",
    imag: "/Apple.png",
    image: "/iPhone2.png",
  },
  {
    id: 4,
    title: ["Best Selling Products"],
    subtitle: "iPhone 14 Series",
    imag: "/Apple.png",
    image: "/iPhone2.png",
  },
];
// ===== Sign Up Form ======
import { MENUiTEMS, SINGUPFORM, REVENUE, MENU } from "../utills/types";
import { FiShoppingBag } from "react-icons/fi";
import { BiSolidDownArrow, BiSolidMessage } from "react-icons/bi";
import { GiPowerButton } from "react-icons/gi";
import { GoPlus } from "react-icons/go";

export const SingUpForm: SINGUPFORM[] = [
  {
    id: 1,
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    id: 2,
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    id: 3,
    name: "password",
    label: "Password",
    type: "password",
  },
];

export const menuItems: MENUiTEMS[] = [
  { title: "Manage My Account", icon: "User", link: "/profile" },
  { title: "My Order", icon: "shopBag", link: "/product" },
  { title: "My Cancellations", icon: "cancel", link: "/cancelorder" },
  { title: "My Reviews", icon: "star", link: "/reviews" },
  { title: "Logout", icon: "logout", link: "/logout" },
];

// ====== Dashboard Navbar ====
export const Revenue: REVENUE[] = [
  { number: 1294, icon: "DownArrow", rotate: false, color: "text-Narangi" },
  { number: 540, icon: "DownArrow", rotate: true, color: "text-green-500" },
];

// Dashboard List
export const menu: MENU[] = [
  { name: "Dashboard", link: "/dashboard", icon: "dashboard" },
  { name: "Orders", link: "/orders", icon: "cart" },
  { name: "Products", link: "/products", icon: "shopongbag" },
  { name: "Shipping", link: "/shipping", icon: "shipping" },
  { name: "Payments", link: "/payments", icon: "payment" },
  { name: "Settings", link: "/settings", icon: "settings" },
];

// ===== Profile form =====
export const profileFields = [
  { label: "First Name", name: "firstName", type: "text" },
  { label: "Last Name", name: "lastName", type: "text" },
  { label: "Email", name: "email", type: "text", disabled: true },
  { label: "Address", name: "address", type: "text" },
];

export const passwordFields = [
  {
    name: "currentPassword",
    placeholder: "Current Password",
    type: "password",
  },
  {
    name: "newPassword",
    placeholder: "New Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    placeholder: "Confirm Password",
    type: "password",
  },
];
