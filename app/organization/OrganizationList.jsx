import { org_lists } from "@/utils/organization_page_lists";
import Image from "next/image";
import React from "react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import image from "@/public/books.jpeg";
import OrgLists from "@/components/nav/OrgLists";
import Link from "next/link";
import "./style.css";
const OrganizationList = () => {
  return (
    <div className="flex column align_center gap2rem width50 small_scroll margin_auto overflow-auto h-[90vh]">
      <section className="flex column gap1rem sticky top-0 w-full align_center">
        <Image alt="" className="rounded-full org_image_header" src={image} />
        <div className="w-fit">
          <OrgLists />
        </div>
      </section>
      <section className="w-[98%] margin-auto flex column gap3rem">
        {org_lists.map((e, _) => (
          <div
            className="flex column gap2rem width100 organization_list_item"
            key={_}
          >
            <h4 className="text-[20px] font-[600]">{e.category}</h4>
            {e.children.map((e, _) => (
              <div key={_} className="flex column gap1rem width100">
                <Link
                  href={e.link}
                  className="flex align_center justify_between width100"
                >
                  <p className="flex align_center gap1rem text-[16px]">
                    {e.icon}
                    {e.name}
                  </p>
                  <FaAngleRight size={24} />
                </Link>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default OrganizationList;
