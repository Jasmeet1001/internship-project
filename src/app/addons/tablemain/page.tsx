import { DataTable } from "@/components/datatables/datatable";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ChartsMain() {
  return (
    <div className="flex flex-col gap-12 m-8 mt-20">
      <div className="flex flex-col">
        <h1 className="text-left font-medium text-4xl pb-2">Charts</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/addons/chartsmain">Charts</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="bg-gray-200 rounded-md p-5">
        Chart.js is a third party plugin that is used to generate the charts in
        this template. The charts below have been customized - for further
        customization options, please visit the official Chart.js documentation
        .
      </div>
      <DataTable></DataTable>
    </div>
  );
}
