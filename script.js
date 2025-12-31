window.addEventListener("load", () => {
  const stack = document.querySelector(".stack");
  if (!stack) return;

  stack.classList.remove(
    "step-1",
    "step-2",
    "step-3",
    "envelope-hide"
  );

  const start = 600;       // 카드 올라가기 시작
  const liftDur = 1200;    // CSS 올라가는 duration과 동일하게

  // 1) 카드 올라가기
  setTimeout(() => {
    stack.classList.add("step-1");
  }, start);

  // 2) 카드 올라가는 도중 봉투 사라짐
  setTimeout(() => {
    stack.classList.add("envelope-hide");
  }, start + 300);

  // 3) 카드 레이어 올리기 (올라간 직후)
  setTimeout(() => {
    stack.classList.add("step-2");
  }, start + liftDur);

  // 4) 바로 내려오기 (멈춤 없음)
  setTimeout(() => {
    stack.classList.add("step-3");
  }, start + liftDur + 20); // 20ms는 이벤트 분리용
});
