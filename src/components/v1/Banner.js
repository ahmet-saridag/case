import { useState } from 'react';

export default function Banner() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleStateChange = (status) => {
    // status.status === Sticky.STATUS_FIXED
    //   ? setState({ ...state, isSticky: true })
    //   : setState({ ...state, isSticky: false });
  };

  return (
    <div>
      <h1>Banner</h1>
    </div>
  );
}