import React from 'react';

export default function UserNavBar() {
  const unauthedRoutes = [
    { title: 'About', route: '/#/about' },
    { title: 'Contact', route: '/#/contact' },
  ];


  const getRoutesForNavbar = () => {
    let routesList = unauthedRoutes;
    return (
      <>
        {routesList.map((link) => {
          return (
            <li key={link.route}><a className='text-lg font-medium' href={link.route}>{link.title}</a></li>
          );
        })}
      </>
    );
  };

  const getSignedOutDropdownRoutes = () => {
    return (
      <>
        {unauthedRoutes.map((link) => {
          return (
            <li key={link.route}><a className='text-lg font-medium' href={link.route}>{link.title}</a></li>
          );
        })}
      </>
    );
  };

  const maybeShowHome = () => {
    if (window.location.hash !== '#/') {
      return <li><a className='text-lg font-medium' href="/">Home</a></li>
    }
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <ul className="menu menu-horizontal">
          {maybeShowHome()}
        </ul>
      </div>

      <div className="hidden navbar-center sm:flex">
        <ul className="menu menu-horizontal">
          {getRoutesForNavbar()}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end sm:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
            <button className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
          </div>
          <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
            {getSignedOutDropdownRoutes()}
          </ul>
        </div>
      </div>
    </div>
  );
}
