import React from 'react';
import { Card, Typography, Grid } from '@mui/material';

const Dashboard = () => {
  return (
    <>
     <div className='p-4'>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Typography variant="h6" gutterBottom>
              Total Translations
            </Typography>
            <Typography variant="body1">450</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Typography variant="h6" gutterBottom>
              Active Users
            </Typography>
            <Typography variant="body1">120</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Typography variant="h6" gutterBottom>
              Total Language
            </Typography>
            <Typography variant="body1">03</Typography>
          </Card>
        </Grid>
        {/* Add more cards for other statistics */}
      </Grid>
     </div>
    </>
  );
};

export default Dashboard;
