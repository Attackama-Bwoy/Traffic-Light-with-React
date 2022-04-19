import React, { useState } from "react";

function cambioDeColor() {
	const [Color, setColor] = useState("colorVerde");

	return (
		<div>
			<div id="palitoSemaforo"></div>
			<div className="" id="semaforo">
				<div
					onClick={() => setColor("colorRojo")}
					className={
						"colorRojo " +
						(Color === "colorRojo" ? " selected" : "")
					}></div>
				<div
					onClick={() => setColor("colorAmarillo")}
					className={
						"colorAmarillo" +
						(Color === "colorAmarillo" ? " selected" : "")
					}></div>
				<div
					onClick={() => setColor("colorVerde")}
					className={
						"colorVerde" +
						(Color === "colorVerde" ? " selected" : "")
					}></div>
			</div>
		</div>
	);
}

export default cambioDeColor;
