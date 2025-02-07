import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareWhatsapp } from "react-icons/fa6";


export default function SocialMedia() {
  return (
    <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-inline gap-4 pt-3">
      <li className="mb-4">
        <Link href="#" className="hover:underline">
          <RiTwitterXLine
            name="twitter"
            title="twitter"
            width={16}
            height={16}
          />
        </Link>
      </li>
      <li className="mb-4">
        <Link href="#" className="hover:underline">
          <FaInstagramSquare
            name="instagram"
            title="instagram"
            width={16}
            height={16}
          />
        </Link>
      </li>
      <li className="mb-4">
        <Link href="#" className="hover:underline">
          <FaSquareFacebook
            name="facebook"
            title="facebook"
            width={16}
            height={16}
          />
        </Link>
      </li>
      <li className="mb-4">
        <Link href="#" className="hover:underline">
          <FaSquareWhatsapp
            name="whatsapp"
            title="whatsapp"
            width={16}
            height={16}
          />
        </Link>
      </li>
    </ul>
  );
}
