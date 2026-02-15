import { useEffect, useState } from "react";
import * as yup from "yup";
import { CreateProductService } from "../../../../../service/product/createProductService";
import useDialogStore from "../../../../../stores/dialog/useDialogStore";
import useProductFieldStore from "../../../../../stores/fieldDropdown/useFieldDropdown";
import useProductFormStore from "../../../../../stores/form/productForm/useProductFormStore";
import useProductStore from "../../../../../stores/product/useProductStore";
import useTypeStore from "../../../../../stores/type/useTypeStore";

const productSchema = yup.object().shape({
  productName: yup.string().required("Product Name is required"),

  smeCode: yup
    .string()
    .matches(/^[A-Z0-9]+$/, "SME Code must contain only A-Z and 0-9")
    .min(3, "SME Code must be at least 3 characters")
    .required("SME Code is required"),

  productType: yup.string().required("Product Type is required"),

  productPrice: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Price is required"),

  stock: yup
    .number()
    .typeError("Stock must be a number")
    .moreThan(0, "Stock must be more than 0")
    .required("Stock is required"),
});

const useViewModel = () => {
  const {
    productId,
    productName,
    productType,
    productPrice,
    stock,
    smeCode,
    setProductId,
    setProductName,
    setProductType,
    setProductPrice,
    setProductInit,
    setSmeCode,
    setStock,
  } = useProductFormStore();

  const [openProductType, setOpenProductType] = useState(false);
  const { fullField, setFullField } = useProductFieldStore();
  const { setTypeDialog } = useDialogStore();
  const { getAllProduct } = useProductStore();
  const { allTypeWithoutAll, getAllType } = useTypeStore();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const setOpenDropdown = () => {
    setOpenProductType(!openProductType);
  };

  const createNewProduct = async () => {
    try {
      const service = new CreateProductService();

      const result = await service.createProduct({
        name: productName,
        sku: smeCode,
        type: productType,
        price: productPrice,
        stock: stock,
      });

      return result;
    } catch (error: any) {
      onErrorService(error);
    }
  };

  const onCancel = () => {
    setProductInit();
    setTypeDialog("");
    setFullField(true);
  };

  const onCreate = async () => {
    try {
      await productSchema.validate(
        {
          productName,
          smeCode,
          productType,
          productPrice,
          stock,
        },
        { abortEarly: false },
      );

      setErrors({});

      const result = await createNewProduct();

      if (result?.status === 200) {
        setTypeDialog("");
        getAllProduct();
        setProductInit();
      }
    } catch (err: any) {
      const newErrors: Record<string, string> = {};

      err.inner.forEach((e: any) => {
        newErrors[e.path] = e.message;
      });

      setErrors(newErrors);
    }
  };

  const onErrorService = (error: any) => {
    if (error === "SKU Code already exists") {
      const newErrors: Record<string, string> = {};
      newErrors["smeCode"] = error;
      setErrors(newErrors);
      return;
    }
  };

  useEffect(() => {
    getAllType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    productId,
    productName,
    smeCode,
    productType,
    productPrice,
    stock,
    setProductId,
    setProductName,
    setProductType,
    setProductPrice,
    setOpenDropdown,
    setSmeCode,
    setStock,
    openProductType,
    fullField,
    errors,
    onCancel,
    onCreate,
    allTypeWithoutAll,
  };
};

export default useViewModel;
