import React from "react"
import styled from "styled-components"
import { RouteTab, RouteTabs } from "v2/Components/RouteTabs"
import { Box, Text } from "@artsy/palette"
import { themeGet } from "@styled-system/theme-get"

interface UserSettingsTabsProps {
  route?: string
  username?: string
}

const StyledRouteTab = styled(RouteTab)`
  @media (max-width: ${themeGet("breakpoints.xs")}) {
    padding-right: 10px;
  }
`

const isCurrentTab = (tabUrl, route) => {
  const currentRoute =
    typeof window === "undefined" ? route : window.location.pathname

  return currentRoute === tabUrl ? "active" : undefined
}

export const UserSettingsTabs: React.FC<UserSettingsTabsProps> = ({
  route,
  username,
}) => {
  return (
    <Box pt={1}>
      <Box>
        <Text variant="title" m={2}>
          {username}
        </Text>
      </Box>
      <RouteTabs>
        <RouteTab
          className={isCurrentTab("/user/saves", route)}
          to="/user/saves"
        >
          Saves & Follows
        </RouteTab>
        <RouteTab
          className={isCurrentTab("/profile/edit", route)}
          to="/profile/edit"
        >
          Collector Profile
        </RouteTab>
        <RouteTab
          className={isCurrentTab("/user/purchases", route)}
          to="/user/purchases"
        >
          Order History
        </RouteTab>
        <RouteTab
          className={isCurrentTab("/user/auctions", route)}
          to="/user/auctions"
        >
          Bids
        </RouteTab>
        <RouteTab className={isCurrentTab("/user/edit", route)} to="/user/edit">
          Settings
        </RouteTab>
        <StyledRouteTab
          className={isCurrentTab("/user/payments", route)}
          to="/user/payments"
        >
          Payments
        </StyledRouteTab>
      </RouteTabs>
    </Box>
  )
}