import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Result } from "./components/Result.jsx";
import { Info } from "./components/Info.jsx";
import { Inputs } from "./components/Inputs.jsx";
import { Hint } from "./components/Hint/Hint.jsx";
import "./css/_style.css";

function App() {
	const defaultInputsState = {
		date1: "",
		date2: "",
		date3: "",
		date4: "",
		date5: "",
		value1: "",
		flag1: false,
		flag2: true,
		date6: "",
	};
	const initialInputsState = {
		date1: "2025-04-14",
		date2: "2025-04-14",
		date3: "2025-04-15",
		date4: "2025-04-13",
		date5: "2025-04-15",
		value1: "5",
		flag1: true,
		flag2: true,
		date6: "",
	};
	const [infoIsVis, setInfoIsVis] = useState(false);
	const [inputsState, setInputsState] = useState(initialInputsState);

	return (
		<div>
			<Hint />
			<div className="app">
				<header className="header">
					<div className="header__logo">Логотип компании</div>
					<div className="header__text">Группа поддержки</div>
					<div className="header__text">React-утилита для проверки вариантов</div>
				</header>
				<main className="main">
					<Inputs
						iv={{ infoIsVis, setInfoIsVis }}
						inputsState={inputsState}
						setInputsState={setInputsState}
						defaultInputsState={defaultInputsState}
					/>
					<div className="main__resultinfo-ctr">
						<Result inputsState={inputsState} />
						<Info infoIsVis={infoIsVis} setInfoIsVis={setInfoIsVis} />
					</div>
				</main>
			</div>
		</div>
	);
}

createRoot(document.getElementById("root")).render(<App />);
