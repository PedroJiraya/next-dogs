"use client";

import login from "@/api/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../form/button";
import { useActionState, useEffect } from "react";
import Input from "../form/input";
import ErrorMessage from "../helper/error-message";

export default function LoginForm() {

  const [state, action] = useActionState(login, {
    ok:false,
    error:'',
    data:null
  })
  useEffect(()=> {
    if(state.ok) window.location.href = '/conta'
  },[state.ok])

  return (
    <>
      <form action={action}>
        <Input label="Usuario" name="username" />
        <Input label="Senha" name="password" type="password"/>
        <ErrorMessage error={state.error}/>
        <FormButton/>
      </form>
    </>
  );
}

function FormButton() {
  const form = useFormStatus();
  console.log(form.pending);
  return (
    <>
      {form.pending ? (
        <Button disabled>Entrando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  );
}
