import React from "react";
import { DescribeYou } from "../../../data";

type SectionProps = {
	show?: boolean;
	id: string;
	setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
	selectedRoles?: string[];
};
export default function SectionThree({ show, id, setSelectedItems, selectedRoles }: SectionProps) {
	return (
		<div
			id={id}
			style={{
				display: show ? "block" : "none",
			}}
			className="app_application-section"
		>
			<div className="app_application-title">
				<h4>Select 1 or more that describe you</h4>
			</div>
			<div className="app_application-desc-container">
				{DescribeYou.map((item) => {
					return (
						<div
							onClick={() =>
								setSelectedItems((prev) => {
									if (!prev.includes(item.title)) {
										return [...prev, item.title];
									} else {
										return prev.filter((i) => i !== item.title);
									}
								})
							}
							key={item.id}
							className={
								selectedRoles?.includes(item.title)
									? "app_application-desc-container-card app_application-desc-container-card-selected"
									: "app_application-desc-container-card"
							}
						>
							<h4>{item.title}</h4>
							<hr />
							<div>{item.description}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
