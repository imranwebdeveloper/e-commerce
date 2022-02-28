import { useDispatch } from "react-redux";
import { filleterProduct } from "../../store/slice/contentsSlice";
import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
  const dispatch = useDispatch();
  const filterProducts = [
    "All",
    ...new Set(category.map((item) => item.category)),
  ];
  return (
    <section className="container mx-auto ">
      <ul className=" m-2 flex justify-center whitespace-nowrap overflow-x-scroll scrollbar-hide gap-2  ">
        {filterProducts.map((item, index) => {
          return (
            <li key={index} className="  flex items-center ">
              <NavLink
                to={`/${item.replace(/ /g, "-")}`}
                className={({ isActive }) => {
                  return isActive
                    ? " px-2 py-1 rounded bg-slate-800 text-white"
                    : "px-2 py-1 rounded bg-white";
                }}
                onClick={() =>
                  dispatch(filleterProduct(item.replace(/ /g, "-")))
                }
              >
                {item.replace(/^./, item[0].toUpperCase())}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Category;
