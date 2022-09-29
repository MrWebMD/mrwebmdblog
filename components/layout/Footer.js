import Logo from "./Logo";

const Footer = () => {
  return   <footer className="pageFooter">
  <Logo/>
  <p className="pageFooter__description">
    This theme is courtesy of <a href="https://bleepingcomputer.com" target="_blank" rel="noreferrer">BleepingComputer</a>. 
    Made with <i className="fa-solid fa-heart"></i> by <a href="https://github.com/MrWebMD/mrwebmdblog">MrWebMD</a>
  </p>
</footer>
}

export default Footer;