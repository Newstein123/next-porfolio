import { Table } from "flowbite-react";
import React from "react";

const TableLoading = ({headers}) => {
  return (
    <Table.Body className="divide-y">
        {Array.from({length : 10}, (_, index) =>  (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </Table.Cell>
                <Table.Cell>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </Table.Cell>
                <Table.Cell>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </Table.Cell>
                <Table.Cell>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </Table.Cell>
                <Table.Cell>
                <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                    Edit
                </a>
                </Table.Cell>
        </Table.Row>
        ))}  
    </Table.Body>
  );
};

export default TableLoading;
