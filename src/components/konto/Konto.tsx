import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useNavigate } from "react-router-dom";

export default function Konto() {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const isAuthenitacted = useIsAuthenticated();

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };
  if (isAuthenitacted) {
    return (
      <>
        <div className="p-3 w-1/2 mx-auto flex flex-col items-center">
          <button className="text-white" onClick={handleSignOut}>
            Wyloguj się
          </button>
        </div>
      </>
    );
  } else if (!isAuthenitacted) {
    return (
      <>
        <div className="p-5 absolute top-[170px] right-5 bg-darkBlue w-1/5 mx-auto z-10 h-48 rounded-lg">
          <button className="text-white " onClick={() => navigate("/login")}>
            Zaloguj się
          </button>
        </div>
      </>
    );
  }
}
