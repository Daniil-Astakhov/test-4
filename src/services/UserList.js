export const getUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`Could not fetch users, status: ${response.status}`);
    }
    const data = response.json();
    return data.then(
      (result) => result // => success!
    );
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
};
