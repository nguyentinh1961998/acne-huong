import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { Card } from 'components/Card'
import { Heading } from 'components/Heading'
import { spaReviewConfig } from 'config/spa-review'

export default function OurSpaPage() {
  return (
    <Box className="max-w-7xl mx-auto space-y-40 flex flex-col items-center">
      <Box className="grid grid-cols-3 gap-14">
        {spaReviewConfig.reviews.map((review, index) => (
          <Card
            key={index}
            className="gap-y-6 flex flex-col items-center py-10"
          >
            <Heading>{review.username}</Heading>
            <Text className="text-center">"{review.review}"</Text>
            <Text>{review.createdAt}</Text>
          </Card>
        ))}
      </Box>

      <Box className="w-4/5 text-center py-10">
        <Text as="p" className="text-5xl">
          "Great service and they had everything I needed. What a greate family
          owned business! I will be coming here for all my pool needs"
        </Text>

        <Text as="p" className="text-xl mt-6 mb-1">
          Chuck Lorry
        </Text>

        <Text as="p">IT Manager, WhatsApp</Text>
      </Box>
    </Box>
  )
}
