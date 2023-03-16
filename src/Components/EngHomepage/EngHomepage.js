import React, {useState, useEffect, useRef} from 'react';
import './Homepage.css';
import './Homepage_Nav.css';
import {AiFillHome, AiFillGithub} from 'react-icons/ai';
import {FaScroll, FaLaptopCode} from 'react-icons/fa';
import {IoSchool, IoReorderThreeOutline} from 'react-icons/io5';
import {MdEmail} from 'react-icons/md';
import {RxCross2} from 'react-icons/rx';
import Typed from 'react-typed';
import Button from 'react-bootstrap/Button';

function Homepage() {

    const [menuClicked, setMenuClicked] = useState(false);
    let menuRef = useRef();
    
    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)) {
                setMenuClicked(false);
            }
        }
        document.addEventListener("mousedown", handler);
    })

    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const menuClick = (e) => {
        if(menuClicked) setMenuClicked(false);
        else setMenuClicked(true);
    }

    const Submit = (e) => {
        e.preventDefault();
        return false;
    }

    return ( 
        <div className='main-container d-flex'>
            <Button className='rounded-circle close-btn' onClick={(e) => menuClick(e)}><IoReorderThreeOutline size={35} className={menuClicked?'icon1-clicked':'icon1-notclicked'}></IoReorderThreeOutline><RxCross2 size={35} className={menuClicked?'icon1-notclicked':'icon1-clicked'}></RxCross2></Button>
            <div className={menuClicked ? 'sidebar pt-4 p-2 d-flex flex-column clicked' : 'sidebar pt-4 p-2 d-flex flex-column'} id='side_nav' ref={menuRef}>
                <div className='header-box text-center'>
                    <img className='profile-pic img-fluid rounded-circle' src={require('../../Resources/20220327_192932.jpg')}></img>
                    <h1 className='fs-3 text-white'>Aleksandar Butulija</h1>
                </div>
                <div className='links-div d-flex flex-column justify-content-between'>
                    <a className='nav-link scrollto' onClick={() => handleClickScroll('home')}><AiFillHome size={20} className='link-icon'></AiFillHome><span className='link-text'>Home</span></a>
                    <a className='nav-link scrollto' onClick={() => handleClickScroll('about')}><FaScroll size={20} className='link-icon'></FaScroll>About</a>
                    <a className='nav-link' href='https://github.com/acabutulija' target={'_blank'}><AiFillGithub size={20} className='link-icon'></AiFillGithub>Github</a>
                    <a className='nav-link scrollto' onClick={() => handleClickScroll('education')}><IoSchool size={20} className='link-icon'></IoSchool>Education</a>
                    <a className='nav-link scrollto' onClick={() => handleClickScroll('skills')}><FaLaptopCode size={20} className='link-icon'></FaLaptopCode>Skills</a>
                    <a className='nav-link scrollto' onClick={() => handleClickScroll('contact')}><MdEmail size={20} className='link-icon'></MdEmail>Contact</a>
                </div>
                <div className='lang-div'><span><a className='lang-link' href='/rs'>SRB</a> / <a className='lang-link current' href='/en'>ENG</a></span></div>
            </div>
            <div className='fake-element'></div>
            <div className='content'>
                <section id='home' className='d-flex flex-column justify-content-center align-items-left'>
                    <div className='home-text d-flex flex-column'>
                        <span className='fs-1 title-name'>Aleksandar Butulija</span>
                        <Typed strings={['programming', 'programmer']} typeSpeed={150} backDelay={500} backSpeed={100} loop className='fs-3 subtitle-name'/>
                    </div>
                </section>
                <section id='about'>
                    <h2 className='fs-2 title'>About me</h2>
                    <p className='text'>I am highly interested in programming and development of web, desktop applications and artificial intelligence. I am very competitive and I like to compete and thus acquire new knowledge in various fields of programming. I plan to continue working in this business and working on developing technologies.</p>
                    <p className='text'>I am social and communicative, I enjoy in working with other people.</p>
                </section>
                <section id='education'>
                    <h2 className='fs-2 title'>Education</h2>
                    <div className='row'>
                        <div className='col-md-6'>
                        <h2 className='fs-3 subtitle'>High School</h2>
                        <div className='education-div'>
                            <h4>THIRD BELGRADE GYMNASIUM - IT CLASS</h4>
                            <h5 className='fs-6 year'>2019 - 2023</h5>
                            <p className='text education-text'>Students in this high school are educated in three departments: natural-mathematical, social-linguistic and IT. The program consists of compulsory subjects such as Serbian language, history, mathematics and physics, as well as optional subjects that differ depending on the major.</p>
                            <p className='text education-text'>Along with regular classes, students have the opportunity to participate in various interesting activities and projects, such as debate club, math Olympiad, programming, creative writing, drama section and others. Also, the school has good cooperation with foreign schools and organizations, which enables students to gain international experience and improve their knowledge of foreign languages.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                        <h2 className='fs-3 subtitle'>Programming School</h2>
                        <div className='education-div'>
                            <h4>SYSTEM PRO</h4>
                            <h5 className='fs-6 year'>2017 - 2022</h5>
                            <p className='text education-text'>SystemPro is the first and oldest programming school for children in Belgrade and Serbia (founded in 2002) with a long and successful tradition of educating future programmers.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='skills'>
                    <h2 className='fs-2 title'>Skills</h2>
                    <p className='text'>I know a large number of programming languages and tools. Below you can see how confident I am in individual technologies.</p>
                    <div className='row skills-divs'>
                        <div className='col-md-6'>
                            <div className='skill-div'>
                                <h5 className='tech'>HTML<span className='percentage'>100%</span></h5>
                                <div className='bar'><div className='bar-mini p100'></div></div>
                            </div>
                            <div className='skill-div'>
                                <h5 className='tech'>CSS / BOOTSTRAP<span className='percentage'>60%</span></h5>
                                <div className='bar'><div className='bar-mini p60'></div></div>
                            </div>
                            <div className='skill-div'>
                                <h5 className='tech'>REACT / JS<span className='percentage'>75%</span></h5>
                                <div className='bar'><div className='bar-mini p75'></div></div>
                            </div>
                            <div className='skill-div'>
                                <h5 className='tech'>SPRING BOOT<span className='percentage'>80%</span></h5>
                                <div className='bar'><div className='bar-mini p80'></div></div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='skill-div'>
                                <h5 className='tech'>C++<span className='percentage'>90%</span></h5>
                                <div className='bar'><div className='bar-mini p90'></div></div>
                            </div>
                            <div className='skill-div'>
                                <h5 className='tech'>C#<span className='percentage'>100%</span></h5>
                                <div className='bar'><div className='bar-mini p100'></div></div>
                            </div>
                            <div className='skill-div'>
                                <h5 className='tech'>JAVA<span className='percentage'>80%</span></h5>
                                <div className='bar'><div className='bar-mini p80'></div></div>
                            </div>
                            <div className='skill-div'>
                                <h5 className='tech'>SQL<span className='percentage'>70%</span></h5>
                                <div className='bar'><div className='bar-mini p70'></div></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='contact' id='contact'>
                    <h2 className='fs-2 title'>Contact</h2>
                    <p className='text'>Feel free to contact me!</p>
                    
                    <div className="row" data-aos="fade-in">
                <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                    <div className="address">
                        <i className="bi bi-geo-alt"></i>
                        <h4>Location:</h4>
                        <p>Beograd, 11000</p>
                    </div>

                    <div className="email">
                        <i className="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>aca.butulija@gmail.com</p>
                    </div>

                    <div className="phone">
                        <i className="bi bi-phone"></i>
                        <h4>Phone:</h4>
                        <p>+1 5589 55488 55s</p>
                    </div>
                    </div>

                </div>

                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form action="" method="post" role="form" onSubmit={e => Submit(e)} className="php-email-form">
                    <div className="row">
                        <div className="form-group col-md-6">
                        <label htmlFor="name">Your name</label>
                        <input type="text" name="name" className="form-control" id="name" required/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="name">Your email</label>
                        <input type="email" className="form-control" name="email" id="email" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Subject</label>
                        <input type="text" className="form-control" name="subject" id="subject" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Message</label>
                        <textarea className="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div className="text-center"><button type="submit">Send</button></div>
                    </form>
                </div>

                </div>
                </section>
            </div>
        </div>
    );
}

export default Homepage;