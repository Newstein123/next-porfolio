import { Pagination, Table, ToggleSwitch } from "flowbite-react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import DeleteModal from "../../components/delete/DeleteModal";
import { PostContext } from "@/context/PostContext";
import { format } from "date-fns";

const Post = ({ item, index }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openFeatured, setOpenFeatured] = useState(item.featured);
  const [openPublic, setOpenPublic] = useState(item?.status);
  const { state, deletePost, featureChanged } = useContext(PostContext);
  const formattedDate = format(new Date(2014, 1, 11), "MM/dd/yyyy");

  // featured toggle changed

  const handleFeaturedChange = (id, featured) => {
    // do something
    featureChanged(id, featured);
    setOpenFeatured(!openFeatured);
  };

  // public toggle changed

  const handlePublicChange = () => {
    // do something
    setOpenPublic(!openPublic);
  };

  return (
    <React.Fragment>
      <DeleteModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        deleteData={deletePost}
        state={state}
        id={item._id}
      />
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {index + 1}
        </Table.Cell>
        <Table.Cell>
          <Link href={`/admin/post/${item._id}`}> {item.title} </Link>
        </Table.Cell>
        <Table.Cell> {item.category_id.name} </Table.Cell>
        <Table.Cell> {item.author.name} </Table.Cell>
        <Table.Cell> {formattedDate} </Table.Cell>
        <Table.Cell>
          <ToggleSwitch
            checked={openFeatured}
            onChange={() => handleFeaturedChange(item._id, item.featured)}
          />
        </Table.Cell>
        <Table.Cell>
          <ToggleSwitch
            checked={openPublic}
            onChange={() => handlePublicChange()}
          />
        </Table.Cell>
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
