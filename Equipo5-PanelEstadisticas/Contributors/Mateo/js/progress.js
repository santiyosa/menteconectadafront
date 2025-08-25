const goals = [
  "Mejorar comunicación",
  "Retención de pacientes",
  "Manejo del estrés"
];

const goalsList = document.getElementById("goalsList");
goals.forEach((goal, index) => {
  goalsList.innerHTML += `
    <div class="group">
      <div class="relative w-10 h-10">
        <svg class="progress-ring absolute top-0 left-0 w-full h-full">
          <circle class="text-gray-200" stroke-width="4" stroke="currentColor" fill="transparent" r="14" cx="20" cy="20"/>
          <circle id="goalCircle${index}" stroke-width="4" stroke="#f59e0b" fill="transparent"
                  r="14" cx="20" cy="20"
                  stroke-dasharray="${2 * Math.PI * 14}"
                  stroke-dashoffset="${2 * Math.PI * 14}"/>
        </svg>
      </div>
      <span id="tooltip${index}" class="tooltip">${goal}: 0%</span>
    </div>
  `;
});

const mainCircle = document.getElementById("mainCircle");
const mainText = document.getElementById("mainText");

const mainRadius = 50;
const mainCircumference = 2 * Math.PI * mainRadius;
mainCircle.style.strokeDasharray = mainCircumference;
mainCircle.style.strokeDashoffset = mainCircumference;

let values = new Array(goals.length).fill(0);

function updateProgress() {
  let total = 0;

  values = values.map((val, i) => {
    let newVal = val < 100 ? val + Math.floor(Math.random() * 3) : 100;
    if (newVal > 100) newVal = 100;

    const circle = document.getElementById(`goalCircle${i}`);
    const tooltip = document.getElementById(`tooltip${i}`);
    const circumference = 2 * Math.PI * 14;
    const offset = circumference - (newVal / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    if (newVal < 40) circle.setAttribute("stroke", "#ef4444");
    else if (newVal < 70) circle.setAttribute("stroke", "#f59e0b");
    else circle.setAttribute("stroke", "#22c55e");

    tooltip.textContent = `${goals[i]}: ${newVal}%`;

    total += newVal;
    return newVal;
  });

  const average = Math.floor(total / goals.length);
  const offset = mainCircumference - (average / 100) * mainCircumference;
  mainCircle.style.strokeDashoffset = offset;

  if (average < 40) mainCircle.setAttribute("stroke", "#ef4444");
  else if (average < 70) mainCircle.setAttribute("stroke", "#f59e0b");
  else mainCircle.setAttribute("stroke", "#22c55e");

  mainText.textContent = average + "%";
}

setInterval(updateProgress, 800);
