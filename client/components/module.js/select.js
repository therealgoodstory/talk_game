import React from 'react'
import { components } from "react-select";
/* eslint react/forbid-prop-types: 0 */
/* eslint-disable react/jsx-props-no-spreading */
export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "gray" : "black",
    height: 40,
    background: state.isFocused ? "#FBFDFF" : "white",
    paddingLeft: 60,
    fontFamily: "Semibold",
    fontSize: 12,
  }),
  groupHeading: (provided) => ({
    ...provided,
    color: "black",
    height: 40,
    background: "#F3F5F8",
    paddingLeft: 30,
    display: "flex",
    alignItems: "center",
    marginBottom: 0,
    fontFamily: "Semibold",
    fontSize: 12,
  }),
  group: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 7,
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 7,
  }),
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? "blue" : "#D6DEE6",
    boxShadow: state.isFocused ? "blue" : "white",
    fontFamily: "Semibold",
    fontSize: 12,
    height: 45,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "white" : "gray",
    fontFamily: "Semibold",
    fontSize: 13,
  }),
};

export const workerStyles = {
  ...customStyles,
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "gray" : "black",
    height: 45,
    paddinfLeft: 15,
    background: state.isFocused ? "#FBFDFF" : "white",
    fontFamily: "Semibold",
    fontSize: 12,
  }),
};

export const indicatorsContainer = {
  ...customStyles,
  indicatorsContainer: (provided) => ({
    ...provided,
    background: "#F2F6F9",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "red",
  }),
}

export const writeOffAccountStyle = {
  ...customStyles,
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "gray" : "black",
    height: 45,
    paddinfLeft: 15,
    background: state.isFocused ? "#FBFDFF" : "white",
    fontFamily: "Semibold",
    fontSize: 12,
    whiteSpace: "pre-wrap",
  }),
};

export const writeOffAccount = ({ children, ...props }) => (
  <components.Option {...props}>
    <div className="row">
      <div className="write-ff-logo">$</div>
      <div className="col">
        <div className="bold">{props.data.name}</div>
        <div>{children}</div>
      </div>
    </div>
  </components.Option>
);
