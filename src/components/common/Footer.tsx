import Image from "next/image";
import Link from "next/link";
import LOGO from "../../../public/logo.png";
const Footer = () => {
  return (
    <div>
      <Link href="/">
        <Image src={LOGO} width={100} height={100} alt="LOGO" />
      </Link>
    </div>
  );
};

export default Footer;
