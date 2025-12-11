"use server";

import apiError from "./api-error";
import { USER_POST } from "./api";
import Login from "./login";

export default async function userPost(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  try {
    if (!username ||!email || !password) throw new Error("Preencha os dados");
    const { url } = USER_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error("Email ou usuário ja cadastrado");
    const data = await response.json();

    const {ok} = await Login({ok:true, error:''},formData)
    if(!ok) throw new Error('Error ao Logar')
  /*   if (response.ok) {
   
    } */
    return {
      ok: true,
      error: "",
      data: "responde ok",
    };
  } catch (error: unknown) {
    return apiError(error);
  }
}
