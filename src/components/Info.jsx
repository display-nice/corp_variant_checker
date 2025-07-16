import classNames from "classnames";

export const Info = ({ infoIsVis, setInfoIsVis }) => {
	const btnClass = classNames("info", {
		"info--hidden": !infoIsVis,
	});
	const closeInfo = () => {
		setInfoIsVis(false);
	};

	return (
		<section className={btnClass}>
			<h2 className="info__header">Справка</h2>
			<p className="info__header">Источники данных для заполнения полей</p>
			<div className="info__table">
				<div className="info__row info__row--headers">
					<p className="info__cell">Параметр</p>
					<p className="info__cell">Источник данных</p>
					<p className="info__cell">Режим запуска</p>
					<p className="info__cell">Поле источника</p>
				</div>
				<div className="info__row">
					<p className="info__cell">Дата 1</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
				</div>
				<div className="info__row">
					<p className="info__cell">Дата 2</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
				</div>
				<div className="info__row">
					<p className="info__cell">Дата 3</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
				</div>
				<div className="info__row">
					<p className="info__cell">Дата 4</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
				</div>
				<div className="info__row">
					<p className="info__cell">Дата 5</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
				</div>
				<div className="info__row">
					<p className="info__cell">Значение 1</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
				</div>
				<div className="info__row">
					<p className="info__cell">Доп.функционал, Флаг 1</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
				</div>
				<div className="info__row">
					<p className="info__cell">Доп.функционал, Флаг 2</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
				</div>
				<div className="info__row">
					<p className="info__cell">Дата 6</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
					<p className="info__cell">**********</p>
				</div>
			</div>
			<div className="info__close" onClick={closeInfo}>
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 16 16"
				>
					<path
						fill="#444444"
						d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"
					></path>
				</svg>
			</div>
		</section>
	);
};
