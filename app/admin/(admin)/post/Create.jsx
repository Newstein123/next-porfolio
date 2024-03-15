'use client'
import { PostContext } from '@/context/PostContext'
import { Alert, Button, Label, Modal, Select, TextInput } from 'flowbite-react'
import { useContext, useState } from 'react'

const Create = ({openModal, setOpenModal}) => {
    const {state, createPost} = useContext(PostContext)
    const initData = {
        title : '',
        body : '',
        category_id : '65f00dec577434f80623d24a',
        tags : ['Laravel', 'Technology']
    }
    const [data, setData] = useState(initData)
    const handleCreate = async () => {
        try {
            await createPost(data);
            if(!state.error) {
                setOpenModal(false)
                setData(initData)
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header> Create Post </Modal.Header>
        <Modal.Body>
            {state.error && <Alert color="failure"> {state.error} </Alert>}
            <div className="my-3">
                <Label> Title </Label>
                <TextInput  
                    placeholder='Enter Title'
                    value={data.title}
                    onChange={(e) => setData({...data, title : e.target.value})}
                />
            </div>
            <div className="my-3">
                <Label> Body </Label>
                <TextInput  
                    placeholder='Enter Body Message'
                    value={data.body}
                    onChange={(e) => setData({...data, body : e.target.value})}
                />
            </div>
            <div className="my-3">
                <Label> Category </Label>
                <Select>
                    <option> Select Category </option>
                </Select>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            type='button'
            isProcessing={state.loading}
            processingLabel='Saving'
            onClick={handleCreate}
        > Save </Button>
          <Button type='button' color="failure" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal> 
  )
}

export default Create
