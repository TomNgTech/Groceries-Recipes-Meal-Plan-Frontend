import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Button, Modal } from '@mui/material'
import EditMonthRecipes from './editMonthRecipes/EditMonthRecipes'
function MealPlan () {
  const [openModal, setOpenModal] = useState(false)

  const handleClose = () => {
    setOpenModal(false)
  }

  return (
    <>
      <Typography variant="h3"> My Meal Plan</Typography>
      <Button variant="outlined"
        size="large"
        onClick={e => setOpenModal(true) }>
        Edit
      </Button>

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EditMonthRecipes
          handleClose={handleClose}
        />
      </Modal>
    </>
  )
}

export default MealPlan
