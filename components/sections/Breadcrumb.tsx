import * as Import from "@/components/import";

export default function BreadcrumbComponent() {
  return (
    <Import.Breadcrumb className="mb-4 mt-10">
      <Import.BreadcrumbList className="flex-wrap">
        <Import.BreadcrumbItem className="opacity-50 hover:opacity-100 duration-300 text-sm md:text-base">
          <Import.BreadcrumbLink href="/">Home</Import.BreadcrumbLink>
        </Import.BreadcrumbItem>
        <Import.BreadcrumbSeparator className="opacity-50" />
        <Import.BreadcrumbItem className="opacity-50 hover:opacity-100 duration-300 text-sm md:text-base">
          <Import.BreadcrumbLink href="/">Courses</Import.BreadcrumbLink>
        </Import.BreadcrumbItem>
        <Import.BreadcrumbSeparator className="opacity-50" />
        <Import.BreadcrumbItem className="text-sm md:text-base">
          <Import.BreadcrumbPage>Course Details</Import.BreadcrumbPage>
        </Import.BreadcrumbItem>
      </Import.BreadcrumbList>
    </Import.Breadcrumb>
  );
}
