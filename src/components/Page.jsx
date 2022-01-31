import "../style/Page.scss"

function Page ({title, children}) {
  return (
    <div className="Page">
      <h2>{title}</h2>
      {children}
    </div>
  )
}
export default Page;