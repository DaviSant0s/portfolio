import { Link } from 'react-scroll';
import * as m from 'motion/react-m';
import { useHeader } from '../../context/HeaderContext';
import { navigationSections } from '../../data/navigationSections.js';
import './styles.css';


export default function NavHeader({ styles={} }) {
  const { activeSection, setActiveSection } = useHeader();
  const indicatorTransition = {
    type: 'spring',
    stiffness: 420,
    damping: 34,
  };
  const itemVariants = {
    rest: { y: 0 },
    hovered: { y: -2 },
    active: { y: 0 },
  };
  const labelVariants = {
    rest: { color: '#595554' },
    hovered: { color: '#FB544E' },
    active: { color: '#FB544E' },
  };

  return (
    <nav style={styles} className='nav-header'>
      {navigationSections.map((item) => {
        const isActive = activeSection === item.section;
        const itemState = isActive ? 'active' : 'rest';
        const linkProps = item.duration ? { duration: item.duration } : {};

        return (
          <Link
            key={item.section}
            to={item.to}
            smooth={true}
            offset={item.offset}
            className='Link'
            onClick={() => setActiveSection(item.section)}
            {...linkProps}
          >
            <m.div
              className='link-page'
              variants={itemVariants}
              initial={false}
              animate={itemState}
              whileHover='hovered'
              whileTap={{ y: 0 }}
              transition={{ duration: 0.18 }}
            >
              {isActive &&
                <m.span
                  layoutId='header-nav-indicator'
                  className='link-page-indicator'
                  transition={indicatorTransition}
                />
              }
              <m.span
                className='link-page-label'
                variants={labelVariants}
                initial={false}
              >
                {item.label}
              </m.span>
            </m.div>
          </Link>
        );
      })}
    </nav>
  )
}
