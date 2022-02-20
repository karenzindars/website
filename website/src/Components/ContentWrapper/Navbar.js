import React from 'react'

const Menu = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [head, ...tail] = React.Children.toArray(children);

  return (
    <div
      className='menu'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {head}
      {isOpen && <div className='open'>{tail}</div>}
    </div>
  );
};

function MySophisticatedDropdownMenu() {
  const items = [
    {label: 'Classes', href: "/#/classes"},
    {label: 'Group Classes', href: "/#/group-classes"},
    {label: 'Continuing Education Courses', href: "/#/continuing-education-courses"},
  ];
  return (
    <Menu>
      {items.map(({label, href}, index) => (
        <div key={index} onClick={() => {}}>
          <a {...{href}} className="nav-item">{label}</a>
        </div>
      ))}
    </Menu>
  );
}

export default function Navbar() {
  const decisionsByBorgore = [
    { label: 'HOME', route: '/#/home' },
    { label: 'ABOUT', route: '/#/about' },
    { label: 'MENTORING', route: '/#/mentoring' },
    { label: 'SESSIONS', route: '/#/sessions' },
    { label: 'CLASSES»', route: '/#/classes' }, // todo make a component
    { label: 'CONTACT', route: '/#/contact' },
  ];
  return (
    <div className="navbar">
      <div className="navbar-menu-container">
        {decisionsByBorgore.map(({ label, route }, index) => {
          if (label !== 'CLASSES»') {
            return <a key={index} href={route} className="nav-item">{label}</a>
          } else {
            return <MySophisticatedDropdownMenu key={index} />
          }
        })}
      </div>
    </div>
  )
}
