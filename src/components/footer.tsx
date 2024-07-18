import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-row items-center justify-between h-20 bg-gray-200 w-full">
      <div>Copyright © Your Website 2023</div>
      <div>
        <Link href="#" className="underline text-blue-500 ">
          Privacy Policy
        </Link>
        ·
        <Link href="#" className="underline text-blue-500">
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
}
