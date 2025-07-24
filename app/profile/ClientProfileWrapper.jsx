'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const CompanyProfile = dynamic(() => import('../../components/CompanyProfile'), { ssr: false });

export default function ClientProfileWrapper() {
  return <CompanyProfile />;
} 