import { Button, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, fetchUserProfile } from '../../../State/Auth/Action';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  // 🔁 If JWT exists in Redux, fetch user profile
  useEffect(() => {
    if (auth.jwt && !auth.user) {
      dispatch(fetchUserProfile(auth.jwt));
    }
  }, [auth.jwt]);

  // ✅ Redirect to home after login
  useEffect(() => {
    if (auth.user) {
      navigate("/");
    }
  }, [auth.user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(login(userData));
  };

  return (
    <div className="max-w-xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <TextField
            required
            id="email"
            name="email"
            type="email"
            label="Email"
            fullWidth
            autoComplete="email"
            autoFocus
          />
        </div>

        {/* Password */}
        <div>
          <TextField
            required
            id="password"
            name="password"
            type="password"
            label="Password"
            fullWidth
            autoComplete="current-password"
          />
        </div>

        {/* Login Button */}
        <div>
          <Button
            className="bg-[#9155fd] w-full"
            type="submit"
            variant="contained"
            size="large"
            sx={{ padding: ".8rem 0" }}
          >
            Login
          </Button>
        </div>
      </form>

      {/* Register redirect */}
      <div className="flex justify-center flex-col items-center mt-6">
        <div className="py-3 flex items-center">
          <p>If you don't have an account?</p>
          <Button onClick={() => navigate("/register")} className="ml-2" size="small">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
