import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
type SectionProps = {
	show?: boolean;
	id: string;
	answerRef: React.RefObject<HTMLInputElement>;
	websiteRef: React.RefObject<HTMLInputElement>;
};
export default function SectionFour({ show, id, answerRef, websiteRef }: SectionProps) {
	return (
		<div
			id={id}
			style={{
				display: show ? "block" : "none",
			}}
			className="app_application-section"
		>
			<div className="app_application-title">
				<div className="app_application-questions">
					<h3>What makes you join this whitelist?</h3>
					<input ref={answerRef} placeholder="Enter Answer" />
					<h3>Do you have any projects / portfolio / website? </h3>
					<input ref={answerRef} placeholder="Enter Answer" />
					<Link to="/">
						<button
							onClick={() => {
								toast.success("Submitted!");
							}}
						>
							Submit
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
