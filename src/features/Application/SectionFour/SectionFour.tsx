import React from "react";
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
					<button>Submit</button>
				</div>
			</div>
		</div>
	);
}
