let currentStep = 1;
let updateProgressBar;

function displayStep(stepNumber) {
  if (stepNumber >= 1 && stepNumber <= 3) {
    document.querySelector(".step-" + currentStep).style.display = "none";
    document.querySelector(".step-" + stepNumber).style.display = "block";
    currentStep = stepNumber;
    updateProgressBar();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const multiStepForm = document.getElementById("multi-step-form");
  const steps = Array.from(multiStepForm.querySelectorAll(".step")).slice(1);
  steps.forEach((step) => (step.style.display = "none"));

//   document.querySelectorAll(".next-step").forEach(function (nextBtn) {
//     nextBtn.addEventListener("click", function () {
//       if (currentStep < 3) {
//         document
//           .querySelector(".step-" + currentStep)
//           .classList.add("animate__animated", "animate__fadeOutLeft");
//         currentStep++;
//         setTimeout(function () {
//           steps.forEach((step) =>
//             step.classList.remove(
//               "animate__animated",
//               "animate__fadeOutLeft",
//               "animate__fadeInRight"
//             )
//           );
//           document.querySelector(".step-" + currentStep).style.display =
//             "block";
//           document
//             .querySelector(".step-" + currentStep)
//             .classList.add("animate__animated", "animate__fadeInRight");
//           updateProgressBar();
//         }, 500);
//       }
//     });
//   });

//   document.querySelectorAll(".prev-step").forEach(function (prevBtn) {
//     prevBtn.addEventListener("click", function () {
//       if (currentStep > 1) {
//         document
//           .querySelector(".step-" + currentStep)
//           .classList.add("animate__animated", "animate__fadeOutRight");
//         currentStep--;
//         setTimeout(function () {
//           steps.forEach((step) =>
//             step.classList.remove(
//               "animate__animated",
//               "animate__fadeOutRight",
//               "animate__fadeInLeft"
//             )
//           );
//           document.querySelector(".step-" + currentStep).style.display =
//             "block";
//           document
//             .querySelector(".step-" + currentStep)
//             .classList.add("animate__animated", "animate__fadeInLeft");
//           updateProgressBar();
//         }, 500);
//       }
//     });
//   });

  updateProgressBar = function () {
    const progressPercentage = ((currentStep - 1) / 2) * 100;
    document.querySelector(".progress-bar").style.width =
      progressPercentage + "%";
  };
});
