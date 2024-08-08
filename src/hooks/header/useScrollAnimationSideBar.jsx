import { useEffect } from "react";
import useGetHightSection from "../useGetHightSection";
import { useRef } from "react";

export default function useScrollAnimationSideBar() {

  // foi useado Ref para não causar reenderizações no componente pai
  const clickedRef = useRef({ bool: false, section: '' });

  // alturas das seções
  const height = useGetHightSection();
  
  useEffect(() => {

    // selecionando os elementos
    const home = document.querySelector('.home_sideBar');
    const certifications = document.querySelector('.certifications_sideBar');
    const skills = document.querySelector('.skills_sideBar');
    const projects = document.querySelector('.projects_sideBar');
    const experiences = document.querySelector('.experiences_sideBar');
    const contact = document.querySelector('.contact_sideBar');
    
    // calcula em qual posição se inicia cada seção do site, para mudar o estilo do header
    const certificationHight = height.home + height.certifications ;
    const skillsHight = certificationHight + height.skills;
    const projectsHight = skillsHight + height.projects;
    const experienceHight = projectsHight + height.experience;
    const contactHight = experienceHight + height.contact;
    

    // função que aplica as animações
    const animationHeader = () => {

      //reseta foco padrão
      home.classList.remove('default-focus-sidebar');

      // posição do mouse
      const position = window.scrollY;

      // altura da tela
      const viewHight = window.innerHeight;

      if(!clickedRef.current.bool){

        if(height){
          // home
          if(position <= (viewHight - 80) ){
            home.id = 'homeAnimation_sideBar';
          } else {
            home.id = '';
          }
    
          // certifications
          if(viewHight - 80 < position && position <= certificationHight ){
            certifications.id = 'certificationsAnimation_sideBar';
          } else {
            certifications.id = '';
          }
  
          // skills
          if(certificationHight < position && position <= skillsHight){
            skills.id = 'skillsAnimation_sideBar';
          } else {
            skills.id = '';
          }
  
          // projects
          if(skillsHight < position && position <= projectsHight){
            projects.id = 'projectsAnimation_sideBar';
          } else {
            projects.id = '';
          }
  
          // experiences
          if(projectsHight < position && position <= experienceHight){
            experiences.id = 'experiencesAnimation_sideBar';
          } else {
            experiences.id = '';
          }
          
          // contact
          if(experienceHight < position){
            contact.id = 'contactAnimation_sideBar';
          } else {
            contact.id = '';
          }
  
        }

      } else {

        // home
        if(clickedRef.current.section === 'home') {
          if(position <= (viewHight - 80)){
            clickedRef.current = {bool: false, section: ''};
          }
        }

        // certifications
        if(clickedRef.current.section === 'certifications') {
          if(viewHight - 80 < position && position <= certificationHight){
            clickedRef.current = {bool: false, section: ''};
          }
        }
        
        // skills
        if(clickedRef.current.section === 'skills') {
          if(certificationHight < position && position <= skillsHight){
            clickedRef.current = {bool: false, section: ''};
          }
        }

        
        // projects
        if(clickedRef.current.section === 'projects') {
          if(skillsHight < position && position <= projectsHight){
            clickedRef.current = {bool: false, section: ''};
          }
        }
        
        // experiences
        if(clickedRef.current.section === 'experiences') {
          if(projectsHight < position && position <= experienceHight){
            clickedRef.current = {bool: false, section: ''};
          }
        }

        // contact
        if(clickedRef.current.section === 'contact') {
          if(experienceHight < position){
            clickedRef.current = {bool: false, section: ''};
          }
        }
      }

    }

    const clickButtonPage = (e) => {

      // home
      if(e.target === home) {
        clickedRef.current = {bool: true, section: 'home'};
        home.id = 'homeAnimation_sideBar';

        // tiras os estilos dos outros
        certifications.id = '';
        experiences.id = '';
        skills.id = '';
        projects.id = '';
        contact.id = '';
      }

      // certifications
      if(e.target === certifications) {
        clickedRef.current = {bool: true, section: 'certifications'};
        certifications.id = 'certificationsAnimation_sideBar';

        // tiras os estilos dos outros
        home.id = '';
        experiences.id = '';
        skills.id = '';
        projects.id = '';
        contact.id = '';
      }
      
      // skills
      if(e.target === skills) {
        clickedRef.current = {bool: true, section: 'skills'};
        skills.id = 'skillsAnimation_sideBar';

        // tiras os estilos dos outros
        home.id = '';
        certifications.id = '';
        experiences.id = '';
        projects.id = '';
        contact.id = '';
      }

      // projects
      if(e.target === projects) {
        clickedRef.current = {bool: true, section: 'projects'};
        projects.id = 'projectsAnimation_sideBar';

        // tiras os estilos dos outros
        home.id = '';
        certifications.id = '';
        experiences.id = '';
        skills.id = '';
        contact.id = '';
      }

      // experiences
      if(e.target === experiences) {
        clickedRef.current = {bool: true, section: 'experiences'};
        experiences.id = 'experiencesAnimation_sideBar';

        // tiras os estilos dos outros
        home.id = '';
        certifications.id = '';
        skills.id = '';
        projects.id = '';
        contact.id = '';
      }

      // contact
      if(e.target === contact) {
        clickedRef.current = {bool: true, section: 'contact'};
        contact.id = 'contactAnimation_sideBar';

        // tiras os estilos dos outros
        home.id = '';
        certifications.id = '';
        skills.id = '';
        experiences.id = '';
        projects.id = '';
        
      }
    }

    document.addEventListener('scroll', animationHeader);

    // ouvintes de cliques para cada botão
    home.addEventListener('click', clickButtonPage);
    certifications.addEventListener('click', clickButtonPage);
    skills.addEventListener('click', clickButtonPage);
    projects.addEventListener('click', clickButtonPage);
    experiences.addEventListener('click', clickButtonPage);
    contact.addEventListener('click', clickButtonPage);

    return () => {
      document.removeEventListener('scroll', animationHeader);

      home.removeEventListener('click', clickButtonPage);
      certifications.removeEventListener('click', clickButtonPage);
      skills.removeEventListener('click', clickButtonPage);
      projects.removeEventListener('click', clickButtonPage);
      experiences.removeEventListener('click', clickButtonPage);
      contact.removeEventListener('click', clickButtonPage);
    };

  }, [height]);

  return;
}