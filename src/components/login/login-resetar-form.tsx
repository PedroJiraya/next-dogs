"use client";

import { useFormStatus } from "react-dom";
import Button from "../form/button";
import { useActionState } from "react";
import Input from "../form/input";
import ErrorMessage from "../helper/error-message";
import styles from "@/components/login/login-form.module.css";
import passwordReset from "@/api/password-reset";

export default function LoginResetarForm({keyToken, login}:{login:string, keyToken:string}) {
  const [state, action] = useActionState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Nova Senha" name="password" type="password" />
        <input type="hidden" name="login" value={login}/>
        <input type="hidden" name="key" value={keyToken}/>
        <ErrorMessage error={state.error} />
        <FormButton />
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
        <Button disabled>Resetando...</Button>
      ) : (
        <Button>Resetar Senha</Button>
      )}
    </>
  );
}
