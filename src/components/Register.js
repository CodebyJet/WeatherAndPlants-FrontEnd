import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Select, MenuItem } from "@mui/material"; // Added Select and MenuItem
import { API } from "../lib/api";
import { AUTH } from "../lib/auth";

const presetProfileImages = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  // Add more preset image file names as needed
];

export default function Register() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
    location: "",
    imageId: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) =>
    setFormFields({ ...formFields, [e.target.name]: e.target.value });

  const handleProfileImageChange = (e) => {
    const selectedImage = e.target.value;
    setFormFields({ ...formFields, imageId: selectedImage });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const apiReqBody = { ...formFields };

      await API.POST(API.ENDPOINTS.register, apiReqBody);

      const loginData = await API.POST(API.ENDPOINTS.login, {
        email: formFields.email,
        password: formFields.password,
      });

      AUTH.setToken(loginData.data.token);

      navigate("/");
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", justifyContent: "center", pt: "200px" }}
    >
      <form onSubmit={handleCreateUser}>
        <div>
          <TextField
            size="small"
            name="username"
            id="username"
            type="text"
            label="Username"
            required={true}
            value={formFields.username}
            onChange={handleChange}
            error={error}
            sx={{ mb: 2 }}
          />
        </div>
        <div>
          <TextField
            size="small"
            name="email"
            id="email"
            type="email"
            label="Email"
            required={true}
            value={formFields.email}
            onChange={handleChange}
            error={error}
            sx={{ mb: 2 }}
          />
        </div>
        <div>
          <TextField
            size="small"
            name="password"
            id="password"
            type="password"
            label="Password"
            required={true}
            value={formFields.password}
            onChange={handleChange}
            error={error}
            sx={{ mb: 2 }}
          />
        </div>
        <div>
          <TextField
            size="small"
            name="passwordConfirmation"
            id="passwordConfirmation"
            type="password"
            label="Password Confirmation"
            required={true}
            value={formFields.passwordConfirmation}
            onChange={handleChange}
            error={error}
            sx={{ mb: 2 }}
          />
        </div>
        <div>
          <Select //the images selected from preset
            size="small"
            name="imageId"
            id="imageId"
            label="Profile Image"
            required={true}
            value={formFields.imageId}
            onChange={handleProfileImageChange}
            error={error}
            sx={{ mb: 2 }}
          >
            <MenuItem value="">Select an Image</MenuItem>
            {presetProfileImages.map((imageName, index) => (
              <MenuItem key={index} value={imageName}>
                {imageName}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <TextField // though maybe needs to be a selector if they spell it wrong?
            size="small"
            name="location"
            id="location"
            type="location"
            label="location"
            required={true}
            value={formFields.location}
            onChange={handleChange}
            error={error}
            sx={{ mb: 2 }}
          />
        </div>
        <Button type="submit" sx={{ color: "#3B3D40" }}>
          Create Account!
        </Button>
      </form>
    </Container>
  );
}
