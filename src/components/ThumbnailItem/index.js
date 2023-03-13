// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImage, onChangeState, isActive} = props
  const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = eachImage

  const onChangeImage = () => {
    onChangeState(id)
  }

  const activeId = isActive ? '' : 'blur'
  console.log(activeId)

  return (
    <li className="list">
      <button type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeId}
          onClick={onChangeImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
