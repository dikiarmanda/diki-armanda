import { useRef } from "react"

const Portfolio = ({ portfolio }) => {
  const portfolioDetailRef = useRef(null)
  const openModal = () => {
    if (portfolioDetailRef.current) {
      portfolioDetailRef.current.showModal()
    }
  }

  return (
    <div className="card max-w-96 h-96 text-start shadow-xl my-10 mx-auto">
      <figure>
        <img src={portfolio.img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{portfolio.title}</h2>
        <p>{portfolio.desc.length > 100 ? portfolio.desc.slice(0, 100) + '...' : portfolio.desc}</p>
        <div className="card-actions align-bottom justify-end">
          <button className="btn btn-sm btn-secondary" onClick={openModal}>
            Detail
          </button>
          <button className="btn btn-sm btn-primary">Visit</button>
        </div>
      </div>

      {/* Portfolio Detail Modal */}
      <dialog className="modal" ref={portfolioDetailRef}>
        <div className="modal-box">
          <img className="rounded-md" src={portfolio.img} alt={portfolio.title} />
          <h3 className="font-bold text-lg mt-5">{portfolio.title}</h3>
          <p className="py-4">{portfolio.desc}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default Portfolio