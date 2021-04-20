import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { useAnalyticsContext } from "v2/Artsy"
import { WorksByArtistsYouFollowRail_viewer } from "v2/__generated__/WorksByArtistsYouFollowRail_viewer.graphql"
import { SwiperWithProgress } from "v2/Components/Carousel"
import { useTracking } from "react-tracking"
import { AuthContextModule, clickedArtworkGroup } from "@artsy/cohesion"
// import { auctionHeights } from "../../Utils/auctionsHelpers"
import { tabTypeToContextModuleMap } from "../../Utils/tabTypeToContextModuleMap"
import { Box, Spacer, Text } from "@artsy/palette"
import { CarouselArtworkFragmentContainer } from "v2/Components/Artwork/CarouselArtwork"

export interface WorksByArtistsYouFollowRailProps {
  viewer: WorksByArtistsYouFollowRail_viewer
}

const WorksByArtistsYouFollowRail: React.FC<WorksByArtistsYouFollowRailProps> = ({
  viewer,
}) => {
  const { trackEvent } = useTracking()
  const { contextPageOwnerType } = useAnalyticsContext()
  const contextModule = tabTypeToContextModuleMap.worksByArtistsYouFollow as AuthContextModule

  if (viewer.saleArtworksConnection.edges.length === 0) {
    return null
  }

  return (
    <>
      <Box>
        <Text as="h3" variant="lg" color="black100">
          Works for you{" "}
          <sup>
            <Text as="span" variant="xs" color="brand">
              {viewer.saleArtworksConnection.edges.length}
            </Text>
          </sup>
        </Text>

        <Text as="h3" variant="lg" color="black60" mb={2}>
          Works at auction by artists you follow
        </Text>
      </Box>

      <Spacer mb={4} />

      <SwiperWithProgress>
        {viewer.saleArtworksConnection.edges.map(({ node }, index) => {
          return (
            <CarouselArtworkFragmentContainer
              artwork={node}
              key={node.slug}
              contextModule={contextModule}
              hidePartnerName
              onClick={() => {
                trackEvent(
                  clickedArtworkGroup({
                    contextModule,
                    contextPageOwnerType,
                    artworkID: node.internalID,
                    artworkSlug: node.slug,
                    horizontalSlidePosition: index,
                  })
                )
              }}
            />
          )
        })}
      </SwiperWithProgress>
    </>
  )
}

export const WorksByArtistsYouFollowRailFragmentContainer = createFragmentContainer(
  WorksByArtistsYouFollowRail,
  {
    viewer: graphql`
      fragment WorksByArtistsYouFollowRail_viewer on Viewer {
        saleArtworksConnection(
          includeArtworksByFollowedArtists: true
          isAuction: true
          liveSale: true
          first: 50
        ) {
          edges {
            node {
              internalID
              slug
              ...CarouselArtwork_artwork @arguments(width: 325)
            }
          }
        }
      }
    `,
  }
)
