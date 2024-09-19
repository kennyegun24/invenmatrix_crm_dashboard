import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Folder } from "lucide-react";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const FolderItem = ({ folder }) => {
  if (folder?.subfolders && folder?.subfolders?.length > 0) {
    return (
      <DropdownMenuSub>
        <DropdownMenuSubTrigger
          style={{
            "--hover_text_color": "var(--opposite_text)",
          }}
          className="dropdown-hover"
        >
          <Folder className="mr-2 h-4 w-4" />
          {folder.folderName}
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent
            style={{
              backgroundColor: "var(--sub_bg)",
              color: "var(--text_color)",
              border: "var(--light_border)",
              "--hover_text_color": "var(--opposite_text)",
            }}
          >
            {folder?.subfolders?.map((subfolder) => (
              <FolderItem key={subfolder._id} folder={subfolder} />
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    );
  }

  return (
    <DropdownMenuItem className="dropdown-hover">
      <Folder className="mr-2 h-4 w-4" />
      {folder?.folderName}
    </DropdownMenuItem>
  );
};

export const NestedFolderDropdown = ({ folders, isLoading, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
      <DropdownMenuTrigger asChild>
        <p
          className="font14 pointer flex align_center justify_between"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {text}
          <FaAngleRight />
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        align="center"
        side="right"
        className="w-56"
        style={{
          backgroundColor: "var(--sub_bg)",
          color: "var(--text_color)",
          border: "var(--light_border)",
          "--hover_text_color": "var(--opposite_text)",
        }}
      >
        <DropdownMenuLabel>Folder Structure</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {folders?.map((folder) => (
            <FolderItem key={folder._id} folder={folder} />
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export function ChadcnDropdownMenu({ text, folders, isLoading }) {
  return (
    <NestedFolderDropdown folders={folders} text={text} isLoading={isLoading} />
  );
}
