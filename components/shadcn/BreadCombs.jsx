import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbDemo({ structure }) {
  if (structure?.length === 0) return;
  const formatPreviousLinks = (link) => {
    let selected = [];
    structure?.every((e) => {
      if (e?._id === link) {
        selected.push(e?._id);
        return false;
      } else {
        selected.push(e?._id);
        return true;
      }
    });
    return selected.join("/");
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
