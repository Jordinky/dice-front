import React from 'react';
import Typed from 'typed.js';
import { Box } from '@mui/material';
export default function Welcome() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Welcome to the dice game Jordi Pelaez Calderini'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <Box sx={{ my: 1 }} display="flex" justifyContent="center" alignItems="center">
      <span ref={el} />
    </Box>
  );
}