import React from 'react'

import { Button } from '@nextui-org/react'
import confetti from 'canvas-confetti'

const CustomButton = () => {
  const handleConfetti = () => {
    confetti()
  }

  return (
    <Button
      auto
      rounded
      ripple={false}
      size='xl'
      onClick={handleConfetti}
      css={{
        background: '$white',
        fontWeight: '$semibold',
        boxShadow: '$md',
        position: 'relative',
        color: '#0F9549',
        px: '$18',
      }}
    >
      Finish 🎉
    </Button>
  )
}

export default CustomButton
