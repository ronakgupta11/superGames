import React,{useState} from 'react'
import { Button, Label, Modal, TextInput ,FileInput} from 'flowbite-react';
import { useCreateAsset } from '@livepeer/react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { abi, address } from '../constants/constant';

function AddMovie() {
    const [openModal, setOpenModal] = useState();
    const [video, setVideo] = useState(undefined);
    const [name, setName] = useState("sample Name");
    const [desc, setDesc] = useState("sample Description");
    const [poster, setPoster] = useState("");
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
     args: [name,desc,poster,asset?.id]
    })
    const { data, isLoading, isSuccess, write } = useContractWrite(config)
  return (
    <>
    <Button onClick={() => props.setOpenModal('form-elements')}>Add Your Content</Button>
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
            <Button  disabled={status === 'loading' || !createAsset }
        onClick={() => {
          createAsset().then(v=>setAsset(v[0]));
          // setAsset(assets[0])
        }}>Upload Content on Live Peer</Button>

          </div>
          <div className="w-full">

          <Button  disabled={!write }
        onClick={() => {
          write();
        }}>Upload Content</Button>
        </div>
<div>
{/* {console.log(assets)} */}
{isLoading && <div>Loading....</div>}
{isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
{error && <div>{error.message}</div>}
</div>
        </div>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default AddMovie