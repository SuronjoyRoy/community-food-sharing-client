import logo from '../../../../assets/img/logo (2).png';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <img src={logo} alt="" />
                <p>Reg Food Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Add Foods</a>
                <a className="link link-hover">Manage My Foods</a>
                <a className="link link-hover">My Food Request</a>
                <a className="link link-hover">Avaiable Food</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Blogs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;