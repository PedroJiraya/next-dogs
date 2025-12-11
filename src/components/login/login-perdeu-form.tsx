"use client";

import { useFormStatus } from "react-dom";
import Button from "../form/button";
import { useActionState, useEffect, useState } from "react";
import Input from "../form/input";
import ErrorMessage from "../helper/error-message";
import styles from "@/components/login/login-form.module.css";
import passwordLost from "@/api/password-lost";

export default function LoginPerdeuForm() {
  const [state, action] = useActionState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href.replace("perdeu", "resetar"));
  }, []);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Email | Usuario" name="login" />
        <input type="hidden" value={url} name="url" />
        {state.ok ? (
          <p style={{ color: "#4c1" }}>Email enviado</p>
        ) : (
          <FormButton />
        )}
        <ErrorMessage error={state.error} />
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
        <Button disabled>Enviando...</Button>
      ) : (
        <Button>Enviar Email</Button>
      )}
    </>
  );
}
