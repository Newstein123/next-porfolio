"use client";
import { Breadcrumb, Button, Pagination, Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import TableLoading from "../../components/loading/TableLoading";
import Post from "./Post";
import Search from "./Search";
import { PostContext} from "@/context/PostContext";
import Create from "./Create";

const PostAll = () => {
  const {state, getAllPost} = useContext(PostContext)
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const onPageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    getAllPost();
  }, []);

  return (
      <div className="my-3">
        {/* breadcrumb */}
        <div className="my-3 p-3 bg-slate-300">
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item href="/admin/dashboard" icon={HiHome}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#"> Posts </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {/* subheader  */}
        <div className="flex">
          <div className="w-4/5">
            {/* Search  */}
            <Search />
          </div>
          <div className="w-1/5 flex justify-end">
            {/* create button  */}
            <Button 
              type="button" 
              size="sm" 
              onClick={() => setOpenModal(true)}
              disabled={state.loading}
            >
              Create
            </Button>
          </div>
        </div>

        {/* table  */}
        <div className="overflow-x-auto my-5">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell> No </Table.HeadCell>
              <Table.HeadCell> Title </Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell> Author </Table.HeadCell>
              <Table.HeadCell> Date </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {!state.loading ? (
              <Table.Body className="divide-y">
                {state.posts.length > 0 &&
                  state.posts.map((item, index) => (
                    <Post key={index} item={item} index={index} />
                  ))}
              </Table.Body>
            ) : (
              <TableLoading />
            )}
          </Table>
        </div>
        {/* pagination  */}
        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination 
            currentPage={currentPage} 
            totalPages={100} 
            onPageChange={onPageChange} 
            showIcons 
          />
        </div>
        {/* create modal */}
        <Create 
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
  );
};

export default PostAll;

{
  /* <Card
            key={item._id}
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/image/projects/thumbnails/mmqr.jpg"
          >
            <Link href={`/admin/post/${item._id}`}> 
            <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title.length > 50 ? item.title.slice(0, 50) + '.....' : item.title}
            </h5>
            </Link>
            <h5 className='text-xl font-bold text-gray-700 inline'> 
              {item.category_id.name}  
            </h5>
            <div className='flex flex-wrap gap-2'>
            {item.tags.length > 0 && item.tags.map((item, index) => (
                <Badge color="purple" key={index}> {item} </Badge>
            ))}
            </div>
          </Card> */
}
