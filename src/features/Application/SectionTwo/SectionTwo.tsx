import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { RxDiscordLogo, RxTwitterLogo } from "react-icons/rx";
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
		if (!address || !search.get("code")) return;

		if (window.localStorage.getItem("usedCode") == search.get("code")) {
			toast.info("Please verify again");
			return;
		}
		setLoading(true);
		try {
			console.log("Verifying");
			const result = await fetch("https://echo-lab-backend.onrender.com/auth", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					code: search.get("code"),
					walletId: address,
					project: "echo-lab",
				}),
			});
			console.log("Result:", result);
			const data = await result.json();
			console.log("Data:", data);
			if (data.success) {
				setCurrentSection(3);
			}
			window.localStorage.setItem("usedCode", search.get("code")!);
		} catch (e) {
			console.error(e);
			window.localStorage.setItem("usedCode", search.get("code")!);
			toast.error("Something went wrong");
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
				<h3>Verify With Discord</h3>
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
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "0.5rem",
					margin: "0 auto",
				}}
			>
				{loading ? "Loading.." : "Verify"} <RxDiscordLogo />
			</button>
			<div className="app_application-title">
				<h3>Verify With Twitter</h3>
			</div>

			<button
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "0.5rem",
					margin: "0 auto",
				}}
			>
				Verify
				<RxTwitterLogo />
			</button>
		</div>
	);
}
