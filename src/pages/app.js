import React, { useContext, useEffect, useMemo, useState } from "react";
import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { styled } from "@linaria/react";
//
import { Bottom as BottomNav } from "@comps/bottom";
import { Header as TopHeader } from "@comps/header";
import { PrivateRoute, PublicRoute } from "../comps/routes";
//
import Login from "./login";
//
import { AuthContext } from "@contexts";
import { standard } from "@styles/clazz";
import { Vars } from "@styles/variables";
import { logout } from "../contexts/auth";

const SApp = styled.div`
  width: 100%;
  z-index: 0;
  pointer-events: auto;
`;

const SMain = styled.main`
  backface-visibility: hidden;
`;

const SDisplay = styled.div`
  -webkit-box-align: stretch;
  align-items: stretch;

  background-color: rgba(0, 0, 0, 0);

  margin-left: auto;
  margin-right: auto;

  min-height: 100%;

  width: 100%;
`;

const SBackgroundColor = styled.div`
  z-index: 1;
  border-right-width: 1px;
  border-left-width: 1px;
  width: 100%;
  ${Vars((env) => ({
    "background-color": env.darkColor,
  }))};
  margin-left: auto;
  margin-right: auto;
  border-color: rgba(0, 0, 0, 0);
  border-style: solid;
`;
/* padding-bottom: ${(props) => (props.$auth ? `calc(104px)` : `auto`)}; */
/* padding-bottom: calc(104px); */
const SPadding = styled.div`
  width: 100%;
  padding-bottom: calc(99px);
  margin-left: auto;
  margin-right: auto;
`;

const SSection = styled.section`
  position: relative;
  flex-direction: row;
  flex: 1;
  /* min-height: 100%; */
`;

const App = () => {
  const [auth, setAuth] = useState(null);
  const value = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  return (
    <SApp aria-hidden="false" className="css-div-common r-flex-1">
      <AuthContext.Provider value={value}>
        <TopHeader />
        <SMain role="main" className="css-div-common r-f-g-1 r-f-s-1 r-flex-1">
          <RoutesConfig />
        </SMain>
        <BottomNav />
      </AuthContext.Provider>
    </SApp>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    logout(navigate);
  };
  return (
    <>
      <div>
        <button onClick={handleOnClick}>Logout</button>
      </div>
    </>
  );
};

const RoutesConfig = () => {
  return (
    <>
      <Routes>
        <PublicRoute path="/login" restricted={true} element={<Login />} />
      </Routes>
      <SDisplay
        style={{ display: "contents" }}
        className="css-div-common r-f-d-row r-f-g-1"
      >
        <SBackgroundColor className="css-div-common">
          <SPadding className="css-div-common">
            <SSection
              className="css-div-common"
              aria-labelledby="accessible-list-1"
              role="region"
            >
              <Routes>
                <PrivateRoute path="/" element={<Navigate to="/home" />} />
                <PrivateRoute path="/home" element={<Home />} />
                <PrivateRoute path="/search" element={<p>search</p>} />
                <PrivateRoute path="/bookmarks" element={<p>bookmarks</p>} />
                <PrivateRoute
                  path="/notifications"
                  element={<p>notifications</p>}
                />
                <PrivateRoute
                  path="/compose/log"
                  element={<p>compose/log</p>}
                />
                <PrivateRoute path="/settings" element={<p>settings</p>} />
              </Routes>
            </SSection>
          </SPadding>
        </SBackgroundColor>
      </SDisplay>
    </>
  );
};

export default App;
