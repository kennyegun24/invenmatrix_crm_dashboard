"use client";
import { useContext, createContext, useState } from "react";

export const TeamRolesContext = createContext();

const TeamRolesProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const handleEditRole = (user) => {
    setCurrentUser(user); // Store the user to edit
    setIsModalVisible(true); // Show the modal
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  return (
    <TeamRolesContext.Provider
      value={{
        isModalVisible,
        currentUser,
        setCurrentUser,
        handleEditRole,
        handleOk,
        handleCancel,
      }}
    >
      {children}
    </TeamRolesContext.Provider>
  );
};

export default TeamRolesProvider;
