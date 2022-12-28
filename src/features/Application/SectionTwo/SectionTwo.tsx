import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

type SectionProps = {
	show?: boolean;
	id: string;
	address?: string;
	setCurrentSection: React.Dispatch<React.SetStateAction<number>>;
};
export default function SectionTwo({ show, id, address, setCurrentSection }: SectionProps) {
	//get query from url

	const [search] = useSearchParams();
	const [loading, setLoading] = React.useState(false);

	useEffect(() => {
		console.log(address, search.get("code"));
		verify();
	}, [search, address]);
	async function verify() {
		if (!address) return;
		if (search.get("code")) {
			if (window.localStorage.getItem("usedCode") == search.get("code")) return;

			console.log(search.get("code"));
			setLoading(true);
			const result = await fetch("/api/discord/verify", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					code: search.get("code"),
					walletId: address,
				}),
			});
			const data = await result.json();
			if (data.success) {
				window.localStorage.setItem("usedCode", search.get("code")!);
				setCurrentSection(3);
			}
		}
	}

	return (
		<div
			id={id}
			style={{
				display: show ? "block" : "none",
			}}
			className="app_application-section"
		>
			<div className="app_application-title">
				<h1>Verify With Discord</h1>
			</div>

			<button
				onClick={() => {
					//redirect to discord oauth
					//get current url
					const url = window.location.href.split("?")[0];
					console.log(url);
					window.location.href = `https://discord.com/api/oauth2/authorize?client_id=1057494452828127322&redirect_uri=${url}&response_type=code&scope=identify`;
				}}
				disabled={loading}
			>
				{loading ? "Loading.." : "Verify"}
			</button>
		</div>
	);
}
