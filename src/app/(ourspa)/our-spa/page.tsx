import { Box } from 'components/Box'
import { Card } from 'components/Card'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { cardItemConfig } from 'config/our-spa'
import { reviewConfig } from 'config/reviews'

import Image from 'next/image'

export default function OurSpaPage() {
  return (
    <Box className="flex flex-col items-center justify-center">
      <Box className="grid max-w-xs w-full">
        {cardItemConfig.listCard.map((card) => (
          <Card shadow className="space-y-2 text-center" spacing={false}>
            <Box className="h-72 relative w-full">
              <Image
                fill
                className="object-cover"
                src={card.image}
                alt="avatar"
              />
            </Box>

            <Box className="p-3">
              <Heading as="h3">{card.title}</Heading>
              <Text>{card.description}</Text>
            </Box>
          </Card>
        ))}
      </Box>

      <Heading as="h2" className="mt-16 mb-8">
        Customers' Testimonials and Feedback
      </Heading>

      <Box className="w-full flex flex-col items-center gap-y-4 my-10">
        {reviewConfig.reviews.map((review, index) => (
          <Card
            key={index}
            className="flex items-center justify-center w-4/5 gap-x-10"
            shadow={false}
          >
            <Box className="h-32 relative w-32 rounded-full overflow-hidden">
              <Image fill src={review.avatar || ''} alt={review.avatar || ''} />
            </Box>

            <Box className="w-3/4">
              <Heading as="h4" className="text-left">
                {`"${review.description}"`}
              </Heading>
              <Text className="text-end text-dark/60">- {review.name}</Text>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
