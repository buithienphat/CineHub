const getApiResponese = async (url: string | "") => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      options
    );
    const data = await res.json();

    if (!!data) return data;
  } catch (error) {
    console.log("error", error);
    return Promise.reject(error);
  }
};

export default getApiResponese;
