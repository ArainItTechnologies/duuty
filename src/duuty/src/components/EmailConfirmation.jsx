import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { confirmEmail } from "../services/auth";
import Loading from "./custom/Loading";
import Toast from "./custom/Toast";

const EmailConfirmation = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const userId = searchParams.get("userId");
  const token = searchParams.get("token");

  useEffect(() => {
    if (userId && token) {
      setIsLoading(true);
      confirmEmail(userId, token)
        .then(() => {
          setIsLoading(false);
          setConfirmed(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, [userId, token]);

  return (
    <div className="p-4">
      {isLoading && <Loading />}
      {!isLoading && (
        <p className="text-center text-xl font-medium text-green-700">
          {confirmed ? (
            <Toast
              message="Email confirmed successfully!"
              success={confirmed}
            />
          ) : (
            <Toast message="Invalid confirmation link." success={confirmed} />
          )}
        </p>
      )}
    </div>
  );
};

export default EmailConfirmation;
