import React from "react";
import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
import { Form, Input } from "antd";

const InputDialog = ({
  index,
  name,
  text,
  onChange,
  value,
  warning,
  disable,
}) => {
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <Label htmlFor="interests" className="text-right">
        {text}
      </Label>
      <div className="col-span-3 w-full">
        <Input
          disabled={disable}
          type="number"
          style={{ color: "#000" }}
          value={value}
          onChange={onChange}
        />
        {/* </Form.Item> */}
      </div>
    </div>
  );
};

export default InputDialog;
