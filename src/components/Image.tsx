export default function Image({src,className}:{
    src:string
    className?:string}) {
  return (
    <img src={src} className={className}/>
  )
}
