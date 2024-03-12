import { Dropdown, TextInput } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { HiBell } from "react-icons/hi";

const DashboardHeader = () => {
  return (
    <div className="bg-slate-300 p-3 w-full">
      <div className="flex justify-between items-center">
        {/* Search Anything  */}
        <TextInput
          type="search"
          placeholder="Search anything...."
          className="w-1/3"
        />
        {/* profile */}
        <div className="flex items-center">
          {/* alert  */}
          <HiBell size={25} className="me-3 text-indigo-700"/>
          <Dropdown label="">
            <Dropdown.Header>
              <span className="block text-sm"> minthetpaing </span>
              <span className="block truncate text-sm font-medium">
                bonnie@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item> 
                <Link href='/admin/profile'> Profile </Link>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
