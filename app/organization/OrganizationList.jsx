import { org_lists } from "@/utils/organization_page_lists";
import Image from "next/image";
import React from "react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import image from "@/public/books.jpeg";
import OrgLists from "@/components/nav/OrgLists";
import Link from "next/link";
const OrganizationList = () => {
  return (
    <div className="flex column align_center gap2rem width100">
      <section className="flex column gap1rem align_center">
        <Image className="rounded-full org_image_header" src={image} />
        {/* <h3>Organization Name</h3> */}
        <OrgLists />
      </section>
      <section className="organization_page_list width100 flex column gap3rem">
        {org_lists.map((e, _) => (
          // <div className="flex align_center justify_between">
          <div className="flex column gap1rem width100">
            <h4 className="text-[24px] font-[700]">{e.category}</h4>
            {e.children.map((e, _) => (
              <>
                <Link
                  href={e.link}
                  className="flex align_center justify_between width100"
                >
                  <p className="flex align_center gap1rem text-[18px]">
                    {e.icon}
                    {e.name}
                  </p>
                  <FaAngleRight size={24} />
                </Link>
                <hr />
              </>
            ))}
          </div>
          // </div>
        ))}
      </section>
    </div>
  );
};

export default OrganizationList;
