import { Flex } from "@artsy/palette/dist/elements/Flex"
import { Box } from "@artsy/palette/dist/elements/Box"
import { AnalyticsSchema } from "v2/Artsy"
import React from "react"
import { FeaturedContentLink, FeaturedLinkType } from "./Feature"

interface FeaturedArtistsProps {
  artists: [FeaturedLinkType]
}

export const FeaturedArtists: React.FC<FeaturedArtistsProps> = props => {
  return (
    <Flex
      flexDirection="row"
      justifyContent={["center", "space-between"]}
      flexWrap="wrap"
      maxWidth="720px"
      m="0 auto"
    >
      {props.artists.map((artist, index) => {
        return (
          <Box
            maxWidth="350px"
            mb={3}
            mx={[1, 0]}
            key={`featured-artist-${index}`}
          >
            <FeaturedContentLink
              size="medium"
              contextModule={AnalyticsSchema.ContextModule.FeaturedArtists}
              {...artist}
            />
          </Box>
        )
      })}
    </Flex>
  )
}
