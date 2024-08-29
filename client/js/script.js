const headerSkills = document.querySelectorAll('.header__skills');

headerSkills.forEach((el) => {
    const headerSkillsDropmenu = el.querySelector('.header__skillsdropmenu');
    
    el.addEventListener('mouseenter', () => {
        headerSkillsDropmenu.classList.add('show');
    });

    el.addEventListener('mouseleave', () => {
        headerSkillsDropmenu.classList.remove('show');
    });
});
