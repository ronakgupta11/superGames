import React,{useState} from 'react'
import { Button, Label, Modal, TextInput ,FileInput,Spinner,Select} from 'flowbite-react';
import { useCreateStream } from '@livepeer/react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { abi, address } from '../constants/constant';

function CreateStream() {
    const [openModal, setOpenModal] = useState();
    // const [video, setVideo] = useState(undefined);
    // const [name, setName] = useState("sample Name");
    // const [desc, setDesc] = useState("sample Description"); 
    // const [poster, setPoster] = useState(""); 
    // const [cat, setCat] = useState("free"); 
    const props = { openModal, setOpenModal};
    // const [asset,setAsset] = useState(null)
    const [streamName, setStreamName] = useState('');
    const {
      mutate: createStream,
      data: createdStream,
      status: createStatus,
    } = useCreateStream(streamName ? { name: streamName } : null);
    //     const {config}  = usePrepareContractWrite({
    //   address:address,
    //   abi: abi,
    //   functionName: 'addMovie',
    //  args: [name,desc,poster,cat,asset?.id]
    // })
    // const { data, isLoading, isSuccess, write } = useContractWrite(config)
    console.log(createdStream)

  return (
    <>
    <Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300' onClick={() => props.setOpenModal('form-elements')}>Create Stream</Button>
    <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add your Content To Our Platform And Get Paid Per Views</h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Stream Name" />
            </div>
            <TextInput id="name" placeholder="Enter A Stream Name" required onChange={(e)=>setStreamName(e.target.value)} />
          </div>
         
          <div className="w-full">
            {!(createStatus === 'loading')?<Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'   disabled={createStatus === 'loading' || !createStream}
        onClick={() => {
            createStream?.();

        }}>Upload Content on Live Peer</Button>:
              <Button disabled={createStatus === 'loading' || !createStream } className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'>
        <Spinner
          aria-label="Spinner button example"
          size="sm"
        />
        <span className="pl-3">
          Loading...
        </span>
      </Button>}

          </div>

<div>
</div>
        </div>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default CreateStream