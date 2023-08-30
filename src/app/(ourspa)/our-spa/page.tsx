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

      <Box className="w-full flex flex-col items-center gap-y-4 my-10 max-w-7xl">
        {reviewConfig.reviews.map((review, index) => (
          <Card
            key={index}
            className="flex items-center justify-center gap-x-10 bg-transparent border"
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

      <Box className="bg-dark w-full py-20 space-y-10">
        <Heading as="h1" className="text-white text-center">
          About us
        </Heading>

        <Box className="max-w-7xl mx-auto flex items-center justify-start gap-x-10">
          <Image
            width={520}
            height={300}
            src="https://pbs.twimg.com/media/E-AppHvVgAUKNOM?format=jpg&name=4096x4096"
            alt="Workplace"
          />

          <Box className="space-y-6">
            <Heading as="h2" className="text-white">
              <strong>Acnehuong - Da Nang City</strong>
            </Heading>
            <Text as="p" className="max-w-3xl text-lg text-white">
              The spa center Acnehuong is where tradition meets modern health
              and beauty. It's located in the center of our lovely Da Nang city.
              The Spa at Acnehuong combines all aspects of spa, beauty and
              wellness to create a full service menu with both classic and
              trending services.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
