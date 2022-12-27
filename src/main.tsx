import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { ToastContainer } from "react-toastify";
import { WalletProvider } from "@suiet/wallet-kit";
import "react-toastify/dist/ReactToastify.css";
import "@suiet/wallet-kit/style.css";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<WalletProvider>
			<BrowserRouter>
				<Container>
					<Header />
					<App />
					<Footer />
				</Container>
				<ToastContainer
					theme="dark"
					toastStyle={{
						backgroundColor: "rgba(0, 0, 0, 0.3)",
						backdropFilter: "blur(10px)",
						WebkitBackdropFilter: "blur(10px)",
					}}
				/>
			</BrowserRouter>
		</WalletProvider>
	</React.StrictMode>
);
