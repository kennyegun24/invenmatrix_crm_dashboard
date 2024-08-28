export const formStyles = {
  width: "35%",
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "var(--primary_text_color)",
    color: "var(--primary_text_color)",
    outlineColor: "red",
    borderColor: "#fff",
    opacity: 0.7,
    foneSize: "12px",
  },
  "& label.Mui-disabled": {
    color: "var(--primary_text_color)",
    opacity: 0.7,
  },
  "& border.Mui-disabled": {
    borderColor: "red",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-disabled fieldset": {
      borderColor: "#fff",
      opacity: 0.7,
    },
  },
  "& .MuiInputBase-input": {
    fontSize: "0.83rem",
  },
};
