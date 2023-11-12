import './about.scss';
import AnimatedLetters from '../Animate/animate';
import {useState,useEffect} from 'react';
import teamApp from '../../assets/ReactApp.jpg';
import musicApp from "../../assets/musicPlayerApp.jpg";
import mealApp from '../../assets/meals.jpg';
import blackJack from '../../assets/blackJack.jpg';
import atgTest from '../../assets/Rectangle 2.png';
import { faBootstrap, faCss3,faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About =()=>{
    const [letterClass,setLetterClass] = useState('animate');
    const about = [
        'A','B','O','U','T','','M','E'
    ]
 

    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('animate-hover');
        }, 4000);
    },[])
    return<main className='about-session'>
        <div className="about">
            <div className="about-content">
                <div className="content">
                    <h1>
                        <AnimatedLetters 
                            strArray={about}
                            letterClass={letterClass}
                            idx={12} />
                    </h1>
                    <h4 className='firstPara'>
                    A dedicated full-stack developer with a fervent commitment to creating dynamic web applications. Proficient in a wide range of technologies for seamless development and user experience enhancement.
                    </h4>
                    <br/>
                    <h4 className='firstLine'>I'm passionate in both Frontend & Backend</h4>
                    <h4 className='secondLine'> development and creations</h4>
                    <h4 className='thirdLine'>with innovative </h4>
                    <h4 className='fourthLine'>technologies...</h4>
                </div>
                <div className="skill">
                    <div className='skillChild'>
                        <h4 className='skl'>Skill</h4>
                        <h5>Html</h5>
                        <select>
                            <option>Css</option>
                            <option>Scss</option>
                            <option>Bootstrap</option>
                        </select>
                        <select>
                            <option>JavaScript</option>
                            <option>ReactJS</option>
                            <option>NodeJS</option>
                            <option>ExpressJS</option>
                            <option>Redux</option>
                            <option>Axios</option>
                            <option>GSAP</option>
                        </select>
                        <h5>Php</h5>
                        <h5>MySql</h5>
                        <select>
                            <option>MongoDB</option>
                            <option>Mongoose</option>
                        </select>
                        <h5>Restful API</h5>
                        <h5>Git</h5> 
                    </div>
                </div>
            </div>
            <div className="works">
                <div className="one">
                    <div className='teamLeft'>
                        <img src={mealApp} alt='meals'/>
                        <h5>Meals App</h5>
                    </div>
                    <div className='teamRight'>
                    <div className='fonts'>
                            <div className='font'>
                                <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                            </div>
                            <div className='font'>
                                <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                            </div>
                            <div className='font'>
                                <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                            </div>
                            <div className='font react'>
                                <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                            </div>
                            <div className='font'>
                                        <FontAwesomeIcon icon={faBootstrap} color='blue' />
                                    </div>
                            </div>
                       <div className='button'>
                            <a href='https://mealreciepe.netlify.app/' rel='noreferrer' target='_blank'>Preview</a>
                       </div>
                    </div>
                </div>
                <div className="two">
                    <div className='teamLeft'>
                        <img src={teamApp} alt='team'/>
                        <h5>Team Management App</h5>
                    </div>
                    <div className='teamRight'>
                       <div className='fonts'>
                            <div className='font'>
                                <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                            </div>
                            <div className='font'>
                                <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                            </div>
                            <div className='font react'>
                                <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                            </div>
                            <div className='font'>
                                <FontAwesomeIcon icon={faBootstrap} color='blue' />
                            </div>
                       </div>
                       <div className='button'>
                            <a href='https://teammembermanagementapp--blackylucky.repl.co/'  rel='noreferrer' target='_blank'>Preview</a>
                       </div>
                    </div>
                </div>
                <div className="three">
                    <div className='teamLeft'>
                        <img src={musicApp} alt='music'/>
                        <h5>Music Player</h5>
                    </div>
                    <div className='teamRight'>
                        <div className='fonts'>
                            <div className='font'>
                                <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                            </div>
                            <div className='font'>
                                <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                            </div>
                            <div className='font'>
                                <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                            </div>
                        </div>
                        <div className='button'>
                            <a href='https://musicplayertutorial--blackylucky.repl.co/'  rel='noreferrer' target='_blank'>Preview</a>
                       </div>
                    </div>
                </div>
                <div className="two">
                    <div className='teamLeft'>
                        <img src={blackJack} alt='music'/>
                        <h5>Black jack Game</h5>
                    </div>
                    <div className='teamRight'>
                        <div className='fonts'>
                            <div className='font'>
                                <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                            </div>
                            <div className='font'>
                                <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                            </div>
                            <div className='font'>
                                <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                            </div>
                        </div>
                        <div className='button'>
                            <a href='https://casinogamejs.netlify.app'  rel='noreferrer' target='_blank'>Preview</a>
                       </div>
                    </div>
                </div>
                <div className="two">
                    <div className='teamLeft'>
                        <img className='atg' src={atgTest} alt='ATG'/>
                        <h5>ATG Frontend Test</h5>
                    </div>
                    <div className='teamRight'>
                        <div className='fonts'>
                            <div className='font'>
                                <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                            </div>
                            <div className='font'>
                                <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                            </div>
                            <div className='font'>
                                <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                            </div>
                            <div className='font'>
                                <FontAwesomeIcon icon={faBootstrap} color='blue' />
                            </div>
                        </div>
                        <div className='button'>
                            <a href='https://atgtestone.netlify.app'  rel='noreferrer' target='_blank'>Preview</a>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
}
export default About; 