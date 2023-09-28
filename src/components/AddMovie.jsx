import React,{useState} from 'react'
import { Button, Label, Modal, TextInput ,FileInput,Spinner,Select} from 'flowbite-react';
import { useCreateAsset } from '@livepeer/react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { abi, address } from '../constants/constant';

function AddMovie() {
    const [openModal, setOpenModal] = useState();
    const [video, setVideo] = useState(undefined);
    const [name, setName] = useState("sample Name");
    const [desc, setDesc] = useState("sample Description"); 
    const [poster, setPoster] = useState(""); 
    const [cat, setCat] = useState("free"); 
    const props = { openModal, setOpenModal,video,setVideo,name,setName,desc,setDesc};
    const [asset,setAsset] = useState(null)
    const {
      mutateAsync: createAsset,
      data: assets,
      status,
      progress,
      error,
    } = useCreateAsset(

      video
        ? {
            sources: [
              {
                name: name,
                file: video,
                storage: {
                  ipfs: true,
                  metadata: {
                    name: name,
                    description: desc,
                  },
                },
              },
            ] ,
          }
        : null,
    );
        const {config}  = usePrepareContractWrite({
      address:address,
      abi: abi,
      functionName: 'addMovie',
     args: [name,desc,poster,cat,asset?.id]
    })
    const { data, isLoading, isSuccess, write } = useContractWrite(config)
    // console.log("cat",cat)
  return (
    <>
    <Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300' onClick={() => props.setOpenModal('form-elements')}>Add Your Content</Button>
    <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add your Content To Our Platform And Get Paid Per Views</h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Title" />
            </div>
            <TextInput id="name" placeholder="Enter a title" required onChange={(e)=>setName(e.target.value)} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="description" />
            </div>
            <TextInput id="description" placeholder='Describe Your Content'required onChange={(e)=>setDesc(e.target.value)}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="poster" value="Thumbnail" />
            </div>
            <TextInput id="poster" placeholder='Enter Banner URI'required onChange={(e)=>setPoster(e.target.value)}/>
          </div>
          <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="category"
          value="Select your Plan"
        />
      </div>
      <Select
        id="category"
        required
        onChange={(e)=>setCat(e.target.value)}
      >
        <option value={"free"}>
          Free
        </option>
        <option value={"basic"}>
          Basic
        </option>
        <option value = "premium">
          Premium
        </option>
      </Select>
    </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="file" value="File Upload" />
            </div>
            <FileInput
             multiple={false}
             accept="video/*"
             onChange={(e) => {
               if (e.target.files) {
                 setVideo(e.target.files[0]);
               }
             }}
        id="file"
        required/>
          </div>
          <div className="w-full">
            {!(status === 'loading')?<Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'  disabled={status === 'loading' || !createAsset }
        onClick={() => {
          createAsset().then(v=>setAsset(v[0]));
          // setAsset(assets[0])
        }}>Upload Content on Live Peer</Button>:
              <Button disabled={status === 'loading' || !createAsset } className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'>
        <Spinner
          aria-label="Spinner button example"
          size="sm"
        />
        <span className="pl-3">
          Loading...
        </span>
      </Button>}

          </div>
          <div className="w-full">

          {!isLoading?<Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'  disabled={!write }
        onClick={() => {
          write();
        }}>Upload Content</Button>
:
<Button disabled={!write || isLoading } className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'>
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
{/* {console.log(assets)} */}
{/* {isLoading && <div>Loading....</div>} */}
{isSuccess && <div className='text-green-400'>Transaction: {JSON.stringify(data).hash}</div>}
{error && <div>{error.message}</div>}
</div>
        </div>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default AddMovie