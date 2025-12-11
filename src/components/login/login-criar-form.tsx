"use client";

import { useFormStatus } from "react-dom";
import Button from "../form/button";
import { useActionState, useEffect } from "react";
import Input from "../form/input";
import ErrorMessage from "../helper/error-message";
import styles from "@/components/login/login-form.module.css";
import userPost from "@/api/user-post";

export default function LoginCriarForm() {
	const [state, action] = useActionState(userPost, {
		ok: false,
		error: "",
		data: null,
	});
	useEffect(() => {
		if (state.ok) window.location.href = "/conta";
	}, [state.ok]);

	return (
		<>
			<form action={action} className={styles.form}>
				<Input label="Usuario" name="username" />
				<Input label="Email" name="email" />
				<Input label="Senha" name="password" type="password" />
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
				<Button disabled>Cadastrando...</Button>
			) : (
				<Button>Cadastrar</Button>
			)}
		</>
	);
}
