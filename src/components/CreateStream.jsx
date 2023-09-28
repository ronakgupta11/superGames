import React,{useState} from 'react'
import { Button, Label, Modal, TextInput ,FileInput,Spinner,Select} from 'flowbite-react';
import { useCreateStream } from '@livepeer/react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { abi, address } from '../constants/constant';
import {PiClipboardTextLight} from "react-icons/pi"
import copy from "copy-to-clipboard";
function CreateStream() {
    const [openModal, setOpenModal] = useState();

    const props = { openModal, setOpenModal};

    const [streamName, setStreamName] = useState('');
    const [image, setStreamImage] = useState('');
    const [streamId, setStreamId] = useState('');
    const {
      mutateAsync: createStream,
      data: createdStream,
      status: createStatus,
    } = useCreateStream(streamName ? { name: streamName } : null);
    const {config}  = usePrepareContractWrite({
    address:address,
    abi: abi,
    functionName: 'addStream',
    args: [streamName,image,streamId]
    })
    const { data, isLoading, isSuccess, write } = useContractWrite(config)
    const copyToClipboard = () => {
        copy(createdStream?.streamKey);
        alert(`copied stream-key`);
    }
 

  return (
    <>
    <Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300' onClick={() => props.setOpenModal('form-elements')}>Create Stream</Button>
    <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
      <Modal.Header />
      <Modal.Body>
{    !createdStream &&    <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Stream Your Content To Wider Audience</h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Stream Name" />
            </div>
            <TextInput id="name" placeholder="Enter A Stream Name" required onChange={(e)=>setStreamName(e.target.value)} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="img" value="Stream Thumbnail" />
            </div>
            <TextInput id="img" placeholder="Enter Image Uri" required onChange={(e)=>setStreamImage(e.target.value)} />
          </div>
         
          <div className="w-full">
            {!(createStatus === 'loading')?<Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'   disabled={createStatus === 'loading' || !createStream}
        onClick={() => {
            createStream().then(v=>{
                setStreamId(v.id)
                // write()
            });

        }}>Create Stream</Button>:
              <Button disabled={createStatus === 'loading' || !createStream || isLoading || !write } className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'>
        <Spinner
          aria-label="Spinner button example"
          size="sm"
        />
        <span className="pl-3">
          Loading...
        </span>
      </Button>}

          </div>


        </div>}
        {    createdStream &&    <div className='flex flex-col items-center justify-center space-y-3'>
            <p className='text-green-500'>Successfuky Created Stream</p>
            <p className='text-gray-800 font-medium'>Stream Key</p>
            <div className='flex items-center space-x-3 rounded-md border border-gray-700 p-2'>
                <p>{createdStream?.streamKey}</p>
                <button onClick={copyToClipboard}>
                <PiClipboardTextLight className='h-6 w-6 text-black'/>
            </button>
            </div>
            {!isLoading?<Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'   disabled={isLoading || !write}
        onClick={() => {
            write()

        }}>Broadcast Stream</Button>:
              <Button disabled={ isLoading || !write } className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'>
        <Spinner
          aria-label="Spinner button example"
          size="sm"
        />
        <span className="pl-3">
          Loading...
        </span>
      </Button>}
            
        </div>}

      </Modal.Body>
    </Modal>
  </>
  )
}

export default CreateStream


// createdAt
// : 
// 1695921934719
// createdByTokenName
// : 
// "new-supergames"
// id
// : 
// "f902ebb5-2986-45e9-83c0-53b0d900b97c"
// isActive
// : 
// false
// kind
// : 
// "stream"
// lastSeen
// : 
// 0
// multistream
// : 
// {targets: Array(0)}
// name
// : 
// "rk-1234"
// playbackId
// : 
// "f902xfa4wfi1c24d"
// playbackUrl
// : 
// "https://livepeercdn.com/hls/f902xfa4wfi1c24d/index.m3u8"
// profiles
// : 
// (3) [{…}, {…}, {…}]
// record
// : 
// false
// renditions
// : 
// {}
// rtmpIngestUrl
// : 
// "rtmp://rtmp.livepeer.com/live/f902-ld2p-v874-14zo"
// sourceBytes
// : 
// 0
// sourceSegments
// : 
// 0
// sourceSegmentsDuration
// : 
// 0
// streamKey
// : 
// "f902-ld2p-v874-14zo"
// suspended
// : 
// false
// transcodedBytes
// : 
// 0
// transcodedSegments
// : 
// 0
// transcodedSegmentsDuration
// : 
// 0
// userId
// : 
// "1b153b62-b9e2-4e30-95f7-a3537cc6c8a7"