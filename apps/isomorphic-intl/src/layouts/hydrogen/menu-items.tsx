import { routes } from "@/config/routes";
import {
  PiBellSimpleRingingDuotone,
  PiChartLineUp,
  PiChartLineUpDuotone,
  PiEnvelopeSimpleOpenDuotone,
  PiFoldersDuotone,
  PiSquaresFour,
  PiSquaresFourDuotone,
  PiUserDuotone,
  PiUserGearDuotone,
} from "react-icons/pi";

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  {
    name: 'sidebar-menu-dashboard',
  },
  // label end
  {
    name: 'sidebar-menu-overview',
    href: routes.dashboard.overview,
    icon: <PiChartLineUp />,
  },
  {
    name: 'sidebar-menu-studies',
    href: routes.dashboard.studies,
    icon: <PiSquaresFour />,
  },
  // label start
  {
    name: "sidebar-menu-settings",
  },
  // label end
  {
    name: "sidebar-menu-account-settings",
    // href: routes.forms.profileSettings,
    href: '/',
    icon: <PiUserGearDuotone />,
  },
  // {
  //   name: "sidebar-menu-notification-preference",
  //   href: routes.forms.notificationPreference,
  //   icon: <PiBellSimpleRingingDuotone />,
  // },
  {
    name: "sidebar-menu-personal-information",
    // href: routes.forms.personalInformation,
    href: '/',
    icon: <PiUserDuotone />,
  },
  // {
  //   name: "sidebar-menu-newsletter",
  //   href: routes.forms.newsletter,
  //   icon: <PiEnvelopeSimpleOpenDuotone />,
  // },
];
