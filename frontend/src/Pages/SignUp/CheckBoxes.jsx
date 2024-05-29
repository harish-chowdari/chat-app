
const CheckBoxes = ({ gender, handleChange }) => {
  return (
    <div className="flex flex-row gap-10 my-2 justify-around">
      <div className="flex gap-x-1">
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={handleChange}
        />
        <span>Male</span>
      </div>
      <div className="flex gap-x-1">
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={handleChange}
        />
        <span>Female</span>
      </div>
    </div>
  );
};

export default CheckBoxes;
