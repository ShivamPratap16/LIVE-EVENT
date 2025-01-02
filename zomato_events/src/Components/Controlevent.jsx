// EventManagementPage.js
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import UploadFileIcon from '@mui/icons-material/UploadFile';

// Dummy data
const eventData = {
  id: 1,
  event_name: 'Tech Conference 2024',
  event_description: 'A conference showcasing the latest in technology.',
  event_price: 100,
  event_images: [
    'https://via.placeholder.com/300x200?text=Event+Image+1',
    'https://via.placeholder.com/300x200?text=Event+Image+2',
  ],
};

const PreviewImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '200px',
  marginBottom: '10px',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
});

const StyledCard = styled(Card)({
  maxWidth: '90%',
  margin: '20px auto',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
});

const EventManagementPage = () => {
  const [event, setEvent] = useState(eventData);
  const [newImage, setNewImage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (field, value) => {
    setEvent({ ...event, [field]: value });
  };

  const handleAddImage = () => {
    if (newImage.trim()) {
      setEvent({ ...event, event_images: [...event.event_images, newImage] });
      setNewImage('');
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = event.event_images.filter((_, i) => i !== index);
    setEvent({ ...event, event_images: updatedImages });
  };

  const handleSaveChanges = () => {
    // Save changes to backend (if connected)
    setIsEditing(false);
    alert('Event details updated successfully!');
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Event Management
        </Typography>

        <Box marginBottom="20px">
          <Typography variant="h6" gutterBottom>
            Event Name
          </Typography>
          <TextField
            fullWidth
            value={event.event_name}
            onChange={(e) => handleUpdate('event_name', e.target.value)}
            disabled={!isEditing}
          />
        </Box>

        <Box marginBottom="20px">
          <Typography variant="h6" gutterBottom>
            Event Description
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={event.event_description}
            onChange={(e) => handleUpdate('event_description', e.target.value)}
            disabled={!isEditing}
          />
        </Box>

        <Box marginBottom="20px">
          <Typography variant="h6" gutterBottom>
            Event Price ($)
          </Typography>
          <TextField
            type="number"
            fullWidth
            value={event.event_price}
            onChange={(e) => handleUpdate('event_price', e.target.value)}
            disabled={!isEditing}
          />
        </Box>

        <Box marginBottom="20px">
          <Typography variant="h6" gutterBottom>
            Event Images
          </Typography>
          <Grid container spacing={2}>
            {event.event_images.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box position="relative">
                  <PreviewImage src={image} alt={`Event Image ${index + 1}`} />
                  {isEditing && (
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleRemoveImage(index)}
                      style={{
                        position: 'absolute',
                        top: '5px',
                        right: '5px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      }}
                    >
                      ✖
                    </IconButton>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {isEditing && (
          <Box marginBottom="20px">
            <Typography variant="h6" gutterBottom>
              Add New Image
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={10}>
                <TextField
                  fullWidth
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  placeholder="Paste image URL"
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<UploadFileIcon />}
                  onClick={handleAddImage}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        <Box display="flex" justifyContent="space-between" marginTop="20px">
          {isEditing ? (
            <Button variant="contained" color="success" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsEditing(true)}
            >
              Edit Event
            </Button>
          )}
          <Button variant="outlined" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default EventManagementPage;
