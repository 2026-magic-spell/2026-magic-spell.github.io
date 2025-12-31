window.addEventListener("load", () => {
  const stack = document.querySelector(".stack");
  if (!stack) return;

  stack.classList.remove(
    "step-1",
    "step-2",
    "step-3",
    "envelope-hide"
  );

  const start = 600;   // 카드 올라가기 시작
  const pause = 200;   // 👈 멈춰있는 시간 (ms)

  // 1) 카드 올라가기
  setTimeout(() => {
    stack.classList.add("step-1");
  }, start);

  // 2) 카드 올라가는 도중 봉투 사라짐
  setTimeout(() => {
    stack.classList.add("envelope-hide");
  }, start + 300);

  // 3) 카드 레이어 올리기 (위치 그대로, '멈춘 상태')
  setTimeout(() => {
    stack.classList.add("step-2");
  }, start + 1200);

  // 4) 카드 내려오기
  setTimeout(() => {
    stack.classList.add("step-3");
  }, start + 800 + pause);
});
