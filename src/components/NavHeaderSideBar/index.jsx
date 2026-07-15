import { Link } from 'react-scroll';
import * as m from 'motion/react-m';
import './styles.css';
import { useSideBar } from '../../context/SideBarContext';
import { useHeader } from '../../context/HeaderContext';
import { navigationSections } from '../../data/navigationSections.js';


export default function NavHeaderSideBar() {

  const { setMenuEnabled } = useSideBar();
  const { activeSection, setActiveSection } = useHeader();
  const indicatorTransition = {
    type: 'spring',
    stiffness: 420,
    damping: 34,
  };
  const itemVariants = {
    rest: { x: 0 },
    hovered: { x: 2 },
    active: { x: 0 },
  };
  const iconVariants = {
    rest: { color: '#6f6866' },
    hovered: { color: '#FB544E' },
    active: { color: '#FB544E' },
  };
  const labelVariants = {
    rest: { color: '#575251' },
    hovered: { color: '#FB544E' },
    active: { color: '#FB544E' },
  };

  const handleClickCloseSideBar = (sectionName) => {
    setActiveSection(sectionName);
    setMenuEnabled(false)
  }

  return (
    <nav className='nav-header-sideBar'>
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
            {...linkProps}
          >
            <m.div
              className='link-page'
              variants={itemVariants}
              initial={false}
              animate={itemState}
              whileHover='hovered'
              whileTap={{ x: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => handleClickCloseSideBar(item.section)}
            >
              {isActive &&
                <m.span
                  layoutId='sidebar-nav-indicator'
                  className='link-page-indicator'
                  transition={indicatorTransition}
                />
              }
              <m.span
                className="material-symbols-outlined link-page-icon"
                variants={iconVariants}
                initial={false}
              >
                {item.icon}
              </m.span>
              <m.span
                className='link-page-text'
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
