"use client";

import { Title, Text, Avatar, Button, Popover } from "rizzui";
import cn from "@core/utils/class-names";
import { routes } from "@/config/routes";
import { signOut } from "next-auth/react";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { handleSignOut } from "@/lib/cognitoActions";
import useAuthUser from "@/app/hooks/use-auth-user";

export default function ProfileMenu({
  buttonClassName,
  avatarClassName,
  username = false,
}: {
  buttonClassName?: string;
  avatarClassName?: string;
  username?: boolean;
}) {
  const user = useAuthUser();

  return (
    <ProfileMenuPopover>
      <Popover.Trigger>
        <button
          className={cn(
            "w-9 shrink-0 rounded-full outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:translate-y-px sm:w-10",
            buttonClassName
          )}
        >
          {user?.name ? (
            <Avatar
              name={user.name}
              src={`https://ui-avatars.com/api/?name=${user.name.split(' ').map((n: string) => n[0]).join('')}&&background=random`}
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-gray-300 animate-pulse" />
          )}
          {!!username && (
            <span className="username hidden text-gray-200 dark:text-gray-700 md:inline-flex">
              Hi, {user?.name}
            </span>
          )}
        </button>
      </Popover.Trigger>

      <Popover.Content className="z-[9999] p-0 dark:bg-gray-100 [&>svg]:dark:fill-gray-100">
        <DropdownMenu user={user} />
      </Popover.Content>
    </ProfileMenuPopover>
  );
}

function ProfileMenuPopover({ children }: React.PropsWithChildren<{}>) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Popover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      shadow="sm"
      placement="bottom-end"
    >
      {children}
    </Popover>
  );
}

const menuItems = [
  {
    name: "text-my-profile",
    href: routes.profile,
  },
  {
    name: "text-account-settings",
    href: routes.forms.profileSettings,
  },
  {
    name: "text-activity-log",
    href: "#",
  },
];

function DropdownMenu({ user }: { user: any }) {
  const t = useTranslations("common");

  return (
    <div className="w-64 text-left rtl:text-right">
      <div className="flex items-center border-b border-gray-300 px-6 pb-5 pt-6">
        {user?.name ? (
          <Avatar
            name={user.name}
            src={`https://ui-avatars.com/api/?name=${user.name.split(' ').map((n: string) => n[0]).join('')}&&background=random`}
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-gray-300 animate-pulse" />
        )}
        <div className="ms-3">
          <Title
            as="h6"
            className="font-semibold"
          >
            {user?.name}
          </Title>
          <Text className="text-gray-600">{user?.email}</Text>
        </div>
      </div>
      {/* <div className="grid px-3.5 py-3.5 font-medium text-gray-700">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group my-0.5 flex items-center rounded-md px-2.5 py-2 hover:bg-gray-100 focus:outline-none hover:dark:bg-gray-50/50"
          >
            {t(item.name)}
          </Link>
        ))}
      </div> */}
      <div className="border-t border-gray-300 px-6 pb-6 pt-5">
        <Button
          className="h-auto w-full justify-start p-0 font-medium text-gray-700 outline-none focus-within:text-gray-600 hover:text-gray-900 focus-visible:ring-0"
          variant="text"
          onClick={() => {
            handleSignOut();
            signOut();
            window.location.href = "/auth/sign-in-1";
          }}
        >
          {t("text-sign-out")}
        </Button>
      </div>
    </div>
  );
}
