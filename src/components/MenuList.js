import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  return (
    <>
      {/* render a MenuItem component for each element of the foodItems array */}
      {foodItems.map((food) => (
        <MenuItem food={food} />
      ))}
    </>
  );
}

export default MenuList;
