import { useState } from 'react';

export default function Header() {
  // const [state, setState] = useState({
  //   isMobileMenu: false,
  //   isSticky: false,
  //   menuItems: [{
  //     path: '#',
  //     name: 'Show All Tyres'
  //   },
  //   {
  //     path: '#',
  //     name: 'Find a Dealer'
  //   },
  //   {
  //     path: '#',
  //     name: 'Guides & Videos'
  //   },
  //   {
  //     path: '#',
  //     name: 'Go with'
  //   },
  //   {
  //     path: '#',
  //     name: 'Service & Help'
  //   }]
  // });
  const handleStateChange = (status) => {
    // status.status === Sticky.STATUS_FIXED
    //   ? setState({ ...state, isSticky: true })
    //   : setState({ ...state, isSticky: false });
  };

  return (
    <nav>
      <ul>
        {/* {this.state.menuItems.map((item) => {
          return (
            <li>{item.name}</li>
          )
        })} */}
      </ul>
    </nav>
  );
}