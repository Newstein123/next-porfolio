
'use client';

import { Button, Sidebar } from 'flowbite-react';
import Link from 'next/link';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

export const AdminSidebar = ({handleLogout}) => {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
        Portfolio Blog
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} as="div">
            <Link href="/admin/post"> Post </Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Category
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Comment
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            User
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Profile
          </Sidebar.Item>
          <Sidebar.Item href="#" onClick={handleLogout} icon={HiTable}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
