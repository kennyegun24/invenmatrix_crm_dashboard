import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cloneElement, useState } from "react";
import { Input } from "../ui/input";

export default function HoverCardComponent({
  children,
  component,
  value,
  amount,
  disable,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HoverCard open={isOpen} onOpenChange={setIsOpen}>
      <HoverCardTrigger asChild>
        <div className="w-full">{children}</div>
      </HoverCardTrigger>
      <HoverCardContent side={"left"} className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@newbundle</h4>
            {disable ? (
              <p>
                Select a product from the drop down menu to be able to make
                changes
              </p>
            ) : (
              <>
                <p className="text-sm">
                  The {value} should not be more than the original amount{" "}
                  <strong>{amount}</strong>
                </p>
                {value.toLowerCase() === "stock level" && (
                  <p>
                    The least stock level you selected will be used for the
                    whole bundle!
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
