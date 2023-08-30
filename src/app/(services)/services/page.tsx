import { Box } from 'components/Box'
import Services from 'components/Dashboard/Services'
import { ServiceConfig } from 'config/service'

export default function ServicePage() {
  return (
    <Box className="flex justify-center items-center w-full z-50">
      <Services items={ServiceConfig} />
    </Box>
  )
}
