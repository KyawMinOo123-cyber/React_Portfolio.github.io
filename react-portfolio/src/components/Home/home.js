import './home.scss';
import AnimatedLetters from '../Animate/animate';
import { backFill } from './backFill';
import {useState,useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGithubSquare, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap-trial';
import 'animate.css';


const Home = () =>{ 
    const[letterClass,setLetterClass] = useState('animate');

    const names = [
        'K','Y','A','W','','M','I','N',' ','O','O'
    ]
    const title = [
    'W',
    'e',
    'b',
    ' ', 
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
    ]

    gsap.to('.html',{duration:2,ease:'bounce',y:"101vh"})
    gsap.to('.css',{duration:2,ease:'bounce',y:"101vh",delay:1})
    gsap.to('.js',{duration:2,ease:'bounce',y:"101vh",delay:2})
    gsap.to('.react',{duration:2,ease:'bounce',y:"101vh",delay:3})
    gsap.to('.bootstrap',{duration:2,ease:'bounce',y:"101vh",delay:4})
    gsap.to('.git',{duration:2,ease:'bounce',y:"101vh",delay:5})



    useEffect(()=>{
       backFill();
       setTimeout(()=>{
            const firstLine = document.querySelector('.first-line');
            firstLine.style = `background-color:white`;
       },3000)
    },[])

    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('animate-hover')
        }, 4000);
    },[])


    return<main className='home-session'>
        <div className='home-logo'>
            <div className='logo-container'>

                <div className="logo-paths">

                    <div className='first-line'>
                        <div className='line1'>
                            <div className='block1 text-animate _1'></div>
                            <div className='block2 text-animate _2'></div>
                            <div className='block3 text-animate _3'></div>
                            <div className='block4 text-animate _4'></div>
                            <div className='block5 text-animate _5'></div>
                            <div className='block6 text-animate _6'></div>
                            <div className='block7 text-animate _7'></div>
                            <div className='block8 text-animate _8'></div>
                            <div className='block9 text-animate _9'></div>
                            <div className='block0 text-animate _10'></div>
                        </div>

                        <div className='line2'>
                            <div className='block11 text-animate _20'></div>
                            <div className='block12 text-animate _19'></div>
                            <div className='block13 text-animate _18'></div>
                            <div className='block14 text-animate _17'></div>
                            <div className='block15 text-animate _16'></div>
                            <div className='block16 text-animate _15'></div>
                            <div className='block17 text-animate _14'></div>
                            <div className='block18 text-animate _13'></div>
                            <div className='block19 text-animate _12'></div>
                            <div className='block20 text-animate _11'></div>
                        </div>

                        <div className='line3'>
                            <div className='block21 text-animate _21'></div>
                            <div className='block22 text-animate _22'></div>
                            <div className='block23 text-animate _23'></div>
                            <div className='block24 text-animate _24'></div>
                            <div className='block25 text-animate _25'></div>
                            <div className='block26 text-animate _26'></div>
                            <div className='block27 text-animate _27'></div>
                            <div className='block28 text-animate _28'></div>
                            <div className='block29 text-animate _29'></div>
                            <div className='block30 text-animate _30'></div>
                        </div>

                        <div className='line4'>
                            <div className='block31 text-animate _40'></div>
                            <div className='block32 text-animate _39'></div>
                            <div className='block33 text-animate _38'></div>
                            <div className='block34 text-animate _37'></div>
                            <div className='block35 text-animate _36'></div>
                            <div className='block36 text-animate _35'></div>
                            <div className='block37 text-animate _34'></div>
                            <div className='block38 text-animate _33'></div>
                            <div className='block39 text-animate _32'></div>
                            <div className='block40 text-animate _31'></div>
                        </div>

                    </div>

                    <div className='second-line'>

                        <div className='upper-path'>
                            <div className="line5">
                                <div className='block41 text-animate _41'></div>
                                <div className='block42 text-animate _42'></div>
                                <div className='block43 text-animate _43'></div>
                                <div className='block44 text-animate _44'></div>
                                <div className='block45 text-animate _45'></div>
                                <div className='block46 text-animate _46'></div>
                                <div className='block47 text-animate _47'></div>
                                <div className='block48 text-animate _48'></div>
                                <div className='block49 text-animate _49'></div>
                                <div className='block50 text-animate _50'></div>
                            </div>

                            <div className="line6">
                                <div className='block51 text-animate _60'></div>
                                <div className='block52 text-animate _59'></div>
                                <div className='block53 text-animate _58'></div>
                                <div className='block54 text-animate _57'></div>
                                <div className='block55 text-animate _56'></div>
                                <div className='block56 text-animate _55'></div>
                                <div className='block57 text-animate _54'></div>
                                <div className='block58 text-animate _53'></div>
                                <div className='block59 text-animate _52'></div>
                                <div className='block60 text-animate _51'></div>
                            </div>

                            <div className="line7">
                            <div className='block61 text-animate _61'></div>
                            <div className='block62 text-animate _62'></div>
                            <div className='block63 text-animate _63'></div>
                            <div className='block64 text-animate _64'></div>
                            <div className='block65 text-animate _65'></div>
                            <div className='block66 text-animate _66'></div>
                            <div className='block67 text-animate _67'></div>
                            <div className='block68 text-animate _68'></div>
                            <div className='block69 text-animate _69'></div>
                            <div className='block70 text-animate _70'></div>
                            </div>

                            <div className="line8">
                                <div className='block71 text-animate _80'></div>
                                <div className='block72 text-animate _79'></div>
                                <div className='block73 text-animate _78'></div>
                                <div className='block74 text-animate _77'></div>
                                <div className='block75 text-animate _76'></div>
                                <div className='block76 text-animate _75'></div>
                                <div className='block77 text-animate _74'></div>
                                <div className='block78 text-animate _73'></div>
                                <div className='block79 text-animate _72'></div>
                                <div className='block80 text-animate _71'></div>
                            </div>
                        </div>

                        <div className="lower-path">
                            <div className="left-side">
                                <div className='left-upper'>
                                    <div className="upper-1">
                                        <div className='block81 text-animate _81'></div>
                                        <div className='block82 text-animate _82'></div>
                                        <div className='block83 text-animate _83'></div>
                                        <div className='block84 text-animate _84'></div>
                                        <div className='block85 text-animate _85'></div>
                                        <div className='block86 text-animate _86'></div>
                                        <div className='block87 text-animate _87'></div>
                                        <div className='block88 text-animate _88'></div>
                                        <div className='block89 text-animate _89'></div>
                                        <div className='block90 text-animate _90'></div>
                                    </div>
                                </div>
                                <div className='left-lower'>
                                    <div className="lower-1">
                                        <div className='block91 text-animate _100'></div>
                                        <div className='block92 text-animate _99'></div>
                                        <div className='block93 text-animate _98'></div>
                                        <div className='block94 text-animate _97'></div>
                                        <div className='block95 text-animate _96'></div>
                                        <div className='block96 text-animate _95'></div>
                                        <div className='block97 text-animate _94'></div>
                                        <div className='block98 text-animate _93'></div>
                                        <div className='block99 text-animate _92'></div>
                                        <div className='block100 text-animate _91'></div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-side">

                                <div className="rL-1">
                                    <div className='block101 text-animate _101'></div>
                                    <div className='block102 text-animate _102'></div>
                                    <div className='block103 text-animate _103'></div>
                                    <div className='block104 text-animate _104'></div>
                                    <div className='block105 text-animate _105'></div>
                                    <div className='block106 text-animate _106'></div>
                                    <div className='block107 text-animate _107'></div>
                                    <div className='block108 text-animate _108'></div>
                                    <div className='block109 text-animate _109'></div>
                                    <div className='block110 text-animate _110'></div>
                                </div>

                                <div className="rL-2">
                                    <div className='block111 text-animate _120'></div>
                                    <div className='block112 text-animate _119'></div>
                                    <div className='block113 text-animate _118'></div>
                                    <div className='block114 text-animate _117'></div>
                                    <div className='block115 text-animate _116'></div>
                                    <div className='block116 text-animate _115'></div>
                                    <div className='block117 text-animate _114'></div>
                                    <div className='block118 text-animate _113'></div>
                                    <div className='block119 text-animate _112'></div>
                                    <div className='block120 text-animate _111'></div>
                                </div>

                                <div className="rL-3">
                                    <div className='block121 text-animate _121'></div>
                                    <div className='block122 text-animate _122'></div>
                                    <div className='block123 text-animate _123'></div>
                                    <div className='block124 text-animate _124'></div>
                                    <div className='block125 text-animate _125'></div>
                                    <div className='block126 text-animate _126'></div>
                                    <div className='block127 text-animate _127'></div>
                                    <div className='block128 text-animate _128'></div>
                                    <div className='block129 text-animate _129'></div>
                                    <div className='block130 text-animate _130'></div>
                                </div>

                                <div className="rL-4">
                                    <div className='block131 text-animate _140'></div>
                                    <div className='block132 text-animate _139'></div>
                                    <div className='block133 text-animate _138'></div>
                                    <div className='block134 text-animate _137'></div>
                                    <div className='block135 text-animate _136'></div>
                                    <div className='block136 text-animate _135'></div>
                                    <div className='block137 text-animate _134'></div>
                                    <div className='block138 text-animate _133'></div>
                                    <div className='block139 text-animate _132'></div>
                                    <div className='block140 text-animate _131'></div>
                                </div>

                                <div className="rL-5">
                                    <div className='block141 text-animate _141'></div>
                                    <div className='block142 text-animate _142'></div>
                                    <div className='block143 text-animate _143'></div>
                                    <div className='block144 text-animate _144'></div>
                                    <div className='block145 text-animate _145'></div>
                                    <div className='block146 text-animate _146'></div>
                                    <div className='block147 text-animate _147'></div>
                                    <div className='block148 text-animate _148'></div>
                                    <div className='block149 text-animate _149'></div>
                                    <div className='block150 text-animate _150'></div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div> 

            </div>
        </div>

        <div className='home-content'>
            <div className='content-container'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <span className={`${letterClass} _13`}> </span>
                    <span className={`${letterClass} _14`}>i</span>
                    <span className={`${letterClass} _15`}>'m</span>
                    <br/>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={names}
                    idx={16}
                    />
                    <br/>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={title}
                    idx={26}
                    />
                </h1>
                <h3>Full Stack Developer / Javascript Expert</h3>
                <div className='fonts'>
                    <div className='html font'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='css font'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='js font'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='react font'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='bootstrap font'>
                        <FontAwesomeIcon icon={faBootstrap} color='lightblue'/>
                    </div>
                    <div className='git font'>
                        <FontAwesomeIcon icon={faGithubSquare} color='#EC4D28'/>
                    </div>
                </div>
                
            </div>
        </div>
    </main>
}

export default Home;