import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponsivePagination from "react-responsive-pagination";
import { AppLayout } from "../../../layout/AppLayout";
import {
  CardTitle,
  DashboardCardGrid,
  DashboardCardWrapper,
  DashboardListGrid,
  DashboardPageWrapper,
  EmptyCardWrapper,
  SeeMoreButton,
} from "./styles";
import { feedData, identitiesData, newFeedData, predictionData } from "./data";
import { Button, FeedItem, PredictionCard } from "../../../components";

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(8);
  const [currentUser, setCurrentUser] = useState<string | null>("");
  const totalPages = 20;

  useEffect(() => {
    setCurrentUser(localStorage.getItem("auth"));
  }, []);

  return (
    <AppLayout>
      <DashboardPageWrapper>
        <DashboardCardWrapper>
          <CardTitle>My Identities</CardTitle>
          {identitiesData.length > 0 && currentUser ? (
            <React.Fragment>
              <DashboardCardGrid>
                {identitiesData.map((item, key) => (
                  <PredictionCard {...item} key={key} />
                ))}
              </DashboardCardGrid>
              <SeeMoreButton>See More</SeeMoreButton>
            </React.Fragment>
          ) : (
            <EmptyCardWrapper>
              <p>
                Combine a Year card, a Day & Month, and a Category card to craft
                an Identity.
              </p>
              <img src="/assets/identities-empty.png" alt="" />
              {currentUser && (
                <Button className="dashboard-card-button">
                  Craft an Identity Now
                </Button>
              )}
            </EmptyCardWrapper>
          )}
        </DashboardCardWrapper>
        <DashboardCardWrapper>
          <CardTitle>My Predictions</CardTitle>
          {predictionData.length > 0 && currentUser ? (
            <React.Fragment>
              <DashboardCardGrid>
                {predictionData.map((item, key) => (
                  <PredictionCard {...item} key={key} />
                ))}
              </DashboardCardGrid>
              <SeeMoreButton>See More</SeeMoreButton>
            </React.Fragment>
          ) : (
            <EmptyCardWrapper>
              <p>
                Add one or more Triggers to an Identity to craft a Prediction
              </p>
              <img src="/assets/prediction-empty.png" alt="" />
              {currentUser && (
                <Button className="dashboard-card-button">
                  Craft an Identity Now
                </Button>
              )}
            </EmptyCardWrapper>
          )}
        </DashboardCardWrapper>
        {currentUser && feedData.length > 0 && (
          <DashboardCardWrapper>
            <CardTitle>My Feed</CardTitle>
            <DashboardListGrid>
              {feedData.map((item, key) => (
                <FeedItem {...item} key={key} />
              ))}
            </DashboardListGrid>
            <ResponsivePagination
              maxWidth={272}
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
          </DashboardCardWrapper>
        )}
        {currentUser && newFeedData.length > 0 && (
          <DashboardCardWrapper>
            <CardTitle>TwoTwentyK News Feed</CardTitle>
            <DashboardListGrid>
              {newFeedData.map((item, key) => (
                <FeedItem {...item} key={key} />
              ))}
            </DashboardListGrid>
            <ResponsivePagination
              maxWidth={272}
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
          </DashboardCardWrapper>
        )}
        {!currentUser && (
          <Button className="login-button" onClick={() => navigate("/signin")}>
            Login Now
          </Button>
        )}
      </DashboardPageWrapper>
    </AppLayout>
  );
};
