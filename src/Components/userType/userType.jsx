import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { LIST_ZELLER_CUSTOMERS } from '../../graphql/queries.ts';

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import './userType.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { lightBlue } from '@mui/material/colors';



function UserType() {
  const { loading, error, data } = useQuery(LIST_ZELLER_CUSTOMERS);

  const [value, setValue] = useState('Admin'); // State variable for 'value'

  const handleChange = (event) => {
    setValue(event.target.value);
    // Additional logic for handling the value change if needed
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const customers = data.listZellerCustomers.items;

  return (
    <section className="section-1">
      <div className="container-1">
        <div className="form">
          <span>
            <h2>User Types</h2>
          </span>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
              className="radio-group"
            >
              <div
                className={`radio-container ${
                  value === "Admin" ? "admin-selected" : ""
                }`}
              >
                <FormControlLabel
                  value="Admin"
                  control={<Radio />}
                  label="Admin"
                />
              </div>
              <div
                className={`radio-container ${
                  value === "Manager" ? "manager-selected" : ""
                }`}
              >
                <FormControlLabel
                  value="Manager"
                  control={<Radio />}
                  label="Manager"
                />
              </div>
            </RadioGroup>
          </FormControl>
          <span className="line"></span>

          <span>
            <h2>Admin Users</h2>
          </span>

          <div className="admin-user">
          <List>
          {customers.map((customer) => (
            <ListItem key={customer.id}>
              <div className="list-container">
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: lightBlue[50] }} variant="square">
                    {customer.name[0]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={customer.name} secondary={customer.role} />
              </div>
              <span className="line"></span>
            </ListItem>
          ))}
        </List>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserType;
