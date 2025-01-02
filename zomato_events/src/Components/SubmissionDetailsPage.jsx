// SubmissionDetailsPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CheckCircle, Cancel, ArrowBack, AccountCircle, Email, Event, Category, LocationCity, Description, People } from '@mui/icons-material';

// Dummy data
const submissions = [
  {
    id: 1,
    user_name: 'John Doe',
    contact_info: 'john.doe@example.com',
    event_name: 'Tech Conference 2024',
    event_category: 'Technology',
    event_city: 'San Francisco',
    description: 'A conference showcasing the latest in technology.',
    footfall: '5000+',
    pancard_image: 'https://via.placeholder.com/300x200?text=PAN+Card',
    gst_certificate_image: 'https://via.placeholder.com/300x200?text=GST+Certificate',
  },
  {
    id: 2,
    user_name: 'Jane Smith',
    contact_info: 'jane.smith@example.com',
    event_name: 'Health & Wellness Expo',
    event_category: 'Health',
    event_city: 'Los Angeles',
    description: 'An expo dedicated to health and wellness products.',
    footfall: '3000+',
    pancard_image: 'https://via.placeholder.com/300x200?text=PAN+Card',
    gst_certificate_image: 'https://via.placeholder.com/300x200?text=GST+Certificate',
  },
];

const PreviewImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  maxHeight: '300px',
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  borderLeft: `5px solid ${theme.palette.primary.main}`,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '900px',
  margin: 'auto',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  backgroundColor: theme.palette.background.default,
}));

const IconText = ({ icon: Icon, text }) => (
  <Box display="flex" alignItems="center" gap={1}>
    <Icon color="primary" />
    <Typography variant="body1">{text}</Typography>
  </Box>
);

const SubmissionDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const submission = submissions.find((sub) => sub.id === parseInt(id));

  if (!submission) {
    return (
      <Box textAlign="center" marginTop={4}>
        <Typography variant="h5" color="error">
          Submission not found
        </Typography>
      </Box>
    );
  }

  const handleApprove = () => {
    alert(`Submission by ${submission.user_name} approved.`);
  };

  const handleReject = () => {
    alert(`Submission by ${submission.user_name} rejected.`);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h4" gutterBottom color="primary" textAlign="center">
          Submission Details
        </Typography>

        <StyledBox>
          <IconText icon={AccountCircle} text={`Name: ${submission.user_name}`} />
          <IconText icon={Email} text={`Contact Info: ${submission.contact_info}`} />
          <IconText icon={Event} text={`Event Name: ${submission.event_name}`} />
          <IconText icon={Category} text={`Event Category: ${submission.event_category}`} />
          <IconText icon={LocationCity} text={`Event City: ${submission.event_city}`} />
          <IconText icon={Description} text={`Description: ${submission.description}`} />
          <IconText icon={People} text={`Footfall: ${submission.footfall}`} />
        </StyledBox>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              PAN Card Image
            </Typography>
            <PreviewImage src={submission.pancard_image} alt="PAN Card" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              GST Certificate Image
            </Typography>
            <PreviewImage
              src={submission.gst_certificate_image}
              alt="GST Certificate"
            />
          </Grid>
        </Grid>

        <Box
          display="flex"
          justifyContent="space-between"
          marginTop={4}
          flexWrap="wrap"
        >
          <Button
            variant="contained"
            color="success"
            onClick={handleApprove}
            startIcon={<CheckCircle />}
            style={{ minWidth: '120px', margin: '5px' }}
          >
            Approve
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleReject}
            startIcon={<Cancel />}
            style={{ minWidth: '120px', margin: '5px' }}
          >
            Reject
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            startIcon={<ArrowBack />}
            style={{ minWidth: '120px', margin: '5px' }}
          >
            Back to Submissions
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default SubmissionDetailsPage;
