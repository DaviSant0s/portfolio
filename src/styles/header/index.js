export const viewHight = window.innerHeight;
export const certificationHight = (viewHight - 80) + 752;
export const skillsHight = certificationHight + 480;
export const projectsHight = skillsHight + 734.83;

export const styleCurrentBtnPage = {
  backgroundColor: 'rgba(255, 241, 227, 0.688)',
  borderRight: '2px solid rgba(251, 84, 78, 0.3)',
  borderLeft: '2px solid rgba(251, 84, 78, 0.3)',
  borderTop: '2px solid rgba(251, 84, 78, 0.3)',
  /* fontWeight: '600', */
}

export const MarginCurrentBtnPage = {
  home: {
    marginRight: '5px'
  },

  certifications: {
    marginRight: '5px',
    marginLeft: '5px',
  },

  skills: {
    marginRight: '5px',
    marginLeft: '5px',
  },

  projects: {
    marginRight: '5px',
    marginLeft: '5px',
  }

}