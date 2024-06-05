"use client";
import { PostContext } from "@/context/PostContext";
import {
  Alert,
  Button,
  FileInput,
  Label,
  Modal,
  Select,
  TextInput,
} from "flowbite-react";
import { useContext, useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import Editor from "./Editor";

const Create = ({ openModal, setOpenModal, categories }) => {
  const { state, createPost } = useContext(PostContext);

  const initData = {
    title: "",
    body: "",
    category_id: "",
    images: [],
    tags: [],
    lang: "my",
  };
  const [data, setData] = useState(initData);

  const handleCreate = async () => {
    try {
      const formData = new FormData();

      formData.set("title", data.title);
      formData.set("body", data.body);
      formData.set("tags", JSON.stringify(data.tags));
      formData.set("lang", data.lang);
      for (const file of data.images) {
        formData.append("images", file);
      }

      formData.set("category_id", data.category_id);

      await createPost(formData);
      if (!state.error) {
        setOpenModal(false);
        setData(initData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header> Create Post </Modal.Header>
      <Modal.Body>
        {state.error && <Alert color="failure"> {state.error} </Alert>}

        {/* lang  */}
        <div className="my-3">
          <Label> Language </Label>
          <Select onChange={(e) => setData({ ...data, lang: e.target.value })}>
            <option value="my"> Myanmar </option>
            <option value="en"> English </option>
          </Select>
        </div>

        {/* title */}
        <div className="my-3">
          <Label> Title </Label>
          <TextInput
            name="images[]"
            placeholder="Enter Title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>

        {/* image  */}
        <div className="my-3">
          <Label> Image </Label>
          <FileInput
            multiple={true}
            id="file-upload-helper-text"
            helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
            onChange={(e) => setData({ ...data, images: e.target.files })}
          />
        </div>

        {/* body */}
        <div className="my-3">
          <Label> Body </Label>
          <Editor data={data} setData={setData} />
        </div>
        {/* tags  */}

        <div className="my-3">
          <Label> Tag </Label>
          <TagsInput
            value={data.tags}
            onChange={(value) => setData({ ...data, tags: value })}
            className="w-full rounded-md"
          />
        </div>

        {/* category  */}
        <div className="my-3">
          <Label> Category </Label>
          <Select
            onChange={(e) => setData({ ...data, category_id: e.target.value })}
          >
            <option> Select Category </option>
            {categories.length > 0 &&
              categories.map((item) => (
                <option value={item._id} key={item._id}>
                  {item.name}
                </option>
              ))}
          </Select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          isProcessing={state.loading}
          processingLabel="Saving"
          onClick={handleCreate}
        >
          Save
        </Button>
        <Button
          type="button"
          color="failure"
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Create;
