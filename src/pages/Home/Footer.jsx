import { FaLocationDot } from 'react-icons/fa6'
import { BsTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
const Footer = () => {
    return (
        <div data-aos='fade-up'>
            <footer className="footer p-10 bg-base-200">
                <div>
                    <header className="footer-title">Contact Info</header>
                    <p className="flex items-center gap-2"><FaLocationDot></FaLocationDot>Parbatipur, Dinajpur</p>
                    <p className="flex items-center gap-2"><BsTelephoneFill></BsTelephoneFill>+88 01797 581507</p>
                    <p className="flex items-center gap-2"><AiOutlineMail></AiOutlineMail>md.mahfujhasan894@gmail.com</p>
                </div>
                <div>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </div>
                <div>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <header className="footer-title">Newsletter</header>
                    <div className="lg:w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-200 text-base-content">
                <aside>
                    <p>Idea acquire from themeforest websites</p>
                    <p>Copyright © 2023 - All right reserved by concerts and music event</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;