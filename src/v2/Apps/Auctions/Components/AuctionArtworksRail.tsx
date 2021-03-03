import React, { useRef } from "react"
import { Box, BoxProps, Text } from "@artsy/palette"
import { createFragmentContainer, graphql } from "react-relay"
import { AuctionArtworksRail_auction } from "v2/__generated__/AuctionArtworksRail_auction.graphql"
import { RouterLink } from "v2/Artsy/Router/RouterLink"
import { Carousel } from "v2/Components/Carousel"
import FillwidthItem from "v2/Components/Artwork/FillwidthItem"

interface AuctionArtworksRailProps extends BoxProps {
  auction: AuctionArtworksRail_auction
}

/**
 * Though it is likely to exist, the sale message line may be missing.
 * In order to avoid the page shifting between the loading state and the ready state,
 * we need to hardcode the height.
 */
export const AUCTION_ARTWORKS_RAIL_HEIGHT = 233
export const AUCTION_ARTWORKS_IMAGE_HEIGHT = 160

export const AuctionArtworksRail: React.FC<AuctionArtworksRailProps> = ({
  auction,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <Box ref={ref as any} {...rest}>
        <Box display="flex" mb={1}>
          <Box flex="1">
            <Text as="h3" variant="subtitle" fontWeight="bold">
              <RouterLink to={auction.href} noUnderline>
                {auction.name}
              </RouterLink>
            </Text>
            <Text mb={1}>{auction.formattedStartDateTime}</Text>
          </Box>

          {auction.href && (
            <Text variant="subtitle" color="black60">
              <RouterLink to={auction.href} noUnderline>
                View
              </RouterLink>
            </Text>
          )}
        </Box>

        <Box height={AUCTION_ARTWORKS_RAIL_HEIGHT}>
          <Carousel arrowHeight={AUCTION_ARTWORKS_IMAGE_HEIGHT}>
            {auction.artworksConnection.edges.map(({ node }, index) => {
              console.log(node)
              return (
                <FillwidthItem
                  contextModule={null as any}
                  artwork={node}
                  imageHeight={AUCTION_ARTWORKS_IMAGE_HEIGHT}
                  hidePartnerName
                  lazyLoad
                />
              )
            })}
          </Carousel>
          {/* <AuctionArtworksRailArtworks id={auction.internalID} /> */}
          {/* {isEnteredView ? (
          //   <AuctionArtworksRailArtworks id={auction.internalID} />
          // ) : (
          //   <AuctionArtworksRailPlaceholder />
          )} */}
        </Box>
      </Box>
    </>
  )
}

export const AuctionArtworksRailFragmentContainer = createFragmentContainer(
  AuctionArtworksRail,
  {
    auction: graphql`
      fragment AuctionArtworksRail_auction on Sale {
        internalID
        slug
        href
        name
        formattedStartDateTime
        artworksConnection(first: 20) {
          edges {
            node {
              internalID
              slug
              ...FillwidthItem_artwork
            }
          }
        }
      }
    `,
  }
)
