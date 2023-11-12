import './contact.scss';
import AnimatedLetters from '../Animate/animate';
import { useState,useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';

const Contact = () =>{
    const [letterClass,setLetterClass] = useState('animate');
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('animate-hover')
        }, 4000);
    },[])
    return<main className='contact-session'>
        <div className='contact'>
            <div className='form-session'>
 
                <div className='content'>
                    <div className='title'> 
                       <h3>
                        <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['C','O','N','T','A','C','T',' ','M','E']}
                                idx={15}
                            />
                       </h3> 
                    </div>
                    <div className='font'>
                        <FontAwesomeIcon icon={faHome} className={letterClass}/>
                        <h4>Aye Zayat (Ward) / Amarapura (Township) / Mandalay</h4>
                    </div> 
                    <div className='font'>
                        <FontAwesomeIcon icon={faEnvelope} className={`${letterClass} _12`}/>
                        <h4>blackyluckylittlecute@gmail.com</h4>
                    </div> 
                    <div className='font'>
                        <FontAwesomeIcon icon={faPhone} className={`${letterClass} _13`}/>
                        <h4>+959 951863505</h4>
                    </div> 
                </div>
            </div>
            <div className='map-session'>
            <div className="map-wrap">
                <MapContainer center={[21.9191175, 96.0563504]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[21.9191175,  96.0563504]}>
                    <Popup>Hello! I Live Here.Welcome!</Popup>
                    </Marker>
                </MapContainer>
        </div>
            </div>
        </div>
    </main>
}

export default Contact; 