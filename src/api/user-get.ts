"use server";

import apiError from "./api-error";
import { USER_GET, USER_POST } from "./api";
import Login from "./login";
import { cookies } from "next/headers";

export type UserType = {
     id:number,
     email:string,
     username:string,
     nome:string
}


export default async function userGet() {
  try {
    const token = (await cookies()).get('token')?.value
    if(!token) throw new Error('Token nao encontrado')
    const { url } = USER_GET();
    const response = await fetch(url, {
        method:'GET',
      headers: {
        Authorization: "Bearer " + token,
      },
      next:{
        revalidate:60
      }
    });
    if (!response.ok) throw new Error("Erro ao pegar usuario");
    const data = await response.json() as UserType
    return {
      ok: true,
      error: "",
      data
    };
  } catch (error: unknown) {
    return apiError(error);
  }
}
