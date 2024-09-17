import { Card, CardBody, SkeletonText } from "@chakra-ui/react"

type Props = {}

const SkeletonCard = ({}: Props) => {
  return (
    <Card boxShadow="lg">
      <CardBody >
        {/* noOfLines (number lines to show ) */}
        <SkeletonText mt="1" noOfLines={1} spacing="4" skeletonHeight="240" />
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="10" />
      </CardBody>
    </Card>
  )
}

export default SkeletonCard