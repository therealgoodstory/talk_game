import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const SelectComponent = (props) => {
  const { name, placeholder } = props;
  // контролированое состояние
  //
  // const [selectedOption, setSelectedOption] = useState(null)
  // onChange={setSelectedOption}
  const options = [
    {
      label: "Group 1",
      options: [
        { label: "11231323123", value: "value_1" },
        { label: "2123123123", value: "value_2" },
      ],
    },
    {
      label: "Group 2",
      options: [
        { label: "31231233", value: "value_3" },
        { label: "4123123", value: "value_4" },
      ],
    },
    {
      label: "Group 3",
      options: [
        { label: "51231233", value: "value_5" },
        { label: "6sdffs", value: "value_6" },
      ],
    },
  ];

  return (
    <div className="page__size">
      <span className="font-page page__name">{name}</span>
      <Select classNamePrefix="react-select" className="select" options={options} placeholder={placeholder} />
    </div>
  );
};

SelectComponent.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SelectComponent;
