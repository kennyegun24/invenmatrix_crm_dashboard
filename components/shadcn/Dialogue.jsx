import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FaRegFolder } from "react-icons/fa6";
import { useSelector } from "react-redux";
import FoldersStruct from "./FoldersStruct";
import { useState } from "react";

export function MoveFolderDialog({ children, text, _id, onClick }) {
  const { folders } = useSelector((state) => state.breadCrumbs);
  const [searchInp, setText] = useState(null);
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const findFolders = folders?.find((e) => e._id === _id) || {};
  const [open, setOpen] = useState(false);
  return (
    <Dialog onOpenChange={(e) => setOpen(e)}>
      <DialogTrigger asChild>
        <p className="pointer">{text}</p>
      </DialogTrigger>
      <DialogContent className="w-[600px] px-0">
        <DialogHeader className="flex column gap2rem">
          <DialogTitle>Move Folder</DialogTitle>
          <div
            className="flex align_center gap05rem border-b-2 pb-4 px-4"
            style={{ borderBottomColor: "var(--light_border)" }}
          >
            <FaRegFolder size={28} />
            <p className="text-[16px] font-[600]">{findFolders?.folderName}</p>
          </div>
        </DialogHeader>
        <div className="px-4 flex column gap1rem w-full text-gray-400/90">
          <p className="text-gray-400/90 text-[15px]">
            Choose destination folder:
          </p>
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              onChange={(e) => setText(e.target.value)}
              type="search"
              style={{
                color: "var(--light_text)",
                background: "transparent",
                borderColor: "var(--light_border)",
                outline: "none",
              }}
              placeholder="Search..."
              className="pl-8 w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <FoldersStruct
            dialogOpen={open}
            onClick={onClick}
            _id={_id}
            search={searchInp}
            setSelectedFolderId={setSelectedFolderId}
            selectedFolderId={selectedFolderId}
          />
        </div>
        <DialogFooter className="px-4">
          <Button
            style={selectedFolderId?.length > 1 ? {} : { ...disableStyles }}
            onClick={() => onClick(selectedFolderId)}
            type="submit"
          >
            Move
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const disableStyles = {
  background: "gray",
  opacity: 0.75,
  cursor: "not-allowed",
};
