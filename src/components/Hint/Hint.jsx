import React from "react";
import "./Hint.css";

/**
	Это компонент-справка "Узнать подробнее об этом проекте"
	Немного странный потому, что кочует из проекта в проект :)
*/

export class Hint extends React.Component {
	constructor(props) {
		super(props);
		this.hintPointerRef = React.createRef();
		this.hintWrapperRef = React.createRef();
		this.hintDescRef = React.createRef();
	}

	hideHintPointer = () => {
		this.hintPointerRef.current.classList.add("hint__pointer--hidden");
	};
	openHintInfo = () => {
		this.hintPointerRef.current.classList.add("hint__pointer--hidden");
		this.hintWrapperRef.current.style.alignItems = "flex-start";
		this.hintDescRef.current.classList.toggle("hint__description--active");
	};
	render() {
		return (
			<aside className="hint">
				<div ref={this.hintWrapperRef} id="hint__wrapper" className="hint__wrapper">
					<button onClick={this.openHintInfo} id="hint__btn" className="hint__btn">
						<svg
							className="hint__icon bi bi-info-square"
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							height="50"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
							<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
						</svg>
					</button>
					<div ref={this.hintDescRef} id="hint__description" className="hint__description">
						<h2 className="hint__header">Особенности проекта</h2>
						<ul className="hint__list">
							<li className="hint__item">
								Данная публичная гитхаб-версия проекта представляет собой рафинированный,
								обезжиренный, абстрактный клон моего реального проекта. Публичная версия полностью очищена от
								коммерческой тайны (включая имена переменных).
							</li>
							<li className="hint__item">
								Реальный проект предназначен для прозрачности и проверки расчётов кастомного функционала по
								определённой бизнес-логике. Используется рядовыми пользователями и техподдержкой.
							</li>
							<li className="hint__item">Проект написан на React + Vite.</li>
							<li className="hint__item">
								CSS: модульная структура, БЭМ, Flexbox, Grid. Глобальные переменные для выбора
								цвета.
							</li>
							<li className="hint__item">
								Статичная вёрстка под десктопы. Не используется на малых экранах.
							</li>

						</ul>
					</div>
					<div ref={this.hintPointerRef} id="hint__pointer" className="hint__pointer">
						<div className="hint__pointer-text">&#9668; Узнать подробнее об этом проекте</div>
						<div
							onClick={this.hideHintPointer}
							id="hint__pointer-close"
							className="hint__pointer-close"
						>
							&#10008;
						</div>
					</div>
				</div>
			</aside>
		);
	}
}
