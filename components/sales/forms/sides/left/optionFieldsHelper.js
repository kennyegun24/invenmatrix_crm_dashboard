export const deleteItem = (id, setOptions, options) => {
  const newOptions = options.filter((e) => e.id !== id);
  setOptions(newOptions);
};

export const addNewColumn = (e, setOptions, newColumn) => {
  setOptions((prev) => [
    ...prev,
    {
      name: newColumn,
      title: newColumn,
      id: Date.now(),
    },
  ]);
};
