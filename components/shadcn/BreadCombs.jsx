import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbDemo({ structure }) {
  if (structure.length === 0) return;
  const formatPreviousLinks = (link) => {
    let selected = [];
    let linkIndex = structure?.map((e) => e._id).indexOf(link);
    selected = structure
      ?.slice(0, linkIndex + 1)
      ?.map((e) => e?._id)
      .join("/");
    return selected;
  };
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/sales/products/all">
            All folders
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {structure?.map((e, index) => {
          // console.log(e._id);
          const link = formatPreviousLinks(e?._id);
          return (
            <BreadcrumbList key={e?._id}>
              <BreadcrumbItem>
                <BreadcrumbLink href={`/sales/products/folders/${link}`}>
                  {e?.folderName}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index !== structure.length - 1 && <BreadcrumbSeparator />}
            </BreadcrumbList>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
