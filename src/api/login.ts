"use server";

import { cookies } from "next/headers";
import apiError from "./api-error";
import { TOKEN_POST } from "./api";

export default async function Login(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;
  try {
    if (!username || !password) throw new Error("Preencha os dados");
    const { url } = TOKEN_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error("Senha ou usuario invalido");
    const data = await response.json();

    if (response.ok) {
      (await cookies()).set("token", data.token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24,
      });
    }
    return {
      ok: true,
      error: "",
      data: "responde ok",
    };
  } catch (error: unknown) {
    return apiError(error);
  }
}
