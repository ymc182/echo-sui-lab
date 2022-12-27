import React from "react";
import { toast } from "react-toastify";

type SectionProps = {
	show?: boolean;
	id: string;
	setCurrentSection: React.Dispatch<React.SetStateAction<number>>;
};
export default function SectionTwo({ show, id, setCurrentSection }: SectionProps) {
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
					toast.info("I will let you go without verifying for now");
					setCurrentSection((prev) => prev + 1);
				}}
			>
				Verify
			</button>
		</div>
	);
}
