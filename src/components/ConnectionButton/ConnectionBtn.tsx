import { ConnectButton, ConnectModal, useWallet } from "@suiet/wallet-kit";
import React, { useEffect } from "react";
import "./ConnectionBtn.scss";

export default function ConnectionBtn({ className }: { className?: string }) {
	const [showModal, setShowModal] = React.useState(false);
	const { connected, disconnect, address, on } = useWallet();

	async function handleConnect(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (connected) {
			await disconnect();
			return;
		} else {
			setShowModal(true);
		}
	}
	useEffect(() => {
		if (!address) return;

		setShowModal(false);
	}, [address]);
	return (
		<div className={"app_connection-btn " + className}>
			<button onClick={(e) => handleConnect(e)}>{address ? truncateAddress(address) : "Connect"}</button>
			<ConnectModal open={showModal} onOpenChange={() => setShowModal(false)} />
		</div>
	);
}
function truncateAddress(address: string) {
	return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
