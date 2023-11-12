import { Outlet } from 'react-router-dom';
import './Layout.scss';
import gsap from 'gsap-trial'; 

const Layout=()=>{
   
    return( 
        <main className='layout'>
            <Outlet/>
        </main>
    )
} 

export default Layout; 