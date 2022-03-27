export const fetchTypes = (type: string) => {
  return {
    FETCH_REQUESTED: `${type}/FETCH_REQUESTED`,
    FETCH_SUCCESS: `${type}/FETCH_SUCCESS`,
    FETCH_SUCCESS_NULL: `${type}/FETCH_SUCCESS_NULL`,
    FETCH_SUCCESS_TRANSACTION: `${type}/FETCH_SUCCESS_TRANSACTION`,
    FETCH_ERROR: `${type}/FETCH_ERROR`,
  }
}
