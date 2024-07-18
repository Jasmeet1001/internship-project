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

export default function Login() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col h-[350px] w-[550px] rounded-md bg-white mt-10">
          <div className="text-center text-4xl mt-4 border-b-2 pb-5">
            Password Recovery
          </div>
          <form
            action=""
            method="post"
            className="flex flex-col px-5 pt-8 gap-y-7"
          >
            <p className="font-extralight text-sm text-gray-400">
              Enter your email address and we will send you a link to reset your
              password.
            </p>
            <input
              type="text"
              placeholder="email address"
              className="border-2 border-gray-200 rounded-md w-full h-12 px-5"
            />
            <div className="flex justify-between">
              <Link href="#" className="text-blue-500 underline pt-2">
                Return to login
              </Link>
              <div className="bg-blue-600 rounded-md">
                <input
                  type="button"
                  value="Reset Password"
                  className="p-2 text-white"
                />
              </div>
            </div>
          </form>
          <div className="flex items-center justify-center mt-4 pt-4 border-t-2">
            <Link href="#" className="text-blue-500 underline">
              Need an account? Sign up!
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
