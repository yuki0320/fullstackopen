import Part from "./Part"

/*
 * @since: 2022-11-10 20:30:15
 * @lastTime: 2022-11-10 20:51:52
 * @文件相对于项目的路径: \fullstackopen\part_2\courseinfo\src\components\Content.js
 * @message: 
 */
const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => 
        <Part part={part} key={part.id}></Part>
      )}
    </div>
  )
}

export default Content
