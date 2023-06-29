import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
// import jwt_decode from "jwt-decode";
import {
  getFeed,
  getPersonalizedFeed,
  getMyInfo,
  getMyNFTs,
  getMarketplaceList,
} from "../actions";
import { IArticle, IMarketplaceListing, IUser } from "../types/actions";

const AuthContext = createContext<any>({});
const FeedContext = createContext<any>([]);
const MyFeedContext = createContext<any>([]);
const MyInfoContext = createContext<any>(null);
const MyNFTsContext = createContext<any>(null);
const MarketplaceListContext = createContext<any>([]);

export const AppWrapper: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  // const navigate = useNavigate();
  const location = useLocation();
  const [authContext, setAuthContext] = useState<any>({
    isAuthenticated: false,
    user: "",
  });
  const [feedContext, setFeedContext] = useState<IArticle[]>([]);
  const [myFeedContext, setMyFeedContext] = useState<IArticle[]>([]);
  const [myInfoContext, setMyInfoContext] = useState<IUser>();
  const [myNFTsContext, setMyNFTsContext] = useState<any>();
  const [marketplaceListContext, setMarketplaceListContext] = useState<any>([]);

  const authValue = useMemo(
    () => ({ authContext, setAuthContext }),
    [authContext]
  );

  const feedValue = useMemo(
    () => ({ feedContext, setFeedContext }),
    [feedContext]
  );

  const myFeedValue = useMemo(
    () => ({ myFeedContext, setMyFeedContext }),
    [myFeedContext]
  );

  const myInfoValue = useMemo(
    () => ({ myInfoContext, setMyInfoContext }),
    [myInfoContext]
  );

  const myNFTsValue = useMemo(
    () => ({ myNFTsContext, setMyNFTsContext }),
    [myNFTsContext]
  );

  const marketplaceListValue = useMemo(
    () => ({ marketplaceListContext, setMarketplaceListContext }),
    [marketplaceListContext]
  );

  const setContext = async () => {
    const token = localStorage.auth;
    if (token) {
      // const decoded = jwt_decode(String(token));
      //   if (decoded?.exp < Date.now() / 1000) {
      //     localStorage.removeItem("user");
      //     setAuthContext({
      //       ...authContext,
      //       isAuthenticated: false,
      //       user: "",
      //     });
      //   } else {
      setAuthContext({
        ...authContext,
        isAuthenticated: true,
        user: localStorage.getItem("auth"),
      });
      const myinfo = await getMyInfo(token);
      if (myinfo.data) setMyInfoContext(myinfo.data);
      const allFeedData = await getFeed();
      if (allFeedData.data) setFeedContext(allFeedData.data);
      const myFeedData = await getPersonalizedFeed();
      if (myFeedData.data) setMyFeedContext(myFeedData.data);
      const myNFTsData = await getMyNFTs();
      if (myNFTsData.data) setMyNFTsContext(myNFTsData.data);
      // const marketplaceListingData = await getMarketplaceList();
      // if (marketplaceListingData.data)
      //   setMarketplaceListContext(marketplaceListingData.data);
      // //   }
    } else {
      //   if (!isPrivateUrl(location.pathname, false)) {
      //     navigate("/");
      //   }
    }
  };

  useEffect(() => {
    setContext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const loadFunc = async () => {
      await setContext();
    };
    loadFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <AuthContext.Provider value={authValue}>
      <FeedContext.Provider value={feedValue}>
        <MyFeedContext.Provider value={myFeedValue}>
          <MyInfoContext.Provider value={myInfoValue}>
            <MyNFTsContext.Provider value={myNFTsValue}>
              <MarketplaceListContext.Provider value={marketplaceListValue}>
                {children}
              </MarketplaceListContext.Provider>
            </MyNFTsContext.Provider>
          </MyInfoContext.Provider>
        </MyFeedContext.Provider>
      </FeedContext.Provider>
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const useFeedContext = () => {
  return useContext(FeedContext);
};

export const useMyFeedContext = () => {
  return useContext(MyFeedContext);
};

export const useMyInfoContext = () => {
  return useContext(MyInfoContext);
};

export const useMyNFTsContext = () => {
  return useContext(MyNFTsContext);
};

export const useMarketplaceListContext = () => {
  return useContext(MarketplaceListContext);
};
