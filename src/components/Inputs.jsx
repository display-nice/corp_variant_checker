export const Inputs = ({ iv, inputsState, setInputsState, defaultInputsState }) => {
	const {
		date1,
		date2,
		date3,
		date4,
		date5,
		value1,
		flag1,
		flag2,
		date6,
	} = inputsState;
	const changeInfoVis = () => {
		iv.setInfoIsVis(!iv.infoIsVis);
	};
	const changeInputsState = (e) => {
		const { value, type, name } = e.target;
		let newState = { ...inputsState };
		switch (type) {
			case "date":
				newState[`${name}`] = value;
				break;
			case "number":
				newState[`${name}`] = String(value);
				console.log(newState[`${name}`]);
				break;
			case "radio":
				newState[`${name}`] = Boolean(value);
				break;
		}
		setInputsState(newState);
	};
	const resetInputs = () => {
		setInputsState(defaultInputsState)
	}

	let input_flag2, input_date6;
	if (flag1 === true) {
		input_flag2 = (
			<div className="inputs__row">
				<div className="inputs__col-labels">Доп. функционал, Флаг 2</div>
				<div className="inputs__col-inputs">
					<div>
						<input
							id="flag2-yes"
							name="flag2"
							type="radio"
							value="true"
							checked={flag2 === true}
							onChange={(e) => changeInputsState(e)}
						/>
						<label htmlFor="flag2-yes">Да</label>
					</div>
					<div>
						<input
							id="flag2-no"
							name="flag2"
							type="radio"
							value=""
							checked={flag2 === false}
							onChange={(e) => changeInputsState(e)}
						/>
						<label htmlFor="flag2-no">Нет</label>
					</div>
				</div>
			</div>
		);
	}
	if (inputsState.flag1 === true && inputsState.flag2 === true) {
		input_date6 = (
			<div className="inputs__row">
				<label className="inputs__col-labels" htmlFor="date6">
					Дата 6
				</label>
				<input
					className="inputs__col-inputs"
					id="date6"
					name="date6"
					type="date"
					value={date6}
					onChange={(e) => changeInputsState(e)}
				/>
			</div>
		);
	}
	return (
		<section className="inputs">
			<div className="inputs__header">
				<h2>Ввод данных</h2>
				<button className="inputs__helpbtn" onClick={changeInfoVis}>
					Справка
				</button>
			</div>
			<form className="inputs__container">
				<div className="inputs__row">
					<label className="inputs__col-labels" htmlFor="date1">
						Дата 1
					</label>
					<input
						className="inputs__col-inputs"
						id="date1"
						name="date1"
						type="date"
						value={date1}
						onChange={(e) => changeInputsState(e)}
					/>
				</div>
				<div className="inputs__row">
					<label className="inputs__col-labels" htmlFor="date2">
						Дата 2
					</label>
					<input
						className="inputs__col-inputs"
						id="date2"
						name="date2"
						type="date"
						value={date2}
						onChange={(e) => changeInputsState(e)}
					/>
				</div>
				<div className="inputs__row">
					<label className="inputs__col-labels" htmlFor="date3">
						Дата 3
					</label>
					<input
						className="inputs__col-inputs"
						id="date3"
						name="date3"
						type="date"
						value={date3}
						onChange={(e) => changeInputsState(e)}
					/>
				</div>
				<div className="inputs__row">
					<label className="inputs__col-labels" htmlFor="date4">
						Дата 4
					</label>
					<input
						className="inputs__col-inputs"
						id="date4"
						name="date4"
						type="date"
						value={date4}
						onChange={(e) => changeInputsState(e)}
					/>
				</div>
				<div className="inputs__row">
					<label className="inputs__col-labels" htmlFor="date5">
						Дата 5
					</label>
					<input
						className="inputs__col-inputs"
						id="date5"
						name="date5"
						type="date"
						value={date5}
						onChange={(e) => changeInputsState(e)}
					/>
				</div>
				<div className="inputs__row">
					<label className="inputs__col-labels" htmlFor="value1">
						Значение 1
					</label>
					<input
						className="inputs__col-inputs"
						id="value1"
						name="value1"
						type="number"
						value={Number(value1)}
						onChange={(e) => changeInputsState(e)}
					/>
				</div>
				<div className="inputs__row">
					<div className="inputs__col-labels">Доп. функционал, Флаг 1</div>
					<div className="inputs__col-inputs">
						<div>
							<input
								id="flag1-yes"
								name="flag1"
								type="radio"
								value="true"
								checked={flag1 === true}
								onChange={(e) => changeInputsState(e)}
							/>
							<label htmlFor="flag1-yes">Да</label>
						</div>
						<div>
							<input
								id="flag1-no"
								name="flag1"
								type="radio"
								value=""
								checked={flag1 === false}
								onChange={(e) => changeInputsState(e)}
							/>
							<label htmlFor="flag1-no">Нет</label>
						</div>
					</div>
				</div>
				{input_flag2}
				{input_date6}
			</form>
			<button className="inputs__resetbtn" onClick={resetInputs}>
				Сбросить
			</button>
		</section>
	);
};