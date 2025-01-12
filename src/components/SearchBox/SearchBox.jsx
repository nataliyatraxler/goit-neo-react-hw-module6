import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter); // Проверяем текущее значение фильтра

  const handleChange = (e) => {
    const newFilter = e.target.value;
    console.log("Search input:", newFilter); // Проверяем ввод
    dispatch(setFilter(newFilter));
  };

  return (
    <div className={styles["search-box"]}>
      <input
        type="text"
        value={filter} // Привязываем поле ввода к текущему состоянию фильтра
        placeholder="Search contacts..."
        onChange={handleChange} // Отслеживаем изменения ввода
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
