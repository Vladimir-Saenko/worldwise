import { useNavigate } from "react-router-dom";
import { useAuthorization } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthentificated } = useAuthorization();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthentificated) navigate("/");
    },
    [isAuthentificated, navigate]
  );

  return children;
}

export default ProtectedRoute;
