'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from "../Componenets/NavBar";
import LandingPage2 from "../Componenets/LandingPage";
import { useConvexAuth } from "convex/react";

export function LandingPage() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/home');
    }
  }, [isAuthenticated, router]);

  return (
    <>
      <NavBar />
      <LandingPage2 />
    </>
  );
}