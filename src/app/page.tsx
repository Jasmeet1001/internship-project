import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ChartLine } from "@/components/ui/charts/chartline";
import { ChartBar } from "@/components/ui/charts/chartbar";
import { DataTable } from "@/components/datatables/datatable";
import Footer from "@/components/footer";

export default function Admin() {
  return (
    <>
      <div className="flex flex-col gap-12 m-8 mt-20">
        <div className="flex flex-col">
          <h1 className="text-left font-medium text-4xl">Dashboard</h1>
          <p className="text-left font-extralight text-sm">Dashboard</p>
        </div>
        <div id="cards" className="flex flex-row h-32 gap-12 text-white">
          <div className="flex flex-col items-start justify-end h-full bg-blue-600 border-2 rounded-md w-96 p-3">
            <div className="w-full pb-7">Primary Card</div>
            <div className="flex flex-row w-full">
              <Link
                href="#"
                className="font-extralight text-sm pt-2 w-full underline border-t-2"
              >
                view details
              </Link>
              <ChevronRight className="pt-3"></ChevronRight>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end h-full bg-yellow-400 border-2 rounded-md w-96 p-3">
            <div className="w-full pb-7">Warning Card</div>
            <div className="flex flex-row w-full">
              <Link
                href="#"
                className="font-extralight text-sm pt-2 w-full underline border-t-2"
              >
                view details
              </Link>
              <ChevronRight className="pt-3"></ChevronRight>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end h-full bg-green-600 border-2 rounded-md w-96 p-3">
            <div className="w-full pb-7">Success Card</div>
            <div className="flex flex-row w-full">
              <Link
                href="#"
                className="font-extralight text-sm pt-2 w-full underline border-t-2"
              >
                view details
              </Link>
              <ChevronRight className="pt-3"></ChevronRight>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end h-full bg-red-700 border-2 rounded-md w-96 p-3">
            <div className="w-full pb-7">Danger Card</div>
            <div className="flex flex-row w-full">
              <Link
                href="#"
                className="font-extralight text-sm pt-2 w-full underline border-t-2"
              >
                view details
              </Link>
              <ChevronRight className="pt-3"></ChevronRight>
            </div>
          </div>
        </div>
        <div id="charts" className=" flex flex-row gap-4 h-full w-full">
          <div className="w-full">
            <ChartLine></ChartLine>
          </div>
          <div className="w-full">
            <ChartBar></ChartBar>
          </div>
        </div>
        <div className="border-2 border-gray-300 rounded-lg p-2 drop-shadow-md">
          <DataTable></DataTable>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
