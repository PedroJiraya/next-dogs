import LoginResetarForm from "@/components/login/login-resetar-form";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dogs | Resetar",
	description: "Resete sua senha",
};

type SearchParamsType = {
	searchParams:Promise<{
		key:string,
		login:string
	}>
}

export default async function ResetarPage({searchParams}:SearchParamsType) {

	const params = await searchParams;
	console.log(params)

	return <div className="animeLeft">
		<h1 className="title">Resete a Senha</h1>
		<LoginResetarForm keyToken={params.key} login={params.login}/>
	</div>;
}
