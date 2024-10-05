import Image from "next/image";
import Link from "next/link";
import LOGO from "../../../public/logo.png";
const Footer = () => {
  return (
    <div className="w-fit">
      <Link href="/" >
        <Image src={LOGO} width={100} height={100} className="w-fit" alt="LOGO" />
      </Link>
    </div>
  );
};

export default Footer;