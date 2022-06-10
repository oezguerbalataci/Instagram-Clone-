// @ts-nocheck
import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex mx-5 lg:mx-auto bg-white max-w-6xl justify-between">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden w-24  cursor-pointer lg:inline-grid "
        >
          <Image
            src="https://links.papareact.com/ocw"
            objectFit="contain"
            layout="fill"
          ></Image>
        </div>

        <div
          onClick={() => router.push("/")}
          className="relative cursor-pointer w-10  lg:hidden flex-shrink-0"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>

        {/* middle search  */}
        <div className="max-w-xs">
          {" "}
          <div className="mt-1 relative p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center cursor-pointer">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="rounded-md border border-gray-300 focus:ring-black focus:border-black block w-full pl-10 sm:text-sm "
              placeholder="Search"
              type="text"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <MenuIcon className=" h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45 " />
                <div className="absolute -top-1 -right-1 text-xs bg-red-500 rounded-full flex justify-center animate-pulse text-white items-center  w-5 h-5">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="profile_pic"
                className="h-10 w-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
