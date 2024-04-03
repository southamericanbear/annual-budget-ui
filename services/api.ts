export async function fetchService(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
  body: any = null,
  token?: string,
  contentType?: string
) {
  try {
    const fetchOptions: RequestInit = {
      method: method,
      headers: {},
    };

    if (token) {
      (fetchOptions.headers as any).Authorization = `${token}`;
    }

    if (contentType) {
      (fetchOptions.headers as any)["Content-Type"] = contentType;
    } else {
      (fetchOptions.headers as any)["Content-Type"] = "application/json";
    }

    if (body && (method === "POST" || method === "PUT" || method === "PATCH")) {
      if (body instanceof FormData) {
        fetchOptions.body = body;
      } else {
        (fetchOptions as any).body = JSON.stringify(body);
      }
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
