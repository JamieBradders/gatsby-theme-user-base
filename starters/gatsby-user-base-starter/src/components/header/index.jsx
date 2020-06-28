import React from "react";
import { useUserbase, signOut } from "gatsby-theme-user-base";
import { navigate, Link } from "gatsby";

const Header = () => {
  const [state, dispatch] = useUserbase();

  const logout = async () => {
    await signOut();
    dispatch({ type: "clearUser" });
    navigate("/");
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 0",
      }}
    >
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {!state.loading && state.user?.userId && (
          <ul style={{ display: "flex", listStyle: "none", margin: 0 }}>
            <li style={{ marginRight: 16 }}>
              <Link to="/account">My Account</Link>
            </li>
            <li style={{ cursor: "pointer", textDecoration: "underline" }}>
              <span
                onClick={logout}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.keyCode === 13 && logout()}
              >
                Logout
              </span>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
