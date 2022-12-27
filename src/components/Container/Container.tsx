import "./Container.scss";
type Props = {
	children?: JSX.Element | JSX.Element[];
};

export default function Container({ children }: Props) {
	return <div className="app_container">{children}</div>;
}
