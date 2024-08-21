'use client'
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from "../Componenets/NavBar";
import LandingPage2 from "../Componenets/LandingPage";
import { useConvexAuth } from "convex/react";

export function LandingPage() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <NavBar />
      <LandingPage2 />
    </>
  );
}
