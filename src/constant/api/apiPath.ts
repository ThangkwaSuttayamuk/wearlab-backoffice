const HOSTNAME = process.env.REACT_APP_HOSTNAME;

export const API_PATH = {
  PRODUCT: {
    CREATE_NEW_PRODUCT: `${HOSTNAME}/product`,
    GET_ALL_PRODUCT: `${HOSTNAME}/product?`,
    UPDATE_PRODUCT: `${HOSTNAME}/product`,
    GET_PRODUCT_WITH_FILTER: `${HOSTNAME}/product?`,
    DELETE_PRODUCT:`${HOSTNAME}/product`,
    SELL_PRODUCT: `${HOSTNAME}/product/sell`,
  },
  TYPE: {
    GET_ALL_TYPE: `${HOSTNAME}/type`,
  },
};
