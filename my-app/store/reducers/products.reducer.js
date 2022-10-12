import { BANDS } from "../../data/bands";
import { productTypes } from "../types";
const initialState = {
  bands: BANDS,
  filteredBands: [],
  selected: null,
};
const { SELECT_BAND, FILTERED_BANDS } = productTypes;

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BAND:
      return {
        ...state,
        selected: state.bands.find((band) => band.id === action.productId),
      };
    case FILTERED_BANDS:
      return {
        ...state,
        filteredBands: state.bands.filter(
          (band) => band.category === action.categoryId
        ),
      };
    default:
      return state;
  }
};

export default ProductReducer;
