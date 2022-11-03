import React from 'react'

import confetti from 'canvas-confetti'

const CustomButton = () => {
  const handleConfetti = () => {
    confetti()
  }

  return (
    <button
      onClick={handleConfetti}
      className='px-28 py-2 mx-auto text-lg font-bold text-gray-900 bg-gray-100 rounded-md dark:text-gray-100 dark:bg-gray-800'
    >
      FINISH 🎉
    </button>
  )
}

export default CustomButton
