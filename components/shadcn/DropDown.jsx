import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Folder } from "lucide-react";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const FolderItem = ({ folder }) => {
  if (folder.subfolders && folder.subfolders.length > 0) {
    return (
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <Folder className="mr-2 h-4 w-4" />
          {folder.folderName}
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            {folder.subfolders.map((subfolder) => (
              <FolderItem key={subfolder._id} folder={subfolder} />
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    );
  }

  return (
    <DropdownMenuItem>
      <Folder className="mr-2 h-4 w-4" />
      {folder.folderName}
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
      >
        <DropdownMenuLabel>Folder Structure</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {folders.map((folder) => (
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
