export async function fetchService(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
  body: any = null,
  token?: string
) {
  try {
    const fetchOptions: RequestInit = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (token) {
      (fetchOptions.headers as any).Authorization = `${token}`;
    }

    if (body && (method === "POST" || method === "PUT" || method === "PATCH")) {
      (fetchOptions as any).body = JSON.stringify(body);
    }

    const endpoint = `${process.env.BASE_URL}/${url}`;
    const response = await fetch(endpoint, fetchOptions);

    const { status } = await response;

    const data = await response.json();

    return {
      data,
      message: data.message,
      status,
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      message: "Failed to fetch data",
      status: 500,
    };
  }
}

export async function fetchWithFilesService(
  url: string,
  method: "POST" | "PUT" | "PATCH" = "POST",
  body: any = null,
  token?: string
) {
  try {
    const fetchOptions: RequestInit = {
      method: method,
      headers: {},
    };

    if (token) {
      (fetchOptions.headers as any).Authorization = `${token}`;
    }

    if (body && (method === "POST" || method === "PUT" || method === "PATCH")) {
      fetchOptions.body = body;
    }

    const endpoint = `${process.env.BASE_URL}/${url}`;

    const response = await fetch(endpoint, fetchOptions);
    const { status } = response;

    return {
      message: "success",
      status,
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      message: "Failed to fetch data",
      status: 500,
    };
  }
}
