import { useState } from "react";

export const useTeamRoles = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return {
    setIsModalVisible,
    isModalVisible,
    currentUser,
    setCurrentUser,
  };
};
