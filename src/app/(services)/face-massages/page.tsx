import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { Heading } from 'components/Heading'
import { Card } from 'components/Card'
import { faceMassageConfig } from 'config/face-massages'

export default function Page() {
  return (
    <Card className="max-w-7xl mx-auto -mt-[14%] space-y-10 py-10">
      <Box className="space-y-4">
        <Heading as="h3" className="font-semibold">
          Preparation
        </Heading>
        {faceMassageConfig.preparation.map((item, index) => (
          <Box key={index} className="space-y-2">
            <Heading as="h4" className="font-semibold">
              {index + 1}. {item.title}
            </Heading>

            <Text className="text-lg" as="p">
              &#9679; {item.description}
            </Text>
          </Box>
        ))}
      </Box>

      <Box className="space-y-5">
        <Heading as="h3" className="font-semibold">
          Techniques
        </Heading>
        {faceMassageConfig.techniques.map((item, index) => (
          <Box key={index}>
            <Heading as="h4" className="font-semibold">
              {index + 1}. {item.title}
            </Heading>
            {item.list.map((listItem) => (
              <Text className="text-lg pt-2" as="p">
                &#9679; {listItem.listContent}
              </Text>
            ))}
          </Box>
        ))}
      </Box>

      <Box className="space-y-2">
        <Heading as="h3" className="font-semibold">
          Tips
        </Heading>

        {faceMassageConfig.tips.map((item, index) => (
          <Box key={index}>
            <Text className="text-lg pt-2" as="p">
              &#9679; {item}
            </Text>
          </Box>
        ))}
      </Box>
    </Card>
  )
}
