import React from 'react';
import { Grid, Typography, Container, Button, Box } from '@mui/material';

function Footer() {
  const footerLinks = [
    {
      title: 'Company',
      links: ['About', 'Blog', 'Press', 'Jobs', 'Partner'],
    },
    {
      title: 'Solution',
      links: ['Marketing', 'Analytics', 'Commerce', 'Inlights', 'Support'],
    },
    {
      title: 'Documentation',
      links: ['Guides', 'API Status'],
    },
    {
      title: 'Legal',
      links: ['Claim', 'Privacy', 'Terms'],
    },
  ];

  return (
    <Box sx={{ bgcolor: 'black', color: 'white', mt: 10, pt: 6 }}>
      <footer>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {footerLinks.map((section, idx) => (
              <Grid item xs={6} md={3} key={idx}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    mb: 1,
                  }}
                >
                  {section.title}
                </Typography>
                {section.links.map((item, i) => (
                  <Box key={i} sx={{ py: 0.5 }}>
                    <Button
                      variant="text"
                      sx={{
                        color: 'gray',
                        fontSize: '0.9rem',
                        textTransform: 'none',
                        '&:hover': { textDecoration: 'underline', color: 'white' },
                        padding: 0,
                      }}
                    >
                      {item}
                    </Button>
                  </Box>
                ))}
              </Grid>
            ))}
          </Grid>
        </Container>

        <Box sx={{ borderTop: '1px solid #444', mt: 4, py: 3 }}>
          <Container maxWidth="lg">
            <Typography variant="body2" align="center" color="gray">
              &copy; {new Date().getFullYear()} Debasis Mohanty. All rights reserved.
            </Typography>
            <Typography variant="body2" align="center" color="gray">
              Made with ❤️ by Me.
            </Typography>
          </Container>
        </Box>
      </footer>
    </Box>
  );
}

export default Footer;
