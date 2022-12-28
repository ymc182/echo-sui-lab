import { useWallet } from "@suiet/wallet-kit";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import "./Application.scss";
import SectionFour from "./SectionFour/SectionFour";
import SectionOne from "./SectionOne/SectionOne";
import SectionThree from "./SectionThree/SectionThree";
import SectionTwo from "./SectionTwo/SectionTwo";
import { GrPrevious, GrNext } from "react-icons/gr";
export default function Application() {
	const { address, disconnect } = useWallet();
	const [startSection, setStartSection] = React.useState(address ? 2 : 1);
	const [currentSection, setCurrentSection] = React.useState(startSection);
	const [selectedRoles, setSelectedRoles] = React.useState<string[]>([]);
	const answerRef = React.useRef<HTMLInputElement>(null);
	const websiteRef = React.useRef<HTMLInputElement>(null);
	useEffect(() => {
		setStartSection(address ? 2 : 1);
		setCurrentSection(address ? 2 : 1);
	}, [address]);

	function nextSection() {
		if (!address) {
			toast.warn("Please connect your wallet first");
			return;
		}

		if (currentSection < 4) {
			setCurrentSection(currentSection + 1);
		}
	}
	function prevSection() {
		if (currentSection > startSection) {
			setCurrentSection(currentSection - 1);
		}
	}
	async function restart() {
		setSelectedRoles([]);
		await disconnect();
	}
	return (
		<div>
			<div className="app_application-stepper">
				<Stepper currentSection={currentSection} id={1}>
					Wallet
				</Stepper>
				<NextStepArrow />
				<Stepper currentSection={currentSection} id={2}>
					Verify
				</Stepper>
				<NextStepArrow />
				<Stepper currentSection={currentSection} id={3}>
					Details
				</Stepper>
				<NextStepArrow />
				<Stepper currentSection={currentSection} id={4}>
					Submit
				</Stepper>
			</div>
			<div className="app_application">
				<div className="app_application-content">
					<SectionOne id="section1" show={currentSection == 1} />
					<SectionTwo
						id="section2"
						show={currentSection == 2}
						address={address}
						setCurrentSection={setCurrentSection}
					/>
					<SectionThree
						id="section3"
						show={currentSection == 3}
						setSelectedItems={setSelectedRoles}
						selectedRoles={selectedRoles}
					/>
					<SectionFour id="section4" show={currentSection == 4} answerRef={answerRef} websiteRef={websiteRef} />
				</div>
			</div>
			<div className="app_application-next-btn">
				<div className="app_application-step-icon">
					<GrPrevious onClick={prevSection} />
				</div>

				<button
					onClick={restart}
					className="btn-no-border btn-red-hover"
					style={{
						color: "rgba(214, 55, 55, 0.861)",
					}}
				>
					Reset
				</button>
				<div className="app_application-step-icon">
					<GrNext onClick={nextSection} />
				</div>
			</div>
		</div>
	);
}

type SectionProps = {
	currentSection: number;
	id: number;
	children?: JSX.Element | JSX.Element[] | string;
};

function Stepper({ currentSection, id, children }: SectionProps) {
	return (
		<div
			className={currentSection == id ? "app_application_current-step app_application_step" : "app_application_step"}
		>
			<div>{id}</div>
			<i>{children}</i>
		</div>
	);
}

function NextStepArrow() {
	return (
		<div className="app_application_next-step-arrow">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12 5L19 12L12 19" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</div>
	);
}
