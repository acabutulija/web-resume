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
import emailjs from '@emailjs/browser';

function Homepage() {

    const [menuClicked, setMenuClicked] = useState(false);
    let menuRef = useRef();
    let clsBtnRef = useRef();
    const form = useRef();
    const imeRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();


    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target) && !clsBtnRef.current.contains(e.target)) {
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
        menuClick();
    };

    const menuClick = (e) => {
        if(menuClicked) setMenuClicked(false);
        else setMenuClicked(true);
    }

    const Submit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_a05v5pd', 'template_cfl2m79', form.current, 'R1zoSGiKCsjp3Msez')
        .then((result) => {
            alert("Email poslat.");
        }, (error) => {
          console.log(error.text);
         });

        imeRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';

        return true;
    }

    return ( 
        <div className='main-container d-flex'>
            <Button className='rounded-circle close-btn' ref={clsBtnRef} onClick={(e) => menuClick(e)}><IoReorderThreeOutline size={35} className={menuClicked?'icon1-clicked':'icon1-notclicked'}></IoReorderThreeOutline><RxCross2 size={35} className={menuClicked?'icon1-notclicked':'icon1-clicked'}></RxCross2></Button>
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
                {/* <div className='lang-div'><span><a className='lang-link current' href='/en'>ENG</a> / <a className='lang-link' href='/rs'>SRB</a></span></div> */}
            </div>
            <div className='fake-element'></div>
            <div className='content'>
                <section id='home' className='d-flex flex-column justify-content-center align-items-left'>
                    <div className='home-text d-flex flex-column'>
                        <span className='fs-1 title-name'>Aleksandar Butulija</span>
                        <Typed strings={['Full-stack developer', 'C# app developer', 'Java programmer', 'Hire me!']} typeSpeed={150} backDelay={500} backSpeed={100} loop className='fs-3 subtitle-name'/>
                    </div>
                </section>
                <section id='about'>
                    <h2 className='fs-2 title'>About me</h2>
                    <p className='text'>My name is Aleksandar, I am a student at Faculty of organizational sciences, University of Belgrade. I am majoring information systems and technologies. After I graduate my title will be graduate engineer of information systems.</p>
                    <p className='text'>I do programming, web and desktop development. I am competitive, always ready to learn new skills and gather new experiences.</p>
                    <p className='text'>I participated in many projects regarding web development and case studies. One of my achievements are awards from programming competition called Hakaton ogranizied by FONIS student organization.</p>
                    <p className='text'>I am very communicative and I enjoy working in a team. I am actively looking for a job in my field of work.</p>
                </section>
                <section id='education'>
                    <h2 className='fs-2 title'>Education</h2>
                    <div className='row'>
                        <div className='col-md-6'>
                        <h2 className='fs-3 subtitle'>Faculty</h2>
                            <div className='education-div'>
                                <h4>Faculty of organizational sciences, University of Belgrade</h4>
                                <h5 className='fs-6 year'>2023 - 2027</h5>
                                <p className='text education-text'>Regular student majoring information systems and technologies.</p>
                                <p className='text education-text'>Active in different student organizations in fields of engineering and management.</p>
                            </div>
                        <h2 className='fs-3 subtitle'>High School</h2>
                        <div className='education-div'>
                            <h4>THIRD BELGRADE GYMNASIUM - IT CLASS</h4>
                            <h5 className='fs-6 year'>2019 - 2023</h5>
                            <p className='text education-text'>First generation of students to complete 4 year study program that is specialized for those talented in IT sciences.</p>
                            <p className='text education-text'>During the studies we had an opportunity to learn to program in C++, C#, Java and to get experiences in the field of Web and App development.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                        <h2 className='fs-3 subtitle'>Programming School</h2>
                        <div className='education-div'>
                            <h4>SYSTEM PRO</h4>
                            <h5 className='fs-6 year'>2017 - 2022</h5>
                            <p className='text education-text'>SystemPro is the first and oldest programming school for children in Belgrade and Serbia (founded in 2002) with a long and successful tradition of educating future programmers.</p>
                            <p className='text education-text'>It was my stepping stone for the world of software engineering.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='skills'>
                    <h2 className='fs-2 title'>Skills</h2>
                    <p className='text'>I know a large number of programming languages and tools. Below you can see how confident I am in individual technologies. Please, check out my projects on my <a href='https://github.com/acabutulija'>Github</a> profile.</p>
                    <div className='row skills-divs'>
                        <div className='col-sm-4'>
                            {/* <div className='skill-div'>
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
                            </div> */}
                            <div className='card border-primary'>
                                <img className='card-img-top'/>
                                <div className='card-body'>
                                    <h5 className='card-title'>React JS/TS</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            {/* <div className='skill-div'>
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
                            </div> */}
                        </div>
                        <div className='col-sm-4'>

                        </div>
                    </div>
                </section>
                <section className='contact' id='contact'>
                    <h2 className='fs-2 title'>Contact</h2>
                    <p className='text'>Feel free to contact me!</p>
                    
                    <div className="row" data-aos="fade-in">

                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="" method="post" role="form" ref={form} onSubmit={e => Submit(e)} className="php-email-form">
                    <div className="row">
                        <div className="form-group col-md-6">
                        <label htmlFor="user_name">Your name</label>
                        <input type="text" name="user_name" ref={imeRef} className="form-control" id="name" required/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="user_email">Your email</label>
                        <input type="email" className="form-control" ref={emailRef} name="user_email" id="email" required/>
                        </div>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="name">Tema</label>
                        <input type="text" className="form-control" name="subject" id="subject" required/>
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" name="message" ref={messageRef} rows="10" required></textarea>
                    </div>
                    <div className="text-center"><button type="submit">Send</button></div>
                    </form>
                </div>

                <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                    {/* <div className="address">
                        <i className="bi bi-geo-alt"></i>
                        <h4>Location:</h4>
                        <p>Beograd, 11070</p>
                    </div> */}

                    <div className="email">
                        <i className="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>aca.butulija@gmail.com</p>
                    </div>

                    <div className="phone">
                        <i className="bi bi-phone"></i>
                        <h4>Phone:</h4>
                        <p>+381 66 434 164</p>
                    </div>
                    </div>

                </div>

                </div>
                </section>
            </div>
        </div>
    );
}

export default Homepage;