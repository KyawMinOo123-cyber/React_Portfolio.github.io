import './App.scss';
import Layout from './components/Layout/Layout';
import Nav from './components/Nav/nav';
import Home from './components/Home/home';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';


import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App(){
    return(
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index  element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Route>
            </Routes>
        <Footer/>
        </BrowserRouter> 
    )
}

export default App;