import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";
import TeamTable from "./TeamTable";

const page = () => {
  return (
    <div className="team_members_table w-[60%] flex justify_center m-auto">
      <div className="flex column gap1rem team_members_table w-[95%] margin_auto">
        <section className="flex column gap05rem">
          <h2 className="text-[24px] font-[700]">Team Management</h2>
          <p>Manage your team members and their permissions here</p>
          <hr />
        </section>
        <section>
          <div className="relative max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 pr-4 bg-transparent border-[--light_border]"
            />
          </div>
        </section>
        <section className="">
          <TeamTable />
        </section>
      </div>
    </div>
  );
};

export default page;
