import LoginCriarForm from "@/components/login/login-criar-form";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dogs | Criar",
	description: "Crie sua conta na next dogs",
};

export default async function CriarPage() {
	return (
		<div className="animeLeft">
			<h1 className="title">Cadastre-se</h1>
			<LoginCriarForm />
		</div>
	);
}
