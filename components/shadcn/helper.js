import { copyFolder, moveFolder } from "@/actions/addFolder";
import { toast } from "sonner";

export const confirmMoveFolder = async (folderDetails, setRequested) => {
  setRequested(true);
  try {
    await moveFolder({ ...folderDetails }).then((e) =>
      e?.error
        ? toast(e.error, {
            description: "Please refresh your browser and try again",
          })
        : e?.success &&
          toast(e.success, {
            description: "Successfully moved",
          })
    );
    setRequested(false);
  } catch (error) {
    setRequested(false);
    // console.log(error);
    toast("Something went wrong", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
    });
  }
};

export const confirmCopyFolder = async (folderDetails, setRequested) => {
  setRequested(true);
  try {
    await copyFolder({ ...folderDetails }).then((e) =>
      e?.error
        ? toast(e.error, {
            description: "Please refresh your browser and try again",
          })
        : e?.success &&
          toast(e.success, {
            description: "Successfully copied",
          })
    );
    setRequested(false);
  } catch (error) {
    setRequested(false);
    // console.log(error);
    toast("Something went wrong", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
    });
  }
};
