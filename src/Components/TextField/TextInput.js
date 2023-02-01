import React from "react";

export default function TextInput({
  placeholder = "",
  value = "",
  id = "",
  name = "",
  onChange = () => {},
}) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      id={id}
      name={name}
      onChange={onChange}
    />
  );
}
