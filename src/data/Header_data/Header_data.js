import { ICONS } from "../../constants/Icons/icons";
import light_logo from "../../assets/logo_light1.png";
import dark_logo from "../../assets/mylogo.png";
export const Header_Data = {
  logo_img_path: {
    dark_mode: dark_logo,
    light_mode: light_logo,
  },
  nav_buttons: [
    {
      id: 1,
      name: "Home",
      to: "#home",
    },
    {
      id: 2,
      name: "about",
      to: "#about",
    },
    {
      id: 3,
      name: "skills",
      to: "#skills",
    },
    {
      id: 4,
      name: "experience",
      to: "#experience",
    },
    {
      id: 5,
      name: "projects",
      to: "#projects",
    },
    {
      id: 6,
      name: "certifications",
      to: "/certifications",
    },
    {
      id: 7,
      name: "blog",
      to: "/blog",
    },
    {
      id: 8,
      name: "contact me",
      to: "#contact_me",
    },
  ],
  social_buttons: [
    {
      id: 1,
      link: "https://www.facebook.com/profile.php?id=61574350121856",
      icon: ICONS.facebook,
      color: "--facebook",
    },
    {
      id: 2,
      link: "https://www.instagram.com/omega_tech248/",
      icon: ICONS.instagram,
      color: "--instagram",
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/omarkhaled248/",
      icon: ICONS.linkedIn,
      color: "--linkedin",
    },
    {
      id: 4,
      link: "https://github.com/OmarKhaled-00",
      icon: ICONS.github,
      color: "--github",
    },
    {
      id: 5,
      link: "https://x.com/OmarKhaled8904",
      icon: ICONS.twitter,
      color: "--twitter",
    },
    {
      id: 6,
      link: "https://wa.me/201011281789?text=Hello%20I%20want%20to%20build%20a%20website",
      icon: ICONS.whatsapp,
      color: "--whatsapp",
    },
    {
      id: 7,
      link: "mailto:omarkhled992@gmail.com",
      icon: ICONS.envlope,
      color: "--gmail",
    },
  ],
  wisdoms: [
    { id: 1, wisdom: "Consistency builds success, not sudden effort" },
    { id: 2, wisdom: "Small efforts daily create big results" },
    { id: 3, wisdom: "Discipline beats motivation every single time" },
    { id: 4, wisdom: "Effort today shapes success tomorrow" },
    { id: 5, wisdom: "Stay consistent even when results delay" },
    { id: 6, wisdom: "Hard work compounds silently over time" },
    { id: 7, wisdom: "Progress comes from showing up daily" },
    { id: 8, wisdom: "Focus and effort create unstoppable growth" },
    { id: 9, wisdom: "No shortcuts, only consistent smart work" },
    { id: 10, wisdom: "Greatness is built through repeated effort" },
  ],
  brightness_mode: {
    light_mode: {
      light_icon: ICONS.sun,
    },
    dark_mode: {
      dark_icon: ICONS.moon,
    },
  },
};
