export const fetchTypes = (type: string) => {
  return {
    FETCH_REQUESTED: `${type}/FETCH_REQUESTED`,
    FETCH_SUCCESS_NEW: `${type}/FETCH_SUCCESS_NEW`,
    FETCH_SUCCESS_APPEND: `${type}/FETCH_SUCCESS_APPEND`,
    FETCH_ERROR: `${type}/FETCH_ERROR`,
  };
};
