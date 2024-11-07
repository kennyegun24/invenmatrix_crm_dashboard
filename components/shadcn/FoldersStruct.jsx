import React, { useEffect, useState } from "react";
import { FaChevronRight, FaChevronDown, FaRegFolder } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Items = ({
  folderName,
  subs,
  disabledFolders,
  folder,
  onClick,
  _id,
  setSelectedFolderId,
  selectedFolderId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDisabled = disabledFolders.includes(folder?._id);
  const disabledStyle = {
    color: "var(--disabled-text-color, #888)", // Fallback color if CSS variable is not set
    cursor: "not-allowed",
    opacity: 0.5,
  };

  const handleClick = () => {
    if (!isDisabled) {
      setIsOpen(!isOpen);
    }
  };
  // console.log(first)
  const handleSelect = () => {
    if (!isDisabled) {
      setSelectedFolderId(_id);
    }
  };
  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center p-1 rounded ${
          subs?.length === 0 && "pl-6"
        }
        `}
        style={
          isDisabled
            ? disabledStyle
            : selectedFolderId === _id
            ? selectedStyles
            : {}
        }
      >
        {subs?.length > 0 && (
          <div className="mr-2 ml-[-6px]">
            {folder?.open || isOpen ? (
              <FaChevronDown
                onClick={handleClick}
                className="text-gray-500 p-1 cursor-pointer hover:bg-gray-100 h-[20px] w-[20px] rounded"
              />
            ) : (
              <FaChevronRight
                onClick={handleClick}
                className="text-gray-500 p-1 cursor-pointer hover:bg-gray-100 h-[20px] w-[20px] rounded"
              />
            )}
          </div>
        )}
        <p
          onClick={handleSelect}
          className="cursor-pointer rounded hover:bg-gray-100 flex items-center gap-2"
          style={
            isDisabled
              ? disabledStyle
              : selectedFolderId === _id
              ? selectedStyles
              : { color: "var(--light_text)" }
          }
        >
          <FaRegFolder size={18} className="text-yellow-600" />
          {folderName}
        </p>
      </div>
      {(folder?.open || isOpen) && subs?.length > 0 && (
        <div className="pl-4">
          {subs.map((e) => (
            <Items
              _id={e._id}
              key={e._id}
              folder={e}
              folderName={e.folderName}
              subs={e.subfolders}
              disabledFolders={disabledFolders}
              onClick={onClick}
              setSelectedFolderId={setSelectedFolderId}
              selectedFolderId={selectedFolderId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FoldersStruct = ({
  _id,
  onClick,
  search,
  dialogOpen,
  setSelectedFolderId,
  selectedFolderId,
}) => {
  const { folders } = useSelector((state) => state.folderStructure);
  const [modFolders, setModFolders] = useState([]);
  const [disabledFolders, setDisabledFolders] = useState([]);

  useEffect(() => {
    const newDisabledFolders = getAncestorsAndDescendants(_id, folders);
    setDisabledFolders(newDisabledFolders);
    setModFolders(folders);
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
  const searchFolders = (folders, searchTerm) => {
    const findFoldersWithAncestors = (folderList) => {
      let result = [];

      for (let folder of folderList) {
        // Check if the folder's name contains the search term
        const isMatch = folder.folderName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        // Recursively search in subfolders
        let matchingSubfolders = [];
        if (folder.subfolders?.length > 0) {
          matchingSubfolders = findFoldersWithAncestors(folder.subfolders);
        }

        // If the folder matches or any of its subfolders match, include it in the result
        if (isMatch || matchingSubfolders.length > 0) {
          // Create a copy of the folder, and if it's a match, remove 'subfolders'
          let folderWithoutSubfolders = { ...folder };
          if (isMatch) {
            folderWithoutSubfolders.subfolders = undefined;
          } else if (matchingSubfolders.length > 0) {
            folderWithoutSubfolders.subfolders = matchingSubfolders;
          }

          result.push({ ...folderWithoutSubfolders, open: true });
        }
      }

      return result;
    };

    // Start searching from the root level
    return findFoldersWithAncestors(folders);
  };

  useEffect(() => {
    if (search?.length > 2) {
      const searchedFolder = searchFolders(folders, search);
      setModFolders(searchedFolder);
      return;
    }
    setModFolders(folders);
  }, [search]);
  useEffect(() => {
    setModFolders(folders);
    setSelectedFolderId(null);
  }, [dialogOpen]);
  return (
    <div>
      <span className="text-[14px] font-semibold">All Folders</span>
      <div className="flex flex-col border-l-2 border-gray-300 pl-1 mt-2 max-h-[400px] overflow-y-auto small_scroll">
        {modFolders?.map((e) => (
          <Items
            setSelectedFolderId={setSelectedFolderId}
            selectedFolderId={selectedFolderId}
            onClick={onClick}
            key={e._id}
            folder={e}
            folderName={e.folderName}
            subs={e.subfolders}
            disabledFolders={disabledFolders}
            _id={e._id}
          />
        ))}
      </div>
    </div>
  );
};

export default FoldersStruct;

const selectedStyles = {
  color: "#f98686",
  fontWeight: 700,
};
