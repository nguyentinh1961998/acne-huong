import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { Heading } from 'components/Heading'
import { acneTreatmentConfig } from 'config/acne-treatment'
import { Card } from 'components/Card'

export default function Page() {
  return (
    <Card className="max-w-7xl mx-auto -mt-[14%] space-y-20 py-10">
      <Box className="space-y-8">
        {acneTreatmentConfig.treatments.map((treatment, index) => (
          <Box key={index} className="space-y-2">
            <Heading as="h4" className="font-semibold">
              {treatment.title}
            </Heading>

            <Text className="text-lg" as="p">
              &#9679; {treatment.description}
            </Text>
          </Box>
        ))}
      </Box>

      <Box>
        {acneTreatmentConfig.conclusion.map((item, index) => (
          <Box key={index}>
            <Heading as="h3">Conclusion</Heading>
            <Text className="text-lg pt-2" as="p">
              {item.description}
            </Text>
          </Box>
        ))}
      </Box>
    </Card>
  )
}
