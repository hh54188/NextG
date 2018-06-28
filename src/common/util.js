import React from "react";
import AppLayout from "../components/AppLayout";

export const withAppLayout = title => {
  return Component => {
    return () => (
      <AppLayout title={title}>
        <Component />
      </AppLayout>
    );
  };
};
