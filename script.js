// ############ local Storage #############
function loadStoredData() {
  const userData = JSON.parse(localStorage.getItem('formData'));

  if (userData) {
    const form = document.getElementById('form');
    const formElements = [...form.elements];
    formElements.forEach((element) => {
      if (element.tagName !== 'BUTTON') {
        element.value = userData[element.id] || '';
      }
    });
  }
}
loadStoredData();

const storeFormData = (inputID) => {
  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  formData[inputID] = document.getElementById(inputID).value;
  localStorage.setItem('formData', JSON.stringify(formData));
};
const storedInputs = document.querySelectorAll('.form-input');
storedInputs.forEach((input) => input.addEventListener('input', () => {
  storeFormData(input.id);
}));

const data = [
  {
    id: 1,
    projectPopName: 'Tonic',
    techPoptype: 'CANOPY',
    techPopDevType: 'Back End Dev',
    techPopDevYear: '2015',
    ProjectPopImageUrl: './figmaImages/snapshoots/desk-1.svg',
    ProjectPopDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    usedLang1: 'html',
    usedLang2: 'CSS',
    usedLang3: 'JavaScript',
  },
  {
    id: 2,
    projectPopName: 'Multi-Post Stories',
    techPoptype: 'FACEBOOK',
    techPopDevType: 'Full Stack Dev',
    techPopDevYear: '2015',
    ProjectPopImageUrl: './figmaImages/snapshoots/Snapshoot Portfolio-4.svg',
    ProjectPopDesc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    usedLang1: 'html',
    usedLang2: 'CSS',
    usedLang3: 'JavaScript',
  },
  {
    id: 3,
    projectPopName: 'Facebook 360',
    techPoptype: 'FACEBOOK',
    techPopDevType: 'Full Stack Dev',
    techPopDevYear: '2015',
    ProjectPopImageUrl: './figmaImages/snapshoots/Snapshoot Portfolio.svg',
    ProjectPopDesc: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    usedLang1: 'html',
    usedLang2: 'CSS',
    usedLang3: 'JavaScript',
  },
  {
    id: 4,
    projectPopName: 'Uber Navigation',
    techPoptype: 'Uber',
    techPopDevType: 'Lead Developer',
    techPopDevYear: '2018',
    ProjectPopImageUrl: './figmaImages/snapshoots/Snapshoot Portfolio-2.svg',
    ProjectPopDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    usedLang1: 'html',
    usedLang2: 'CSS',
    usedLang3: 'JavaScript',
  },
];

const humburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const menuLinks = document.querySelectorAll('.navLinks ul li a');

// Toggle mobile navigation menu
humburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth scrolling to the corresponding sections
menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });

      // Hide mobile navigation menu after clicking on a link
      if (navLinks.classList.contains('show')) {
        if (event.target.tagName === 'A' || event.target.tagName === 'I') {
          navLinks.classList.remove('show');
        }
      }
    }
  });
});

