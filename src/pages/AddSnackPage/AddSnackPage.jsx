import { useNavigate } from "react-router-dom"
import SnackForm from "../../components/SnackForm/SnackForm"
import { createSnack } from "../../services/snack"

const AddSnackPage = () => {

  const navigate=useNavigate()

  const handleAddSnack = (snack) => {
    createSnack(snack).then((id) => {
      navigate(`/Snacks/${id}`)
    }).catch(e => {
      throw e.message
    })
  }
  return (
    <>
      <h1>
        Add a Snack
      </h1>
      
      <SnackForm handleAddSnack={handleAddSnack}  formType='add'/>
    </>
  )
}

export default AddSnackPage