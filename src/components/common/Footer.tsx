import Image from "next/image";
import Link from "next/link";
import LOGO from "../../../public/logo.webp";
const Footer = () => {
  return (
    <div className="w-fit">
      <Link href="/" >
        <Image src={LOGO} width={60} height={60} alt="LOGO" />
      </Link>
    </div>
  );
};

export default Footer;