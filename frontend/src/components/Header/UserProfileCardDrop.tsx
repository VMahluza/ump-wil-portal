// UserProfileCard.js
import React from "react";
import Image from "next/image";
export default function UserProfileCard({ user }: { user: any }) {
  return (
    <div className="flex items-center gap-2.5 px-5 pb-5.5 pt-3.5">
      <span className="relative block h-12 w-12 rounded-full">
        <Image
          width={112}
          height={112}
          src="/images/user/user-03.png"
          style={{
            width: "auto",
            height: "auto",
          }}
          alt="User"
          className="overflow-hidden rounded-full"
        />
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green dark:border-gray-dark"></span>
      </span>

      <span className="block">
        <span className="block font-medium text-dark dark:text-white">
          {user?.first_name} {user?.last_name}
        </span>
        <span className="block font-medium text-dark-5 dark:text-dark-6">
          {user?.email}
        </span>
      </span>
    </div>
  );
}
