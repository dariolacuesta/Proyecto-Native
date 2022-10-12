import { productTypes } from "../types";
const { SELECT_BAND, FILTERED_BANDS } = productTypes;

export const selectProduct = (id) => ({ type: SELECT_BAND, productId: id });

export const filteredBands = (id) => ({
  type: FILTERED_BANDS,
  categoryId: id,
});
