import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function BreadcrumbDemo({ structure }) {
  // const structure = [
  //   {
  //     _id: "1",
  //     folderName: "Folder 1",
  //   },
  //   {
  //     _id: "2",
  //     folderName: "Folder 2",
  //   },
  //   {
  //     _id: "3",
  //     folderName: "Folder 3",
  //   },
  //   {
  //     _id: "4",
  //     folderName: "Folder 4",
  //   },
  // ];
  if (structure.length === 0) return null;

  const formatPreviousLinks = (link) => {
    let selected = [];
    structure.every((e) => {
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
        {structure.length > 0 && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/sales/products/folders/${formatPreviousLinks(
                  structure[structure.length - 1]?._id
                )}`}
              >
                {structure[0]?.folderName}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        {structure.length > 2 && (
          <>
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <BreadcrumbEllipsis className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {structure.slice(1, -1).map((e) => (
                    <DropdownMenuItem key={e?._id}>
                      <BreadcrumbLink
                        href={`/sales/products/folders/${formatPreviousLinks(
                          e?._id
                        )}`}
                      >
                        {e?.folderName}
                      </BreadcrumbLink>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        {structure.length > 1 && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/sales/products/folders/${formatPreviousLinks(
                  structure[structure.length - 1]?._id
                )}`}
              >
                {structure[structure.length - 1]?.folderName}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
