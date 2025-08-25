 import React from 'react';

export default function PageContainer({ children }: { children?: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto">{children}</div>
  )
}
