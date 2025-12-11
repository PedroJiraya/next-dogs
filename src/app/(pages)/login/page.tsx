import LoginForm from "@/components/login/login-form";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dogs | Login",
	description: "Crie sua conta na next dogs",
};

export default async function LoginPage() {
	return (
		<section className="animeLeft">
			<h1 className="title">Login</h1>
			<LoginForm />
		</section>
	);
}
