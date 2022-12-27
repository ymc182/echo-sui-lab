import React from "react";
import ConnectionBtn from "../../../components/ConnectionButton/ConnectionBtn";

type SectionProps = {
	show?: boolean;
	id: string;
};
export default function SectionOne({ show, id }: SectionProps) {
	return (
		<div
			id={id}
			style={{
				display: show ? "block" : "none",
			}}
			className="app_application-section"
		>
			<div className="app_application-title">
				<h1>Connect Your Wallet To Get Started</h1>
			</div>
			<div>
				<ConnectionBtn />
			</div>
		</div>
	);
}
