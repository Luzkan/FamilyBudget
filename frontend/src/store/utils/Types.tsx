export const fetchTypes = (type: string) => {
  return {
    FETCH_REQUESTED: `${type}/FETCH_REQUESTED`,
    FETCH_SUCCESS: `${type}/FETCH_SUCCESS`,
    FETCH_ERROR: `${type}/FETCH_ERROR`,
  };
};
