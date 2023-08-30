import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { Heading } from 'components/Heading'
import { Card } from 'components/Card'
import { skincareConfig } from 'config/skin-care'

export default function Page() {
  return (
    <Card className="max-w-7xl mx-auto -mt-[14%] space-y-10 py-10">
      <Box className="space-y-4">
        <Heading as="h3" className="font-semibold">
          Basics of Skincare:
        </Heading>
        {skincareConfig.skincare.map((item, index) => (
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

      <Box className="space-y-4">
        <Heading as="h3" className="font-semibold">
          Skincare Routine Steps:
        </Heading>
        {skincareConfig.routineSteps.map((item, index) => (
          <Box key={index} className="space-y-2">
            <Heading as="h4" className="font-semibold">
              {index + 1}. {item.title}
            </Heading>

            {item.list.map((listItem) => (
              <Text className="text-lg" as="p">
                &#9679; {listItem}
              </Text>
            ))}
          </Box>
        ))}
      </Box>
    </Card>
  )
}
