import { Button, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../State/Auth/Action';

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(register(userData));
    navigate("/login");
    console.log("userData", userData);
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First & Last Name side by side */}
        <div className="flex flex-col sm:flex-row gap-4">
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            autoComplete="given-name"
          />
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            autoComplete="family-name"
          />
        </div>

        {/* Email */}
        <div>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            type="email"
          />
        </div>

        {/* Password */}
        <div>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            type="password"
            autoComplete="new-password"
          />
        </div>

        {/* Register Button */}
        <div>
          <Button
            type="submit"
            variant="contained"
            size="large"
            className="bg-[#9155fd] w-full"
            sx={{ padding: ".8rem 0" }}
          >
            Register
          </Button>
        </div>
      </form>

      {/* Already have account */}
      <div className="flex justify-center flex-col items-center mt-6">
        <div className="py-3 flex items-center">
          <p>If you already have an account?</p>
          <Button
            onClick={() => navigate("/login")}
            className="ml-2"
            size="small"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
