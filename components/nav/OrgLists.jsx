import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { fetchOrganizationsList } from "@/actions/fetchAllOrganizations";
import { toastError } from "@/libs/toast";
import { updateUserSession } from "@/actions/updateSession";
import { getUserSession } from "@/libs/getUserSession";
import { useRouter } from "next/navigation";

const OrgLists = () => {
  const [userSession, setUserSession] = useState(null);
  const router = useRouter();
  const [initValue, setInitValue] = useState([
    { value: "Value", label: "Label" },
  ]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const orgs = await fetchOrganizationsList();
      const user = await getUserSession();
      setUserSession(user);
      setData(orgs);
      if (!user.user?.organization) {
        const organization = { label: orgs[0]?.name, value: orgs[0]?._id };
        await updateUserSession(organization);
      }
      setIsLoading(false);
      return orgs;
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      toastError("Organization lists not successfully fetched");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  const options = data?.map((org) => ({
    label: org.name,
    value: org._id,
  }));

  const onChange = async (value, _) => {
    setInitValue(value);
    const organization = {
      label: _.label,
      value: value,
    };
    try {
      await updateUserSession(organization);
      // console.log("updated");
      // router.push();
      document.location.reload();
    } catch (error) {}
  };

  useEffect(() => {
    setInitValue(
      userSession?.user?.organization
        ? [userSession?.user?.organization]
        : options?.length > 0
        ? [options[0]]
        : []
    );
  }, [data]);

  const onFocus = (e) => {
    if (e === true) {
      fetchUsers();
    }
  };

  return (
    <Select
      showSearch
      placeholder="Organizations"
      variant="borderless"
      style={{ width: "100%", cursor: "pointer", fontSize: 24 }}
      value={initValue}
      optionFilterProp="label"
      onChange={onChange}
      options={options}
      loading={isLoading}
      onSelect={onFocus}
      onDropdownVisibleChange={onFocus}
    />
  );
};

export default OrgLists;
