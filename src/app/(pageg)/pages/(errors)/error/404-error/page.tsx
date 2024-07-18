import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-row items-center justify-between h-20 bg-gray-200 w-full fixed bottom-0 px-4">
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

export default function Error404() {
  return (
    <div className="flex justify-center">
      <div className="lg:w-1/2">
        <div className="text-center mt-4">
          <h1 className="text-6xl">404</h1>
          <p className="text-lg">
            This requested URL was not found on this server.
          </p>
          <Link
            href="/"
            className="flex items-center justify-center text-blue-500 hover:text-blue-700"
          >
            <svg
              className="w-4 h-4 mr-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              ></path>
            </svg>
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
