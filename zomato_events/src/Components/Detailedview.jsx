import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

// Dummy data
const submissions = [
  { id: 1, user_name: 'John Doe', contact_info: 'john.doe@example.com', status: 'Pending', created_at: '2024-12-01' },
  { id: 2, user_name: 'Jane Smith', contact_info: 'jane.smith@example.com', status: 'Approved', created_at: '2024-12-02' },
  { id: 3, user_name: 'Bob Johnson', contact_info: 'bob.johnson@example.com', status: 'Rejected', created_at: '2024-12-03' },
  { id: 1, user_name: 'John Doe', contact_info: 'john.doe@example.com', status: 'Pending', created_at: '2024-12-01' },
  { id: 2, user_name: 'Jane Smith', contact_info: 'jane.smith@example.com', status: 'Approved', created_at: '2024-12-02' },
  { id: 3, user_name: 'Bob Johnson', contact_info: 'bob.johnson@example.com', status: 'Rejected', created_at: '2024-12-03' },
  { id: 1, user_name: 'John Doe', contact_info: 'john.doe@example.com', status: 'Pending', created_at: '2024-12-01' },
  { id: 2, user_name: 'Jane Smith', contact_info: 'jane.smith@example.com', status: 'Approved', created_at: '2024-12-02' },
  { id: 3, user_name: 'Bob Johnson', contact_info: 'bob.johnson@example.com', status: 'Rejected', created_at: '2024-12-03' },
];

const SubmissionsPage = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/submissions/${id}`);
  };

  return (
    <Card sx={{ maxWidth: '90%', margin: '20px auto', padding: '20px' }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Submissions Dashboard
        </Typography>

        <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Contact Info</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>{submission.id}</TableCell>
                  <TableCell>{submission.user_name}</TableCell>
                  <TableCell>{submission.contact_info}</TableCell>
                  <TableCell>{submission.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleViewDetails(submission.id)}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default SubmissionsPage;
