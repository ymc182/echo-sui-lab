import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
type SectionProps = {
	show?: boolean;
	id: string;
	answerRef: React.RefObject<HTMLTextAreaElement>;
};
export default function SectionFour({ show, id, answerRef }: SectionProps) {
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
					<h1>What makes you join this whitelist?</h1>
					<textarea ref={answerRef} rows={5} cols={25} placeholder="Enter Answer" />
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
