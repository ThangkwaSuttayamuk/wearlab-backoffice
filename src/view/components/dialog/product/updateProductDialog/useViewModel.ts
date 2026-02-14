import { ChangeEvent, useEffect, useState } from "react";
import { OwnerEntity } from "../../../../../entity/owner/ownerEntity";
import { UpdateProductService } from "../../../../../service/product/updateProductService";
import useDialogStore from "../../../../../stores/dialog/useDialogStore";
import useProductFieldStore from "../../../../../stores/fieldDropdown/useFieldDropdown";
import useProductFormStore from "../../../../../stores/form/productForm/useProductFormStore";
import useOwnerStore from "../../../../../stores/owner/useOwnerStore";
import useProductStore from "../../../../../stores/product/useProductStore";
import useSelectProductStore from "../../../../../stores/product/useSelectProductStore";
import useTableStore from "../../../../../stores/table/useTableStore";
import useImageStore from "../../../../../stores/image/useImageStore";

const useViewModel = () => {
  const {
    productId,
    productName,
    productDescription,
    productDefect,
    productType,
    productWaist,
    productLength,
    productChest,
    productOwner,
    productStatus,
    productPrice,
    productSalePrice,
    productImage,
    productOwnerName,
    setProductId,
    setProductName,
    setProductDescription,
    setProductDefect,
    setProductType,
    setProductWaist,
    setProductLength,
    setProductChest,
    setProductOwner,
    setProductStatus,
    setProductPrice,
    setProductSalePrice,
    setProductImage,
    setProductOwnerName,
    setProductInit,
  } = useProductFormStore();

  const {
    id,
    selectProductId,
    selectProductName,
    selectProductDescription,
    selectProductDefect,
    selectProductType,
    selectProductWaist,
    selectProductLength,
    selectProductChest,
    selectProductOwner,
    selectProductStatus,
    selectProductPrice,
    selectProductSalePrice,
    selectProductImage,
    selectProductOwnerName,
    setId,
    setSelectProductInit,
    getProductById,
  } = useSelectProductStore();

  const [openProductType, setOpenProductType] = useState(false);
  const [openProductOwner, setOpenProductOwner] = useState(false);
  const [openProductStatus, setOpenProductStatus] = useState(false);
  const { allOwner, getAllOwner } = useOwnerStore();
  const { fullField, setFullField } = useProductFieldStore();
  const { setTypeDialog } = useDialogStore();
  const { getAllProduct } = useProductStore();
  const {
    page,
    allPage,
    startItem,
    endItem,
    allItem,
    setPage,
    setAllPage,
    setStartItem,
    setEndItem,
    setAllItem,
  } = useTableStore();
  const { fileURLs, onHandleFileChange, onHandleDelete, setFileURLs } =
    useImageStore();

  const handleDelete = async (filePath: string) => {
    if (!selectProductImage.includes(filePath)) {
      console.log("Path is NOT in productImage array");
      onHandleDelete(filePath, setProductImage);
    } else {
      const currentURLs = fileURLs;
      const updatedURLs = currentURLs.filter((url) => !url.includes(filePath));
      setProductImage(updatedURLs);
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    onHandleFileChange(event, setProductImage);
  };

  const extractFilePath = (publicUrl: string): string => {
    const parts = publicUrl.split("/");
    return parts.slice(parts.indexOf("product") + 1).join("/");
  };

  const setOwner = (owner: OwnerEntity) => {
    setProductOwner(owner.id);
    setProductOwnerName(owner.name);
  };

  const setOpenDropdown = (type: string) => {
    switch (type) {
      case "type":
        setOpenProductType(!openProductType);
        setOpenProductStatus(false);
        setOpenProductOwner(false);
        break;
      case "status":
        setOpenProductType(false);
        setOpenProductStatus(!openProductStatus);
        setOpenProductOwner(false);
        break;
      case "owner":
        setOpenProductType(false);
        setOpenProductStatus(false);
        setOpenProductOwner(!openProductOwner);
        break;
      default:
        break;
    }
  };

  const onSetProductType = (type: string) => {
    setProductWaist(0);
    setProductLength(0);
    setProductChest(0);
    setProductType(type);
  };

  const onCancel = () => {
    setProductInit();
    setTypeDialog("");
    setFullField(true);
  };

  const onSave = async () => {
    console.log("onSave");
    const isFull = setFull();
    if (isFull && isEdit()) {
      fullField && (await updateProduct());
      setProductInit();
      setTypeDialog("");
      getAllProduct(endItem, startItem);
    }
  };

  const updateProduct = async () => {
    console.log({
      name: productName !== "" ? productName : selectProductName,
      description:
        productDescription !== ""
          ? productDescription
          : selectProductDescription,
      defect: productDefect !== "" ? productDefect : selectProductDefect,
      type: productType !== "" ? productType : selectProductType,
      waist:
        productType === "Top" || productType === "Accessory"
          ? 0
          : productWaist !== 0
          ? productWaist
          : selectProductWaist,
      length:
        productType === "Accessory"
          ? 0
          : productLength !== 0
          ? productLength
          : selectProductLength,
      chest:
        productType === "Bottom" || productType === "Accessory"
          ? 0
          : productChest !== 0
          ? productChest
          : selectProductChest,
      owner: productOwner !== 0 ? productOwner : selectProductOwner,
      status: productStatus !== "" ? productStatus : selectProductStatus,
      price: productPrice !== 0 ? productPrice : selectProductPrice,
      saleprice:
        productSalePrice !== 0 ? productSalePrice : selectProductSalePrice,
      image: fileURLs.length !== 0 ? fileURLs : [],
    });
    try {
      const service = new UpdateProductService();

      const result = await service.updateProduct(id, {
        name: productName !== "" ? productName : selectProductName,
        description:
          productDescription !== ""
            ? productDescription
            : selectProductDescription,
        defect: productDefect !== "" ? productDefect : selectProductDefect,
        type: productType !== "" ? productType : selectProductType,
        waist:
          productType === "Top" || productType === "Accessory"
            ? 0
            : productWaist !== 0
            ? productWaist
            : selectProductWaist,
        length:
          productType === "Accessory"
            ? 0
            : productLength !== 0
            ? productLength
            : selectProductLength,
        chest:
          productType === "Bottom" || productType === "Accessory"
            ? 0
            : productChest !== 0
            ? productChest
            : selectProductChest,
        owner: productOwner !== 0 ? productOwner : selectProductOwner,
        status: productStatus !== "" ? productStatus : selectProductStatus,
        price: productPrice !== 0 ? productPrice : selectProductPrice,
        saleprice:
          productSalePrice !== 0 ? productSalePrice : selectProductSalePrice,
        image: fileURLs.length !== 0 ? fileURLs : [],
      });

      if (result.status === 200) {
        setProductInit();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isEdit = () => {
    if (
      productName === "" &&
      productDescription === "" &&
      productDefect === "" &&
      productType === "" &&
      productWaist === 0 &&
      productLength === 0 &&
      productChest === 0 &&
      productOwner === 0 &&
      productStatus === "" &&
      productPrice === 0 &&
      productSalePrice === 0 &&
      // fileURLs.length === 0 &&
      selectProductImage === fileURLs
    ) {
      console.log();
      return false;
    } else {
      return true;
    }
  };

  const setFull = () => {
    const requiredFields = [];

    if (selectProductType !== productType && productType !== "") {
      if (productType === "Top") {
        requiredFields.push(productLength, productChest);
      } else if (productType === "Bottom") {
        requiredFields.push(productLength, productWaist);
      }
    }

    const isFull = requiredFields.every((field) => {
      if (typeof field === "number") return field !== 0;
      return !!field;
    });

    setFullField(isFull);
    return isFull;
  };

  useEffect(() => {
    getAllOwner();
    console.log(selectProductImage);
    // setProductImage(selectProductImage);
    setFileURLs(selectProductImage);
  }, [getAllOwner, selectProductImage, setProductImage]);

  return {
    productId,
    productName,
    productDescription,
    productDefect,
    productType,
    productWaist,
    productLength,
    productChest,
    productOwner,
    productStatus,
    productPrice,
    productSalePrice,
    productImage,
    productOwnerName,
    setProductId,
    setProductName,
    setProductDescription,
    setProductDefect,
    setProductType,
    setProductWaist,
    setProductLength,
    setProductChest,
    setProductOwner,
    setProductStatus,
    setProductPrice,
    setProductSalePrice,
    setProductImage,
    setOpenDropdown,
    openProductType,
    openProductOwner,
    openProductStatus,
    setProductOwnerName,
    onSetProductType,
    setProductInit,
    setOwner,
    allOwner,
    onCancel,
    onSave,
    fullField,
    id,
    selectProductId,
    selectProductName,
    selectProductDescription,
    selectProductDefect,
    selectProductType,
    selectProductWaist,
    selectProductLength,
    selectProductChest,
    selectProductOwner,
    selectProductStatus,
    selectProductPrice,
    selectProductSalePrice,
    selectProductImage,
    selectProductOwnerName,
    setId,
    setSelectProductInit,
    getProductById,
    extractFilePath,
    fileURLs,
    handleDelete,
    handleFileChange,
  };
};

export default useViewModel;
