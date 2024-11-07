import { FaBell, FaDatabase, FaMoneyBillWave, FaPlus } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import {
  MdOutlineIntegrationInstructions,
  MdPayment,
  MdPayments,
} from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { GiOrganigram } from "react-icons/gi";
import { IoBusinessSharp } from "react-icons/io5";
export const org_lists = [
  {
    category: "Personal",
    children: [
      {
        name: "Business Details",
        link: "/business_details",
        icon: <IoBusinessSharp size={24} />,
      },
      {
        name: "Company Branding",
        link: "",
        icon: <GoOrganization size={24} />,
      },
    ],
  },
  {
    category: "Payments",
    children: [
      {
        name: "Subscription Plan",
        link: "",
        icon: <MdPayments size={24} />,
      },
      {
        name: "Billing Details",
        link: "/organization/billing",
        icon: <FaMoneyBillWave size={24} />,
      },
    ],
  },
  {
    category: "Managements",
    children: [
      {
        name: "Team Management",
        link: "",
        icon: <GiOrganigram size={24} />,
      },
      {
        name: "API Details",
        link: "/organization/api_keys",
        icon: <FaDatabase size={24} />,
      },
      {
        name: "Integrations",
        link: "/organization/integrations",
        icon: <MdOutlineIntegrationInstructions size={24} />,
      },
      {
        name: "Alerts and Notifications",
        link: "/organization/notifications",
        icon: <FaBell size={24} />,
      },
    ],
  },
  {
    category: "Account Settings",
    children: [
      {
        name: "Edit Business Details",
        link: "",
        icon: <FaPlus size={24} />,
      },
      {
        name: "New Api Key",
        link: "/organization/api_keys/new",
        icon: <FaPlus size={24} />,
      },
    ],
  },
];
