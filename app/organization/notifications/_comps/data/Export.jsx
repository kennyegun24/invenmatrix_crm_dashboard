"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaFilePdf, FaFileCsv } from "react-icons/fa6";

const formats = [
  {
    id: 1,
    name: "Excel File",
    format: "excel",
    icon: <RiFileExcel2Fill size={18} color="var(--green_color)" />,
  },
  {
    id: 2,
    name: "PDF File",
    format: "pdf",
    icon: <FaFilePdf size={18} color="var(--red_color)" />,
  },
  {
    id: 3,
    name: "CSV File",
    format: "csv",
    icon: <FaFileCsv size={18} color="var(--green_color)" />,
  },
];

export default function Export({ children }) {
  const [open, setOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const onOpenChange = (e) => {
    setOpen(e);
    setSelectedFormat(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[25%] bg-[--sub_bg]">
        <DialogHeader>
          <DialogTitle>Export Data</DialogTitle>
          <DialogDescription className="text-[--light_text]">
            Select the file type you would like to send to your Email.
          </DialogDescription>
        </DialogHeader>
        <section className="flex column gap1rem max-w-full overflow-x-hidden">
          <div className="flex align_center w-[100%] small_horizontal_scroll overflow-x-auto">
            {formats.map((format) => (
              <Button
                key={format.id}
                className={`flex-1 text-[14px] border_all flex gap05rem align_center rounded-none text-[--light_text] bg-[--blend_bg] border-[--light_border] ${
                  selectedFormat === format.format &&
                  "border-[--green_color] bg-[--main_bg]"
                } `}
                variant="outline"
                onClick={() => setSelectedFormat(format.format)}
              >
                {format.icon}
                {format.name}
              </Button>
            ))}
          </div>
          <input
            type="email"
            required
            className="p-2 pl-4 border_all outline-none bg-[--blend_bg]"
            placeholder="`user's email@company.com`"
          />
          <Button className="bg-[--green_color]">Confirm</Button>
        </section>
      </DialogContent>
    </Dialog>
  );
}
