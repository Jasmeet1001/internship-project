import BreadcrumbS from "@/components/customcomp/breadnav";

export default function StaticNavigation() {
  return (
    <div className="flex flex-col gap-12 m-8 mt-20">
      <div className="flex flex-col">
        <h1 className="text-left font-medium text-4xl pb-2">
          Static Navigation
        </h1>
        <BreadcrumbS></BreadcrumbS>
      </div>
      <div className="bg-gray-200 rounded-md p-5">
        This page is an example of using static navigation. By removing the
        .sb-nav-fixed class from the body , the top navigation and side
        navigation will become static on scroll. Scroll down this page to see an
        example.
      </div>
      <div className="bg-gray-200 rounded-md p-5 mt-96">
        This page is an example of using static navigation. By removing the
        .sb-nav-fixed class from the body , the top navigation and side
        navigation will become static on scroll. Scroll down this page to see an
        example.
      </div>
    </div>
  );
}
