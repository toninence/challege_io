import { useParams } from 'react-router-dom'

export const CharacterData = () => {
    let {id} = useParams();
  return (
    <div>CharacterData {id} </div>
  )
}
