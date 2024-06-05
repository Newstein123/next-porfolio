import { Table } from "flowbite-react";
import React from "react";

const TableLoading = () => {
  return (
    <Table.Body className="divide-y" style={{ tableLayout: "fixed" }}>
      {Array.from({ length: 10 }, (_, index) => (
        <Table.Row
          className="bg-white dark:border-gray-700 dark:bg-gray-800"
          key={index}
        >
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[14.28%]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
          </Table.Cell>
          <Table.Cell className="w-[14.28%]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
          </Table.Cell>
          <Table.Cell className="w-[14.28%]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
          </Table.Cell>
          <Table.Cell className="w-[14.28%]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
          </Table.Cell>
          <Table.Cell className="w-[14.28%]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
          </Table.Cell>
          <Table.Cell className="w-[14.28%]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
          </Table.Cell>
          <Table.Cell className="w-[14.28%]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
          </Table.Cell>
          <Table.Cell className="w-[14.28%]">
            <div className="flex">
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 me-3"
              >
                Edit
              </a>
              <a
                href="#"
                className="font-medium text-red-600 hover:underline dark:text-cyan-500"
              >
                Delete
              </a>
            </div>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};

export default TableLoading;
