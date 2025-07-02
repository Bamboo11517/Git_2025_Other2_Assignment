function checkAnswer() {
	const selected = document.querySelector('input[name="quiz"]:checked');
	const result = document.getElementById("result");

	if (!selected) {
		result.textContent = "選択肢を選んでください。";
		result.style.color = "orange";
		return;
	}

	if (selected.value === "プロトタイピング") {
		result.textContent = "正解です！";
		result.style.color = "green";
	} else {
		result.textContent = "不正解です。";
		result.style.color = "red";
	}
}
