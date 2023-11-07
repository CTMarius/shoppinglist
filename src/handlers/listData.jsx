export const fetchListData = async () => {
  try {
    const response = await fetch('/list');
    const listData = await response.json();
    return listData;
  } catch (error) {
    console.error("Error fetching list data from API:", error);
    return [];
  }
};