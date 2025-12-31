window.onload = () => {
  const scene = document.querySelector('.scene');

  const steps = [
    'step-1',
    'step-2',
    'step-3',
    'step-4',
    'step-5'
  ];

  steps.forEach((step, i) => {
    setTimeout(() => {
      scene.className = `scene ${step}`;
    }, i * 900);
  });
};
