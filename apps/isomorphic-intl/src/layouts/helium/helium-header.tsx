"use client";

import { Link } from "@/i18n/routing";
import { Badge, ActionIcon } from "rizzui";
import cn from "@core/utils/class-names";
import MessagesDropdown from "@/layouts/messages-dropdown";
import NotificationDropdown from "@/layouts/notification-dropdown";
import ProfileMenu from "@/layouts/profile-menu";
import SettingsButton from "@/layouts/settings-button";
import HamburgerButton from "@/layouts/hamburger-button";
import Logo from "@core/components/logo";
import { PiChatCircleDotsFill, PiBellSimpleRingingFill, PiGearFill } from "react-icons/pi";
import Sidebar from "./helium-sidebar";
import SearchWidget from "@/app/shared/search/search";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../language-switcher";

function HeaderMenuRight() {
  return (
    <>
      <div className="grid grid-cols-2 items-center gap-2 text-gray-700 xs:gap-3 xl:gap-4">
        <LanguageSwitcher
          iconClassName="hidden"
          selectClassName="shadow-none [&>span]:translate-y-[3px] [&>span]:translate-x-0.5"
          className="relative overflow-hidden rounded-full shadow backdrop-blur-md before:absolute before:h-full before:w-full before:-rotate-45 before:rounded-full before:bg-gradient-to-l before:from-orange-dark/25 before:via-orange-dark/0 before:to-orange-dark/0 dark:bg-gray-100 3xl:h-10 3xl:w-10"
        />
        {/* <MessagesDropdown>
          <ActionIcon
            aria-label="Messages"
            variant="text"
            className={cn(
              "relative h-[34px] w-[34px] overflow-hidden rounded-full shadow backdrop-blur-md before:absolute before:h-full before:w-full before:-rotate-45 before:rounded-full before:bg-gradient-to-l before:from-green-dark/25 before:via-green-dark/0 before:to-green-dark/0 dark:bg-gray-100 md:h-9 md:w-9 3xl:h-10 3xl:w-10 "
            )}
          >
            <PiChatCircleDotsFill className="h-[18px] w-auto 3xl:h-5" />
            <Badge
              renderAsDot
              color="success"
              enableOutlineRing
              className="absolute right-1 top-2.5 -translate-x-1 -translate-y-1/4"
            />
          </ActionIcon>
        </MessagesDropdown>
        <NotificationDropdown>
          <ActionIcon
            aria-label="Notification"
            variant="text"
            className={cn(
              "relative h-[34px] w-[34px] overflow-hidden rounded-full shadow backdrop-blur-md before:absolute before:h-full before:w-full before:-rotate-45 before:rounded-full before:bg-gradient-to-l before:from-orange-dark/25 before:via-orange-dark/0 before:to-orange-dark/0 dark:bg-gray-100 md:h-9 md:w-9 3xl:h-10 3xl:w-10"
            )}
          >
            <PiBellSimpleRingingFill className="h-[18px] w-auto 3xl:h-5" />
            <Badge
              renderAsDot
              color="warning"
              enableOutlineRing
              className="absolute right-1 top-2.5 -translate-x-1 -translate-y-1/4"
            />
          </ActionIcon>
        </NotificationDropdown> */}
        {/* <SettingsButton className="rounded-full before:absolute before:h-full before:w-full before:-rotate-45 before:rounded-full before:bg-gradient-to-l before:from-green-dark/25 before:via-green-dark/0 before:to-green-dark/0 3xl:h-10 3xl:w-10">
          <PiGearFill className="h-[22px] w-auto animate-spin-slow" />
        </SettingsButton> */}
        <ProfileMenu />
      </div>
    </>
  );
}

export default function Header() {
  const t = useTranslations("common");
  return (
    <header
      className={
        "sticky top-0 z-[990] flex justify-between items-center bg-gray-0/80 px-4 py-4 backdrop-blur-xl md:px-5 lg:px-6 xl:-ms-1.5 xl:pl-4 2xl:-ms-0 2xl:py-5 2xl:pl-6 3xl:px-8 3xl:pl-6 4xl:px-10 4xl:pl-9 dark:bg-gray-50/50"
      }
    >
      <div className="flex w-full max-w-2xl items-center">
        <HamburgerButton
          view={<Sidebar className="static w-full xl:p-0 2xl:w-full [&>div]:xl:rounded-none" />}
        />
        <Link
          href={"/"}
          aria-label="Site Logo"
          className="me-4 w-9 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden"
        >
          <Logo iconOnly={true} />
        </Link>
        {/* <SearchWidget /> */}
      </div>
      <HeaderMenuRight />
    </header>
  );
}