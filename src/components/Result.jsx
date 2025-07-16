import classNames from "classnames";

export const Result = ({ inputsState }) => {
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

	const dates = {
		d1: new Date(date1),
		d2: new Date(date2),
		d3: new Date(date3),
		d4: new Date(date4),
		d5: new Date(date5),
		d6: new Date(date6),
	};

	const checkVar1 = () => {
		let basic = {
			date1_LE_date3: false,
			date2_GE_date3: false,
		};
		if (dates.d1 <= dates.d3) basic.date1_LE_date3 = true;
		if (dates.d2 >= dates.d3) basic.date2_GE_date3 = true;
		return basic;
	};
	const checkVar2 = (config) => {
		let basic = {
			date1_LE_date3: false,
			date2_L_date3: false,
			date5_GE_date3: false,
			date2_GE_date4: false,
		};
		if (dates.d1 <= dates.d3) basic.date1_LE_date3 = true;
		if (dates.d2 < dates.d3) basic.date2_L_date3 = true;
		if (dates.d5 >= dates.d3) basic.date5_GE_date3 = true;
		if (dates.d2 >= dates.d4) basic.date2_GE_date4 = true;

		switch (config) {
			case "basic": {
				return basic;
			}
			case "withFlag2": {
				return checkWithFlag2(basic);
			}
		}
	};
	const checkVar3 = (config) => {
		let basic = {
			date1_LE_date3: false,
			date2_GE_date3_minus_value1: false,
			date5_L_date3: false,
			date2_GE_date4: false,
		};

		if (dates.d1 <= dates.d3) basic.date1_LE_date3 = true;
		const date3MinusValue = new Date(dates.d3);
		date3MinusValue.setDate(date3MinusValue.getDate() - Number(value1));
		if (dates.d2 >= date3MinusValue) {
			basic.date2_GE_date3_minus_value1 = true;
		}
		if (dates.d5 < dates.d3) basic.date5_L_date3 = true;
		if (dates.d2 >= dates.d4) basic.date2_GE_date4 = true;

		switch (config) {
			case "basic": {
				return basic;
			}
			case "withFlag2": {
				return checkWithFlag2(basic);
			}
		}
	};

	function checkWithFlag2(basic) {
		let resultWithFlag2 = {
			...basic,
			date2_GE_date6: false,
			dualCond: false,
			flag2: false,
		};
		if (dates.d2 >= dates.d6) resultWithFlag2.date2_GE_date6 = true;
		if (resultWithFlag2.date2_GE_date4 || resultWithFlag2.date2_GE_date6)
			resultWithFlag2.dualCond = true;
		if (flag2) resultWithFlag2.flag2 = true;

		return resultWithFlag2;
	}

	const isVariantTrue = (varCheckResult) => {
		let trimmedResult = { ...varCheckResult };
		if (trimmedResult.dualCond === true) {
			delete trimmedResult.date2_GE_date4;
			delete trimmedResult.date2_GE_date6;
		}
		return Object.values(trimmedResult).every((property) => property === true);
	};

	let v1CheckResult, v2CheckResult, v3CheckResult;
	let v1Total, v2Total, v3Total;
	if (flag1 && flag2) {
		v1CheckResult = checkVar1("withFlag2");
		v2CheckResult = checkVar2("withFlag2");
		v3CheckResult = checkVar3("withFlag2");
	} else {
		v1CheckResult = checkVar1("basic");
		v2CheckResult = checkVar2("basic");
		v3CheckResult = checkVar3("basic");
	}
	v1Total = isVariantTrue(v1CheckResult);
	v2Total = isVariantTrue(v2CheckResult);
	v3Total = isVariantTrue(v3CheckResult);
	const someVariantIsTrue = v1Total || v2Total || v3Total;

	const getInfoClass = (condition) =>
		classNames("result__status", {
			"result__status--ok": condition === true,
			"result__status--fail": condition === false,
		});
	const getConditionClass = (condition) =>
		classNames({
			"result__condition--ok": condition === true,
			"result__condition--fail": condition === false,
		});
	const getVariantClass = (condition) =>
		classNames("result__variant", {
			"result__variant--ok": condition === true,
			"result__variant--fail": condition === false,
		});

	const resultClasses = {
		info: getInfoClass(someVariantIsTrue),
		v1_classes: getVariantClass(v1Total),
		v2_classes: getVariantClass(v2Total),
		v3_classes: getVariantClass(v3Total),

		v1_date1_LE_date3: getConditionClass(v1CheckResult.date1_LE_date3),
		v2_date1_LE_date3: getConditionClass(v2CheckResult.date1_LE_date3),
		v3_date1_LE_date3: getConditionClass(v3CheckResult.date1_LE_date3),

		v1_date2_GE_date3: getConditionClass(v1CheckResult.date2_GE_date3),

		v2_date2_L_date3: getConditionClass(v2CheckResult.date2_L_date3),

		v2_date5_GE_date3: getConditionClass(
			v2CheckResult.date5_GE_date3
		),

		v3_date2_GE_date3_minus_value1: getConditionClass(
			v3CheckResult.date2_GE_date3_minus_value1
		),

		v3_date5_L_date3: getConditionClass(
			v3CheckResult.date5_L_date3
		),

		v2_v3_date2_GE_date4: getConditionClass(v2CheckResult.date2_GE_date4),
		v2_v3_date2_GE_date6: getConditionClass(v2CheckResult.date2_GE_date6),
		v2_v3_dualCond: getConditionClass(v2CheckResult.dualCond),
		v2_v3_flag2: getConditionClass(v2CheckResult.flag2),

	};

	let li_flag2, li_dualCond;
	if (flag1 && flag2) {
		li_flag2 = (
			<li className={resultClasses.v2_v3_flag2}>Доп. функционал активен</li>
		);
		li_dualCond = (
			<li className={`result__double-condition ${resultClasses.v2_v3_dualCond}`}>
				<span className={`result__subcondition ${resultClasses.v2_v3_date2_GE_date4}`}>
					Дата 2 ≥ Дата 4
				</span>
				<span>или</span>
				<span className={`result__subcondition ${resultClasses.v2_v3_date2_GE_date6}`}>
					Дата 2 ≥ Дата 6
				</span>
			</li>
		);
	} else {
		li_dualCond = (
			<li className={resultClasses.v2_v3_date2_GE_date4}>d2 ≥ d4</li>
		);
	}

	let statusMessage = (
		<div className={resultClasses.info}>
			<span>Под эти условия не подходит ни один вариант.</span>
			<span>Убедитесь, что все необходимые данные есть и заполнены без ошибок.</span>
		</div>
	);
	v1Total === true
		? (statusMessage = <div className={resultClasses.info}>Успешно! Вариант № 1 .</div>)
		: null;
	v2Total === true
		? (statusMessage = <div className={resultClasses.info}>Успешно! Вариант № 2 .</div>)
		: null;
	v3Total === true
		? (statusMessage = <div className={resultClasses.info}>Успешно! Вариант № 3 .</div>)
		: null;

	return (
		<section className="result">
			<div className="result__container">
				<h2>Результат</h2>
				{statusMessage}
				<ul className={`${resultClasses.v1_classes} result__variant--1`}>
					<li>Вариант 1</li>
					<li className={resultClasses.v1_date1_LE_date3}>Дата 1 ≤ Дата 3</li>
					<li className={resultClasses.v1_date2_GE_date3}>
						Дата 2 ≥ Дата 3
					</li>
				</ul>
				<ul className={`${resultClasses.v2_classes} result__variant--2`}>
					<li>Вариант 2</li>
					<li className={resultClasses.v2_date1_LE_date3}>Дата 1 ≤ Дата 3</li>
					<li className={resultClasses.v2_date2_L_date3}>
						Дата 2 &lt; Дата 3
					</li>
					<li className={resultClasses.v2_date5_GE_date3}>
						Дата 5 ≥ Дата 3
					</li>
					{li_dualCond}
					{li_flag2}
				</ul>
				<ul className={`${resultClasses.v3_classes} result__variant--3`}>
					<li>Вариант 3</li>
					<li className={resultClasses.v3_date1_LE_date3}>Дата 1 ≤ Дата 3</li>
					<li className={resultClasses.v3_date2_GE_date3_minus_value1}>
						Дата 2 ≥ (Дата 3 - Значение 1)
					</li>
					<li className={resultClasses.v3_date5_L_date3}>
						Дата 5 &lt; Дата 3
					</li>
					{li_dualCond}
					{li_flag2}
				</ul>
			</div>
		</section>
	);
};