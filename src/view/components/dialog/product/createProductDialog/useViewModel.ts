import { ChangeEvent, useEffect, useState } from "react";
import { OwnerEntity } from "../../../../../entity/owner/ownerEntity";
import { CreateProductService } from "../../../../../service/product/createProductService";
import useDialogStore from "../../../../../stores/dialog/useDialogStore";
import useProductFieldStore from "../../../../../stores/fieldDropdown/useFieldDropdown";
import useProductFormStore from "../../../../../stores/form/productForm/useProductFormStore";
import useImageStore from "../../../../../stores/image/useImageStore";
import useOwnerStore from "../../../../../stores/owner/useOwnerStore";
import useProductStore from "../../../../../stores/product/useProductStore";
import useTableStore from "../../../../../stores/table/useTableStore";

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

  const [openProductType, setOpenProductType] = useState(false);
  const [openProductOwner, setOpenProductOwner] = useState(false);
  const [openProductStatus, setOpenProductStatus] = useState(false);
  const { allOwner, getAllOwner } = useOwnerStore();
  const { fullField, setFullField } = useProductFieldStore();
  const { setTypeDialog } = useDialogStore();
  const { startItem, endItem } = useTableStore();
  const { getAllProduct } = useProductStore();

  const [uploading, setUploading] = useState<boolean>(false);

  const { fileURLs, onHandleFileChange, onHandleDelete, setFileURLs } =
    useImageStore();
    
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    onHandleFileChange(event, setProductImage);
  };

  const handleDelete = async (filePath: string) => {
    onHandleDelete(filePath, setProductImage);
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

  const createNewProduct = async () => {
    try {
      const service = new CreateProductService();

      const result = await service.createProduct({
        name: productName,
        description: productDescription,
        defect: productDefect,
        type: productType,
        waist:
          productType === "Top" || productType === "Accessory"
            ? 0
            : productWaist,
        length: productType === "Accessory" ? 0 : productLength,
        chest:
          productType === "Bottom" || productType === "Accessory"
            ? 0
            : productChest,
        owner: productOwner,
        status: productStatus,
        price: productPrice,
        saleprice: productSalePrice,
        image: productImage,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const onCancel = () => {
    setProductInit();
    setTypeDialog("");
    setFullField(true);
    setFileURLs([]);
  };

  const onCreate = async () => {
    const isFull = setFull(); // Synchronously checks fields
    console.log(isFull)

    if (isFull) {
      const result = await createNewProduct();
      console.log(result?.status)

      if (result?.status === 200) {
        setTypeDialog("");
        getAllProduct(endItem, startItem);
        setProductInit();
        setFileURLs([]);
      }
    }
  };

  const setFull = () => {
    const requiredFields = [
      productName,
      productDescription,
      productDefect,
      productType,
      productOwner,
      productStatus,
      productPrice,
      productImage,
    ];

    if (productType === "Top") {
      requiredFields.push(productLength, productChest);
    } else if (productType === "Bottom") {
      requiredFields.push(productLength, productWaist);
    }

    const isFull = requiredFields.every((field) => {
      if (typeof field === "string") return field.trim() !== "";
      if (typeof field === "number") return field !== 0;
      if (Array.isArray(field))
        return field.length > 0 && field.every((f) => f.trim() !== "");
      return Boolean(field);
    });

    setFullField(isFull);
    return isFull;
  };

  const onSetProductType = (type: string) => {
    setProductWaist(0);
    setProductLength(0);
    setProductChest(0);
    setProductType(type);
  };

  useEffect(() => {
    getAllOwner();
  }, [getAllOwner]);

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
    onSetProductType,
    openProductType,
    openProductOwner,
    openProductStatus,
    setProductOwnerName,
    setProductInit,
    setOwner,
    createNewProduct,
    allOwner,
    onCancel,
    onCreate,
    fullField,
    uploading,
    fileURLs,
    handleFileChange,
    handleDelete,
    extractFilePath,
  };
};

export default useViewModel;
