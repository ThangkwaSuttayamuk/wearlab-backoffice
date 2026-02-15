import { KeyboardEvent } from "react";
import useFilterDialogStore from "../../../stores/dialog/useFilterDialogStore";
import useProductStore from "../../../stores/product/useProductStore";
import useSearchStore from "../../../stores/search/useSearchStore";
import useTableStore from "../../../stores/table/useTableStore";

const useViewModel = () => {
  const { input, setInput, getInput } = useSearchStore();
  const {  selectType } = useFilterDialogStore();
  const { getProductWithFilter, total, } =
    useProductStore();
  const { setItemInit, setAllPage } = useTableStore();

  const setNewInput = (value: string) => {
    const newInput = value.trim();
    setInput(newInput);
    setItemInit();
  };

  const onEnter = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setInput(input);
      onApplySearch();
    }
  };

  const onApplySearch = () => {
    getProductWithFilter(selectType, input);
    const totalPages = Math.ceil(total / 15);
    setItemInit();
    setAllPage(totalPages);
  };

  const onClickSearch = () => {
    setInput(input);
    onApplySearch();
  };

  return { input, setNewInput, getInput, onEnter, onClickSearch };
};

export default useViewModel;
