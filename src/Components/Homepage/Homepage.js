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
                    <a className='nav-link scrollto' onClick={() => handleClickScroll('home')}><AiFillHome size={20} className='link-icon'></AiFillHome><span className='link-text'>Početna</span></a>
                    <a className='nav-link scrollto' onClick={() => handleClickScroll('about')}><FaScroll size={20} className='link-icon'></FaScroll>O Meni</a>
                    <a className='nav-link' href='https://github.com/acabutulija' target={'_blank'}><AiFillGithub size={20} className='link-icon'></AiFillGithub>Github</a>
                    <a className='nav-link scrollto' onClick={() => handleClickScroll('education')}><IoSchool size={20} className='link-icon'></IoSchool>Edukacija</a>
                    <a className='nav-link scrollto' onClick={() => handleClickScroll('skills')}><FaLaptopCode size={20} className='link-icon'></FaLaptopCode>Veštine</a>
                    <a className='nav-link scrollto' onClick={() => handleClickScroll('contact')}><MdEmail size={20} className='link-icon'></MdEmail>Kontakt</a>
                </div>
                <div className='lang-div'><span><a className='lang-link current' href='/rs'>SRB</a> / <a className='lang-link' href='/en'>ENG</a></span></div>
            </div>
            <div className='fake-element'></div>
            <div className='content'>
                <section id='home' className='d-flex flex-column justify-content-center align-items-left'>
                    <div className='home-text d-flex flex-column'>
                        <span className='fs-1 title-name'>Aleksandar Butulija</span>
                        <Typed strings={['programator', 'programer']} typeSpeed={150} backDelay={500} backSpeed={100} loop className='fs-3 subtitle-name'/>
                    </div>
                </section>
                <section id='about'>
                    <h2 className='fs-2 title'>O Meni</h2>
                    <p className='text'>Veoma sam zainteresovan za programiranje i razvoj web, desktop aplikacija i veštačke inteligencije. Veoma sam kompetativan i volim da se takmičim i tako stičem nova znanja iz raznih oblasti programiranja. Planiram da nastavim da se bavim ovim poslom i da radim na razvoju tehnologija.</p>
                    <p className='text'>Veoma sam druželjubiv i komunikativan, uživam u radu sa drugim ljudima.</p>
                </section>
                <section id='education'>
                    <h2 className='fs-2 title'>Edukacija</h2>
                    <div className='row'>
                        <div className='col-md-6'>
                        <h2 className='fs-3 subtitle'>Srednja škola</h2>
                        <div className='education-div'>
                            <h4>TREĆA BEOGRADSKA GIMNAZIJA - IT SMER</h4>
                            <h5 className='fs-6 year'>2019 - 2023</h5>
                            <p className='text education-text'>Učenici se u ovoj gimnaziji obrazuju u tri odeljenja: prirodno-matematičkom, društveno-jezičkom i IT smeru. Program se sastoji od obaveznih predmeta poput srpskog jezika, istorije, matematike i fizike, kao i izbornih predmeta koji se razlikuju u zavisnosti od smera.</p>
                            <p className='text education-text'>Uz redovnu nastavu, učenici imaju priliku da učestvuju u raznim interesantnim aktivnostima i projektima, poput debatnog kluba, olimpijade iz matematike, programiranja, kreativnog pisanja, dramske sekcije i drugih. Takođe, škola ima dobru saradnju sa stranim školama i organizacijama, što omogućava učenicima da stiču internacionalno iskustvo i usavršavaju znanje stranih jezika.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                        <h2 className='fs-3 subtitle'>Škola Programiranja</h2>
                        <div className='education-div'>
                            <h4>SYSTEM PRO</h4>
                            <h5 className='fs-6 year'>2017 - 2022</h5>
                            <p className='text education-text'>SystemPro je prva i najstarija škola programiranja za decu u Beogradu i Srbiji (osnovana 2002.) sa dugom i uspešnom tradicijom obrazovanja budućih programera.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='skills'>
                    <h2 className='fs-2 title'>Veštine</h2>
                    <p className='text'>Poznajem veliki broj programskih jezika i alata. Dole možete videti koliko sam pouzdan u pojedinacnim tehnologijama.</p>
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
                    <h2 className='fs-2 title'>Kontakt</h2>
                    <p className='text'>Ne ustrucavajte se da mi pišete.</p>
                    
                    <div className="row" data-aos="fade-in">
                <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                    <div className="address">
                        <i className="bi bi-geo-alt"></i>
                        <h4>Lokacija:</h4>
                        <p>Beograd, 11000</p>
                    </div>

                    <div className="email">
                        <i className="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>aca.butulija@gmail.com</p>
                    </div>

                    <div className="phone">
                        <i className="bi bi-phone"></i>
                        <h4>Telefon:</h4>
                        <p>+1 5589 55488 55s</p>
                    </div>
                    </div>

                </div>

                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form action="" method="post" role="form" onSubmit={e => Submit(e)} className="php-email-form">
                    <div className="row">
                        <div className="form-group col-md-6">
                        <label htmlFor="name">Vaše ime</label>
                        <input type="text" name="name" className="form-control" id="name" required/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="name">Vaš email</label>
                        <input type="email" className="form-control" name="email" id="email" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Tema</label>
                        <input type="text" className="form-control" name="subject" id="subject" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Poruka</label>
                        <textarea className="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div className="text-center"><button type="submit">Pošalji</button></div>
                    </form>
                </div>

                </div>
                </section>
            </div>
        </div>
    );
}

export default Homepage;