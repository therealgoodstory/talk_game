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
    position: "relative",
    zIndex: 2,
  }),
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? "blue" : "#D6DEE6",
    boxShadow: state.isFocused ? "blue" : "white",
    fontFamily: "Semibold",
    fontSize: 12,
    height: 45,
  }),
  placeholder: (provided) => ({
    ...provided,
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
    left: 15,
    background: state.isFocused ? "#FBFDFF" : "none",
    fontFamily: "Semibold",
    fontSize: 12,
    paddingTop: 5,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    overflow: "none",
    wigth: 90,
    left: 15,
    caretColor: "transparent",
  }),
  input: (provided) => ({
    ...provided,
    visibility: "visible",
    position: "absolute",
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
    // paddingTop: 7,
    color: state.isSelected ? "gray" : "black",
    height: 45,
    paddinfLeft: 15,
    background: state.isFocused ? "#FBFDFF" : "none",
    fontFamily: "Semibold",
    fontSize: 12,
    whiteSpace: "pre-wrap",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    overflow: "none",
    left: 15,
    caretColor: "transparent",
  }),
  input: (provided) => ({
    ...provided,
    visibility: "visible",
    position: "absolute",
  }),
};

export const currencyStyles = {
  ...writeOffAccountStyle,
  option: (provided, state) => ({
    ...provided,
    paddingLeft: 15,
    paddingTop: 7,
    color: state.isSelected ? "gray" : "black",
    height: 45,
    background: state.isFocused ? "#FBFDFF" : "none",
    fontFamily: "Semibold",
    fontSize: 12,
    whiteSpace: "pre-wrap",
  }),
  valueContainer: (provided) => ({
    ...provided,
    position: "absolue",
    display: "flex",
    flexDirection: "row",
    overflow: "none",
    wigth: 90,
    paddingLeft: 15,
    padding: 0,
    caretColor: "transparent",
  }),
  input: (provided) => ({
    ...provided,
    position: "absolute",
  }),
}

export const writeOffAccount = ({ children, ...props }) => (
  <components.Option {...props}>
    <div className="row">
      <div className="write-ff-logo">
        {props.data.currency}
      </div>
      <div className="col">
        <div className="bold">{children[0]}</div>
        <div className="italic">{children[1]}</div>
      </div>
    </div>
  </components.Option>
);

export const writeOffAccountValue = ({ children, ...props }) => (
  <components.Option {...props} className="email-worker">
    <div className="row">
      <div className="write-ff-logo">
        {props.data.currency}
      </div>
      <div className="col account">
        <div className="bold">{children[0]}</div>
        <div className="italic">{children[1]}</div>
      </div>
    </div>
  </components.Option>
);

export const typePalStyle = ({ children, ...props }) => (
  <components.Option {...props}>
    <div className="row typePal">
      <div className="write-ff-logo">
        .
      </div>
      {children}
    </div>
  </components.Option>
);

export const typePalStyleValue = ({ children, ...props }) => (
  <components.Option {...props} className="email-worker">
    <div className="row typePal">
      <div className="write-ff-logo">
        .
      </div>
      {children}
    </div>
  </components.Option>
);
