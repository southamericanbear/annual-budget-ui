import { cookies } from "next/headers";

export async function fetchWithToken(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
  body: any = null
) {
  const { token } = JSON.parse(cookies().get("user")?.value || "{}");

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

  if (!response.ok) {
    console.error("Failed to fetch:", response.statusText);
    return "Error fetching data";
  }

  return response.json();
}
