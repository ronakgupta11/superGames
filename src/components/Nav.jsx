
import { Navbar } from 'flowbite-react';
// import { ConnectWallet } from '@thirdweb-dev/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <Navbar
      fluid
      
    >
      <Navbar.Brand
        
        href="/"
      >
        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          SuperGames
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <ConnectButton/>

        
        <Navbar.Toggle />
      </div>
      {/* <Navbar.Toggle /> */}
      <Navbar.Collapse>
      <Link to={"/games"}>

          Games
      </Link>
      
      <Link to={"/about"}>

          About
      </Link>
      
      <Link to={"/pricing"}>

          Pricing
      </Link>
      
        {/* </Navbar.Link> */}

       
        
     
        
        
        
      </Navbar.Collapse>
    </Navbar>
  )
}


