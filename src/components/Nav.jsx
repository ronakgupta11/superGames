
import { Navbar } from 'flowbite-react';
// import { ConnectWallet } from '@thirdweb-dev/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <Navbar
      fluid
      
    >
    

      <Link className='flex' to={"/"}>
      <img
          alt="Flowbite React Logo"
          className=" h-24"
          src='../assets/logo/logo.png'
        />
        
      </Link>
      <div className="flex md:order-2">
      <ConnectButton/>

        
        <Navbar.Toggle />
      </div>
      {/* <Navbar.Toggle /> */}
      <Navbar.Collapse>
      <Link to={"/movies"}>

Movies
</Link>
      <Link to={"/games"}>

          Games
      </Link>
      <Link to={"/streams"}>

          Streams
      </Link>
      
      
      
      <Link to={"/pricing"}>

          Pricing
      </Link>
      <Link to={"/account"}>

          Profile
      </Link>
    
        
      </Navbar.Collapse>
    </Navbar>
  )
}


