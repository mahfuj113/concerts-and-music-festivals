import { FaLocationDot } from 'react-icons/fa6'
import { BsTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <header className="footer-title">Contact Info</header>
                    <p className="flex items-center gap-2"><FaLocationDot></FaLocationDot>Parbatipur, Dinajpur</p>
                    <p className="flex items-center gap-2"><BsTelephoneFill></BsTelephoneFill>+88 01797 581507</p>
                    <p className="flex items-center gap-2"><AiOutlineMail></AiOutlineMail>md.mahfujhasan894@gmail.com</p>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </fieldset>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-200 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by concerts and music event</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;