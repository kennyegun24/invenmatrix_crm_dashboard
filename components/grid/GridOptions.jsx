import React, { useContext, useEffect, useState } from "react";
import { Popover } from "antd";
import { ChadcnDropdownMenu } from "../shadcn/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { storeFolders } from "@/redux/Breadcrumbs";
import { usePathname } from "next/navigation";
import AlertDialogDemo from "../shadcn/FolderActionDialogue";
import { confirmMoveFolder, confirmCopyFolder } from "../shadcn/helper";
import { RequestSpinnerContext } from "@/contexts/RequestSpinner";
import NewBundleDialogue from "../shadcn/NewBundle";
import { MoveFolderDialog } from "../shadcn/Dialogue";
export const GridProductOptions = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const { folders, loading } = useSelector((state) => state.folderStructure);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storeFolders(folders));
  }, []);
  const content = () => {
    return (
      <div className="flex column gap05rem options_pop_up">
        <div className="flex column">
          <p className="font14 pointer">Edit product</p>
          <ChadcnDropdownMenu
            text={"Copy to folder"}
            isLoading={loading}
            folders={folders}
          />
        </div>
        <hr className="horizontal_line" />
        <div>
          <NewBundleDialogue>
            <p className="font14 pointer">Create a bundle with this product</p>
          </NewBundleDialogue>
          <p className="font14 pointer">Create a kit</p>
        </div>
        <hr className="horizontal_line" />
        <div>
          <p className="font14 pointer">Delete</p>
        </div>
      </div>
    );
  };
  return (
    <Popover
      content={content}
      title="Product Actions"
      trigger="contextMenu"
      open={open}
      onOpenChange={handleOpenChange}
      placement="right"
      arrow={false}
    >
      {children}
    </Popover>
  );
};

export const GridFolderOptions = ({ children, _id, folderName }) => {
  const [open, setOpen] = useState(false);
  const [isMoveDialogOpen, setIsMoveDialogOpen] = useState(false);
  const [isCopyDialogOpen, setIsCopyDialogOpen] = useState(false);
  const { setRequested } = useContext(RequestSpinnerContext);
  const pathname = usePathname();
  const pathArray = pathname.split("/");
  const oldFolder = pathArray[pathArray.length - 1];

  const [folderDetails, setFolderDetails] = useState({
    folderName: folderName,
    newParentFolderId: null,
    folderId: _id,
    oldParentFolderId: pathArray.includes("all") ? null : oldFolder,
  });

  const { folders, loading } = useSelector((state) => state.folderStructure);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeFolders(folders));
  }, [dispatch, folders]);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const onSelectFolder = async (param, actionType) => {
    if (actionType === "move") {
      setIsMoveDialogOpen(true);
    } else if (actionType === "copy") {
      setIsCopyDialogOpen(true);
    }

    setFolderDetails((prev) => ({
      ...prev,
      newParentFolderId: param,
    }));
  };
  // console.log(folderDetails);
  const content = () => {
    return (
      <div className="flex column gap05rem options_pop_up">
        <div className="flex column">
          <p className="font14 pointer">Edit folder</p>
          <MoveFolderDialog
            text={`Move to folder`}
            isLoading={loading}
            folders={folders}
            onClick={(param) => onSelectFolder(param, "move")}
            _id={_id}
          />
          {!pathname.includes("all") && (
            <>
              <ChadcnDropdownMenu
                text={"Copy to folder"}
                isLoading={loading}
                folders={folders}
                onClick={(param) => onSelectFolder(param, "copy")}
              />
              <div>
                <p className="font14 pointer">Remove from folder</p>
              </div>
            </>
          )}
        </div>
        <hr className="horizontal_line" />
        <div>
          <p className="font14 pointer">Delete</p>
        </div>
      </div>
    );
  };

  return (
    <Popover
      content={content}
      title="Folder Actions"
      trigger="contextMenu"
      arrow={false}
      placement="right"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <AlertDialogDemo
        text={"move"}
        isDialogOpen={isMoveDialogOpen}
        setIsDialogOpen={setIsMoveDialogOpen}
        onConfirm={() => confirmMoveFolder(folderDetails, setRequested)}
      />
      <AlertDialogDemo
        text={"copy"}
        isDialogOpen={isCopyDialogOpen}
        setIsDialogOpen={setIsCopyDialogOpen}
        onConfirm={() => confirmCopyFolder(folderDetails, setRequested)}
      />
      {children}
    </Popover>
  );
};
