import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Vuoi collaborare con me?
                </p>
                <div className='input-areas'>
                    <Button className='btns' buttonSize='btn--large' buttonStyle='btn--outline'> CLICCA QUI </Button>
                </div>
            </section>
            <section class='social-media'>
                <p className='social-media-heading'>
                    I miei canali ufficiali
                </p>
                <div class='social-media-wrap'>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link instagram'
                            to='https://www.instagram.com/bilel.messaudi/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='https://youtube.com/@bilel.messaudi'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link tiktok'
                            to='https://www.tiktok.com/@bilel.messaudi'
                            target='_blank'
                            aria-label='Tiktok'
                        >
                            <i class='fab fa-tiktok' />
                        </Link>
                        <Link
                            class='social-icon-link facebook'
                            to='https://www.facebook.com/bilalmessaoudifb/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='https://www.linkedin.com/in/bilel-messaudi-877a6a183'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                    <div className="footer-website">
                        <small>Copyright © 2023 Bilal Messaoudi</small>
                        <small>MADE WITH ❤️ FROM <Link to='https://wa.me/message/6ZRA7Q6CLTZ5E1' className='website-link' target='_blank'>BM</Link></small>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
