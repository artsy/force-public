import React from "react"
import { Box } from "@artsy/palette/dist/elements/Box"
import { Color } from "@artsy/palette/dist/Theme"
import { Flex, FlexProps } from "@artsy/palette/dist/elements/Flex"
import { FontWeights, Sans } from "@artsy/palette/dist/elements/Typography"
import { color } from "@artsy/palette/dist/helpers/color"
import { useIsRouteActive, useRouter } from "v2/Artsy/Router/useRouter"
import { RouterLink } from "v2/Artsy/Router/RouterLink"
import { LinkProps } from "found"
import styled from "styled-components"

const TabLink = styled(RouterLink)`
  display: block;
  text-decoration: none;
`

const Tab: React.FC<LinkProps> = ({ children, to }) => {
  const active = useIsRouteActive(to)

  const borderBottom = active
    ? `2px solid ${color("black100")}`
    : `1px solid ${color("black10")}`

  const textColor: Color = active ? "black100" : "black60"
  const weight: FontWeights = active ? "medium" : "regular"

  return (
    <Box
      width={["100%", "50%"]}
      textAlign="center"
      style={{
        cursor: "pointer",
        borderBottom,
      }}
    >
      <TabLink to={to}>
        <Sans pt={[2, 3]} pb={1} size="3" color={textColor} weight={weight}>
          {children}
        </Sans>
      </TabLink>
    </Box>
  )
}
export const ViewingRoomTabBar: React.FC<FlexProps> = props => {
  const {
    match: {
      params: { slug },
    },
  } = useRouter()

  return (
    <Flex
      width="100%"
      justifyContent="center"
      id="viewingRoomTabBarAnchor"
      {...props}
    >
      <Flex width={["100%", 720]}>
        <Tab to={`/viewing-room/${slug}`}>Statement</Tab>
        <Tab to={`/viewing-room/${slug}/works`}>Works</Tab>
      </Flex>
    </Flex>
  )
}
