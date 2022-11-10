/*
 * @since: 2022-11-10 20:30:22
 * @lastTime: 2022-11-10 20:51:48
 * @文件相对于项目的路径: \fullstackopen\part_2\courseinfo\src\components\Part.js
 * @message: 
 */
const Part = ({part}) => {
  return (
    <div>{part.name} : {part.exercises}</div>
  )
}

export default Part
