import Link from "next/link";

const Logo = () => {
  return <div>
    <h1 className="logoText">
      <Link href="/">
        <a>
          <i className="fa-brands fa-github"></i>
          MrWebMD
        </a>
      </Link>
    </h1>
  </div>
}

export default Logo;