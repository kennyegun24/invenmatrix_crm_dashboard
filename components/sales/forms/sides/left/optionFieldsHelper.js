export const deleteItem = ({
  id,
  setOptions,
  options,
  setData,
  fieldName,
  userData,
}) => {
  const newOptions = options.filter((e) => e.id !== id);
  const { [fieldName]: _, ...updatedObj } = userData;
  setData(updatedObj);
  setOptions(newOptions);
};

export const addNewColumn = (setOptions, newColumn) => {
  setOptions((prev) => [
    ...prev,
    {
      name: newColumn,
      title: newColumn,
      id: Date.now(),
    },
  ]);
};

const obj = {
  value: "",
  name: "",
  birthday: "",
};