function CreatePopup(popupData) {
  const projectPop = document.createElement('div');
  projectPop.setAttribute('class', 'project-pop');
  projectPop.setAttribute('id', 'project-pop');
  const projectPopContainer = document.createElement('div');
  projectPopContainer.setAttribute('class', 'project-pop-container');
  const projectPopName = document.createElement('h2');
  projectPopName.setAttribute('class', 'project-pop-name');
  projectPopName.innerHTML = popupData.projectPopName;
  const techPop = document.createElement('div');
  techPop.setAttribute('class', 'tech-pop');
  const techPopType = document.createElement('p');
  techPopType.setAttribute('class', 'tech-pop-type');
  techPopType.innerHTML = popupData.techPoptype;
  const techPopSpan1 = document.createElement('span');
  techPopSpan1.innerHTML = '•';
  const techPopDevType = document.createElement('p');
  techPopDevType.innerHTML = popupData.techPopDevType;
  const techPopSpan2 = document.createElement('span');
  techPopSpan2.innerHTML = '•';
  const techPopDevYear = document.createElement('p');
  techPopDevYear.innerHTML = popupData.techPopDevYear;
  const ProjectPopImageDiv = document.createElement('div');
  ProjectPopImageDiv.setAttribute('class', 'project-pop-image-div');
  const ProjectPopImage = document.createElement('img');
  ProjectPopImage.setAttribute('src', popupData.ProjectPopImageUrl);
  ProjectPopImage.setAttribute('alt', 'project image');
  const ProjectPopDesc = document.createElement('p');
  ProjectPopDesc.setAttribute('class', 'project-pop-desc');
  ProjectPopDesc.innerHTML = popupData.ProjectPopDesc;
  const container10 = document.createElement('div');
  container10.setAttribute('class', 'container10');
  const usedLang = document.createElement('div');
  usedLang.setAttribute('class', 'used-lang');
  const usedLangP1 = document.createElement('p');
  usedLangP1.innerHTML = popupData.usedLang1;
  const usedLangP2 = document.createElement('p');
  usedLangP2.innerHTML = popupData.usedLang2;
  const usedLangP3 = document.createElement('p');
  usedLangP3.innerHTML = popupData.usedLang3;
  const popBtns = document.createElement('div');
  const span = document.createElement('hr');
  span.setAttribute('class', 'line-span');
  popBtns.setAttribute('class', 'pop-btn');
  const liveBtn = document.createElement('button');
  liveBtn.setAttribute('class', 'live-btn');
  liveBtn.setAttribute('type', 'button');
  liveBtn.innerHTML = 'See live <i class="fas fa-arrow-circle-right fa-lg"></i>';
  const sourceBtn = document.createElement('button');
  sourceBtn.setAttribute('class', 'source-btn');
  sourceBtn.setAttribute('type', 'button');
  sourceBtn.innerHTML = 'See Source <i class="fab fa-github fa-lg"></i>';

  const closeBtnPop = document.createElement('i');
  closeBtnPop.className = 'fas fa-times';
  closeBtnPop.addEventListener('click', () => {
    const popup = document.querySelector('.project-pop');
    if (popup) {
      popup.parentElement.removeChild(popup);
    }
  });

  techPop.append(techPopType);
  techPop.append(techPopSpan1);
  techPop.append(techPopDevType);
  techPop.append(techPopSpan2);
  techPop.append(techPopDevYear);
  ProjectPopImageDiv.append(ProjectPopImage);
  usedLang.append(usedLangP1);
  usedLang.append(usedLangP2);
  usedLang.append(usedLangP3);
  popBtns.append(liveBtn);
  popBtns.append(sourceBtn);
  container10.append(usedLang);
  container10.append(span);
  container10.append(popBtns);
  projectPopContainer.append(closeBtnPop);
  projectPopContainer.append(projectPopName);
  projectPopContainer.append(techPop);
  projectPopContainer.append(ProjectPopImageDiv);
  projectPopContainer.append(ProjectPopDesc);
  projectPopContainer.append(container10);
  projectPop.append(projectPopContainer);
  return projectPop;
}
const { body } = document;

document.querySelectorAll('.pop-btn').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    if (!document.querySelector('.project-pop')) {
      const popupData = data[parseInt(event.target.id, 10)];
      const popup = CreatePopup(popupData);
      body.append(popup);
    }
  });
});

// ######## form client side validation ########
const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  errorMsg.innerHTML = message;
  errorMsg.style.display = 'block';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return email === email.toLowerCase();
}

function checkInputs() {
  let valid = true;
  let errorMsg = '';

  const emailValue = email.value.trim();
  if (emailValue === '') {
    valid = false;
    errorMsg = 'Email cannot be blank';
    setErrorFor(email, errorMsg);
  } else if (!isEmail(emailValue)) {
    valid = false;
    errorMsg = 'Email should be in lowercase';
    setErrorFor(email, errorMsg);
  } else {
    setSuccessFor(email);
  }

  return { valid, errorMsg };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const validation = checkInputs();
  if (validation.valid) {
    form.submit();
  }
});
