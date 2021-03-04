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
        { label: "Group 1, option 1", value: "value_1" },
        { label: "Group 1, option 2", value: "value_2" },
      ],
    },
    {
      label: "Group 1",
      options: [
        { label: "Group 1, option 1", value: "value_1" },
        { label: "Group 1, option 2", value: "value_2" },
      ],
    },
    {
      label: "Group 1",
      options: [
        { label: "Group 1, option 1", value: "value_1" },
        { label: "Group 1, option 2", value: "value_2" },
      ],
    },
  ];

  return (
    <div className="page__size">
      <span className="font-page page__name">{name}</span>
      <Select options={options} placeholder={placeholder} />
    </div>
  );
};

SelectComponent.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SelectComponent;
