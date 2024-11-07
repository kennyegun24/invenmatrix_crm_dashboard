// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuSeparator,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Folder } from "lucide-react";
// import { useState } from "react";
// import { FaAngleRight } from "react-icons/fa6";

// const FolderItem = ({ folder, onClick, disabledFolders }) => {
//   const isDisabled = disabledFolders.includes(folder?._id);
//   // console.log(isDisabled);
//   if (folder?.subfolders && folder?.subfolders?.length > 0) {
//     return (
//       <DropdownMenuSub>
//         <DropdownMenuSubTrigger
//           style={{
//             "--hover_text_color": "var(--opposite_text)",
//           }}
//           className="dropdown-hover"
//           onClick={() => onClick(folder?._id)}
//           disabled={isDisabled}
//         >
//           <Folder className="mr-2 h-4 w-4" />
//           {folder.folderName}
//         </DropdownMenuSubTrigger>
//         <DropdownMenuPortal>
//           <DropdownMenuSubContent
//             style={{
//               backgroundColor: "var(--sub_bg)",
//               color: "var(--text_color)",
//               border: "var(--light_border)",
//               "--hover_text_color": "var(--opposite_text)",
//             }}
//           >
//             {folder?.subfolders?.map((subfolder) => (
//               <FolderItem
//                 onClick={onClick}
//                 key={subfolder._id}
//                 folder={subfolder}
//                 disabledFolders={disabledFolders}
//               />
//             ))}
//           </DropdownMenuSubContent>
//         </DropdownMenuPortal>
//       </DropdownMenuSub>
//     );
//   }

//   return (
//     <DropdownMenuItem
//       onClick={() => onClick(folder?._id)}
//       className="dropdown-hover"
//     >
//       <Folder className="mr-2 h-4 w-4" />
//       {folder?.folderName}
//     </DropdownMenuItem>
//   );
// };

// export const NestedFolderDropdown = ({ folders, isLoading, text, onClick }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [disabledFolders, setDisabledFolders] = useState([]);
//   const handleFolderClick = (folderId) => {
//     const newDisabledFolders = getAncestorsAndDescendants(folderId, folders);
//     setDisabledFolders(newDisabledFolders);
//     onClick(folderId);
//   };
//   const getAncestorsAndDescendants = (folderId, folders) => {
//     console.log(folderId);
//     let result = [];
//     const traverse = (folder) => {
//       result.push(folder._id);
//       if (folder.subfolders && folder.subfolders.length > 0) {
//         folder.subfolders.forEach((subfolder) => traverse(subfolder));
//       }
//     };

//     folders.forEach((folder) => {
//       if (folder._id === folderId) {
//         traverse(folder);
//       }
//     });

//     return result;
//   };

//   return (
//     <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
//       <DropdownMenuTrigger asChild>
//         <p
//           className="font14 pointer flex align_center justify_between"
//           onMouseEnter={() => setIsOpen(true)}
//           onMouseLeave={() => setIsOpen(false)}
//         >
//           {text}
//           <FaAngleRight />
//         </p>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent
//         onMouseEnter={() => setIsOpen(true)}
//         onMouseLeave={() => setIsOpen(false)}
//         align="center"
//         side="right"
//         className="w-56"
//         style={{
//           backgroundColor: "var(--sub_bg)",
//           color: "var(--text_color)",
//           border: "var(--light_border)",
//           "--hover_text_color": "var(--opposite_text)",
//         }}
//       >
//         <DropdownMenuLabel>Folder Structure</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           {folders?.map((folder) => (
//             <FolderItem
//               onClick={onClick}
//               key={folder._id}
//               folder={folder}
//               disabledFolders={disabledFolders}
//             />
//           ))}
//         </DropdownMenuGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };

// export function ChadcnDropdownMenu({ text, folders, isLoading, onClick }) {
//   return (
//     <NestedFolderDropdown
//       onClick={onClick}
//       folders={folders}
//       text={text}
//       isLoading={isLoading}
//     />
//   );
// }

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
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const FolderItem = ({ folder, onClick, disabledFolders }) => {
  const isDisabled = disabledFolders.includes(folder?._id);
  const disabledStyle = {
    color: "var(--disabled-text-color, #888)", // Fallback color if CSS variable is not set
    cursor: "not-allowed",
    opacity: 0.5,
  };
  if (folder?.subfolders && folder?.subfolders?.length > 0) {
    return (
      <DropdownMenuSub>
        <DropdownMenuSubTrigger
          style={{
            "--hover_text_color": "var(--opposite_text)",
            ...(isDisabled ? disabledStyle : {}),
          }}
          className="dropdown-hover"
          onClick={() => onClick(folder?._id)}
          disabled={isDisabled}
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
              <FolderItem
                onClick={onClick}
                key={subfolder._id}
                folder={subfolder}
                disabledFolders={disabledFolders}
              />
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    );
  }

  return (
    <DropdownMenuItem
      onClick={() => onClick(folder?._id)}
      className="dropdown-hover"
      disabled={isDisabled}
    >
      <Folder className="mr-2 h-4 w-4" />
      {folder?.folderName}
    </DropdownMenuItem>
  );
};

export const NestedFolderDropdown = ({
  folders,
  isLoading,
  text,
  onClick,
  _id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [disabledFolders, setDisabledFolders] = useState([]);

  useEffect(() => {
    const newDisabledFolders = getAncestorsAndDescendants(_id, folders);
    setDisabledFolders(newDisabledFolders);
    // console.log(newDisabledFolders);
  }, [_id, folders]);

  const getAncestorsAndDescendants = (folderId, folders) => {
    let result = [];
    let ancestors = [];

    // Find ancestors recursively by traversing the tree
    const findAncestors = (folder, path = []) => {
      if (folder._id === folderId) {
        ancestors = path.map((ancestor) => ancestor._id);
      }
      folder.subfolders?.forEach((subfolder) =>
        findAncestors(subfolder, [...path, folder])
      );
    };

    // Traverse descendants starting from the clicked folder
    const traverseDescendants = (folder) => {
      result.push(folder._id);
      folder.subfolders?.forEach((subfolder) => traverseDescendants(subfolder));
    };

    folders.forEach((folder) => {
      findAncestors(folder);
      if (folder._id === folderId) {
        traverseDescendants(folder);
      }
    });

    // Include the clicked folder itself in the disabled list
    return [...result, ...ancestors, folderId];
  };

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
            <FolderItem
              onClick={onClick}
              key={folder._id}
              folder={folder}
              disabledFolders={disabledFolders}
            />
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export function ChadcnDropdownMenu({ text, folders, isLoading, onClick, _id }) {
  return (
    <NestedFolderDropdown
      _id={_id}
      onClick={onClick}
      folders={folders}
      text={text}
      isLoading={isLoading}
    />
  );
}
