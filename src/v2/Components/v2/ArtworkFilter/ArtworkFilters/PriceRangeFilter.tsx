import React, { useState } from "react"
import {
  Button,
  Clickable,
  Flex,
  LabeledInput,
  Message,
  Radio,
  RadioGroup,
  Spacer,
  Text,
  Toggle,
} from "@artsy/palette"
import { useArtworkFilterContext } from "../ArtworkFilterContext"
import { OptionText } from "./OptionText"
import styled from "styled-components"
import { Media } from "v2/Utils/Responsive"

// Disables arrows in numeric inputs
export const NumericInput = styled(LabeledInput).attrs({ type: "number" })`
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`

const PRICE_RANGES = [
  { name: "$50K+", value: "50000-*" },
  { name: "$25K – $50K", value: "25000-50000" },
  { name: "$10K – $25K", value: "10000-25000" },
  { name: "$5K – $10K", value: "5000-10000" },
  { name: "$1K – $5K", value: "1000-5000" },
  { name: "$0 – $1,000", value: "0-1000" },
]

type CustomRange = (number | "*")[]

const DEFAULT_CUSTOM_RANGE: CustomRange = ["*", "*"]

const parseRange = (range?: string) => {
  return range?.split("-").map(s => {
    if (s === "*") return s
    return parseInt(s, 10)
  })
}

export const PriceRangeFilter: React.FC = () => {
  const [mode, setMode] = useState<"resting" | "done">("resting")

  const { currentlySelectedFilters, setFilter } = useArtworkFilterContext()
  const { priceRange: initialRange, atAuction } = currentlySelectedFilters()

  const numericInitialRange = parseRange(initialRange)

  const isCustomRange =
    // Has some kind of price range set (isn't blank)
    !!initialRange &&
    // And isn't a pre-defined price range option
    PRICE_RANGES.find(range => range.value === initialRange) === undefined

  const [showCustom, setShowCustom] = useState(isCustomRange)
  const [customRange, setCustomRange] = useState<CustomRange>(
    numericInitialRange ?? DEFAULT_CUSTOM_RANGE
  )

  const handleClick = () => {
    setFilter("priceRange", customRange.join("-"))
    setMode("done")
  }

  const handleChange = (index: number) => ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>) => {
    const isOpenEnded = value === "" || value === "0"
    setCustomRange(prevCustomRange => {
      const nextCustomRange = [...prevCustomRange]

      if (isOpenEnded) {
        nextCustomRange[index] = "*"
      } else {
        nextCustomRange[index] = parseInt(value, 10)
      }

      return nextCustomRange
    })
  }

  const handleSelect = (selectedOption: string) => {
    if (selectedOption === "custom") {
      setShowCustom(true)
      return
    }

    if (selectedOption !== null) {
      setCustomRange(parseRange(selectedOption))
    }

    setShowCustom(false)
    setFilter("priceRange", selectedOption)
  }

  return (
    <>
      <Toggle label="Price" expanded>
        {mode === "done" && (
          <Media lessThan="sm">
            <Message variant="info" my={2}>
              Price set; select apply to see full results
            </Message>
          </Media>
        )}

        <Flex flexDirection="column" alignItems="left">
          <RadioGroup
            deselectable
            defaultValue={isCustomRange ? "custom" : initialRange}
            onSelect={handleSelect}
            disabled={atAuction}
            disabledText="Disabled for biddable works"
          >
            {[
              ...PRICE_RANGES.map((range, index) => (
                <Radio
                  key={`${index}`}
                  my={0.3}
                  label={<OptionText>{range.name}</OptionText>}
                  value={range.value}
                />
              )),

              <Radio
                key="custom"
                my={0.3}
                label={<OptionText>Custom price</OptionText>}
                value="custom"
              />,
            ]}
          </RadioGroup>
        </Flex>

        {showCustom && (
          <>
            <Flex mt={1} alignItems="flex-end">
              <NumericInput
                label="$USD"
                placeholder="Min"
                min="0"
                step="1"
                value={customRange[0]}
                onChange={handleChange(0)}
              />

              <Spacer mx={0.5} />

              <NumericInput
                label="$USD"
                placeholder="Max"
                min="0"
                step="1"
                value={customRange[1]}
                onChange={handleChange(1)}
              />
            </Flex>

            <Media lessThan="sm">
              <Clickable
                mt={2}
                textDecoration="underline"
                onClick={handleClick}
              >
                <Text>Set price</Text>
              </Clickable>
            </Media>

            <Media greaterThanOrEqual="sm">
              <Button
                mt={1}
                variant="secondaryGray"
                onClick={handleClick}
                width="100%"
              >
                Set price
              </Button>
            </Media>
          </>
        )}
      </Toggle>
    </>
  )
}
