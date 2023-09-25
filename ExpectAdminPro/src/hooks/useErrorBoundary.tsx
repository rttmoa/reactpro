import React, { useState, useEffect } from "react";

function ErrorBoundary(props: { children: any }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleErrors = (err: any) => {
      // console.log("object", err.error);
      setError(err.error.message);
    };
    window.addEventListener("error", handleErrors);
    return () => {
      window.addEventListener("error", handleErrors);
    };
  }, []);
  // console.log(error);
  if (error) {
    return (
      <h2>
        SomeThing went wrong:
        <br />
        <h5>{error}</h5>
      </h2>
    );
  }
  return props.children;
}
export default ErrorBoundary;
