import { Table } from "flowbite-react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import DeleteModal from "../../components/delete/DeleteModal";
import { PostContext } from "@/context/PostContext";

const Post = ({ item, index }) => {
  const [openModal, setOpenModal] = useState(false);
  const {state, deletePost} = useContext(PostContext)

  return (
    <React.Fragment>
        <DeleteModal 
            openModal={openModal}
            setOpenModal={setOpenModal}
            deleteData={deletePost}
            state={state}
        />
      <Table.Row
        className="bg-white dark:border-gray-700 dark:bg-gray-800"
        key={item._id}
      >
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {index + 1}
        </Table.Cell>
        <Table.Cell>
          <Link href={`/admin/post/${item._id}`}> {item.title} </Link>
        </Table.Cell>
        <Table.Cell> {item.category_id.name} </Table.Cell>
        <Table.Cell> {item.author.name} </Table.Cell>
        <Table.Cell> {item.createdAt} </Table.Cell>
        <Table.Cell>
          <div className="flex">
            <Link
              href="#"
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 me-3"
            >
              Edit
            </Link>
            <Link
              href="#"
              className="font-medium text-red-600 hover:underline dark:text-red-500"
              onClick={() => setOpenModal(true)}
            >
              Delete
            </Link>
          </div>
        </Table.Cell>
      </Table.Row>
    </React.Fragment>
  );
};

export default Post;
