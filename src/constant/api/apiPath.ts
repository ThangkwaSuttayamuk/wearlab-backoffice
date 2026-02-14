const HOSTNAME = process.env.REACT_APP_HOSTNAME;

export const API_PATH = {
  PRODUCT: {
    CREATE_NEW_PRODUCT: `${HOSTNAME}/product`,
    GET_ALL_PRODUCT: `${HOSTNAME}/product?`,
    UPDATE_PRODUCT: `${HOSTNAME}/product`,
    GET_PRODUCT_BY_ID: `${HOSTNAME}/product`,
    GET_PRODUCT_WITH_FILTER: `${HOSTNAME}/product/filter?`,
    DELETE_PRODUCT:`${HOSTNAME}/product`,
  },
  OWNER: {
    CREATE_NEW_OWNER: `${HOSTNAME}/owner`,
    GET_ALL_ONWER: `${HOSTNAME}/owner`,
    UPDATE_OWNER: `${HOSTNAME}/owner`,
  },
  TYPE: {
    GET_ALL_TYPE: `${HOSTNAME}/type`,
  },
  STATUS: {
    GET_ALL_STATUS: `${HOSTNAME}/status`,
  },
};
