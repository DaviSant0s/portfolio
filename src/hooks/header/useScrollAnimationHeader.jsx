import { useEffect } from "react";
import useGetHightSection from "../useGetHightSection";

export default function useScrollAnimationHeader() {
  // alturas das seções
  const height = useGetHightSection();
  
  useEffect(() => {

    // selecionando os elementos
    const home = document.querySelector('.home');
    const certifications = document.querySelector('.certifications');
    const skills = document.querySelector('.skills');
    const projects = document.querySelector('.projects');
    const experiences = document.querySelector('.experiences');
    const contact = document.querySelector('.contact');

    // calcula em qual posição se inicia cada seção do site, para mudar o estilo do header
    const certificationHight = height.home + height.certifications ;
    const skillsHight = certificationHight + height.skills;
    const projectsHight = skillsHight + height.projects;
    const experienceHight = projectsHight + height.experience;
    const contactHight = experienceHight + height.contact;

    // função que aplica as animações
    const animationHeader = () => {

      // posição do mouse
      const position = window.scrollY;

      // altura da tela
      const viewHight = window.innerHeight;

      if(height){
        // home
        if(position <= (viewHight - 80) ){
          home.id = 'homeAnimation';
        } else {
          home.id = '';
        }
  
        // certifications
        if(viewHight - 80 < position && position <= certificationHight ){
          certifications.id = 'certificationsAnimation';
        } else {
          certifications.id = '';
        }

        // skills
        if(certificationHight < position && position <= skillsHight){
          skills.id = 'skillsAnimation';
        } else {
          skills.id = '';
        }

        // projects
        if(skillsHight < position && position <= projectsHight){
          projects.id = 'projectsAnimation';
        } else {
          projects.id = '';
        }

        // experiences
        if(projectsHight < position && position <= experienceHight){
          experiences.id = 'experiencesAnimation';
        } else {
          experiences.id = '';
        }
        
        // contact
        if(experienceHight < position){
          contact.id = 'contactAnimation';
        } else {
          contact.id = '';
        }

      }


    }

    document.addEventListener('scroll', animationHeader);

    return () => {
      document.removeEventListener('scroll', animationHeader);
    };

  }, [height]);

  return;
}