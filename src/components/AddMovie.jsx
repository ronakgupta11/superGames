import React,{useState} from 'react'
import { Button, Label, Modal, TextInput } from 'flowbite-react';
function AddMovie() {
    const [openModal, setOpenModal] = useState();
    const [email, setEmail] = useState("");
    const props = { openModal, setOpenModal, email, setEmail };
  return (
    <>
    <Button onClick={() => props.setOpenModal('form-elements')}>Add Your Content</Button>
    <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput id="email" placeholder="name@company.com" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" type="password" required />
          </div>
          <div className="w-full">
            <Button>Log in to your account</Button>
          </div>

        </div>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default AddMovie