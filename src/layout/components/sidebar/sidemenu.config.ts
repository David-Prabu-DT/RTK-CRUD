import {
  HomeIcon,
  UserIcon,
  UserCircleIcon,
  CogIcon,
  ShieldCheckIcon,
  LockOpenIcon,
  DeviceMobileIcon,
} from "@heroicons/react/outline";

export const sideMenu = [
  {
    label: "Crud Panel",
    Icon: HomeIcon,
    to: "/panel",
  },
  {
    label: "Profile",
    Icon: UserIcon,
    to: "/profile",
  },
  {
    label: "Settings",
    Icon: CogIcon,
    to: "/settings",
    children: [
      {
        label: "Account",
        Icon: UserCircleIcon,
        to: "account",
      },
      {
        label: "Security",
        Icon: ShieldCheckIcon,
        to: "security",
        children: [
          {
            label: "Credentials",
            Icon: LockOpenIcon,
            to: "credentials",
          },
          {
            label: "2-FA",
            Icon: DeviceMobileIcon,
            to: "2fa",
          },
        ],
      },
    ],
  },
];
