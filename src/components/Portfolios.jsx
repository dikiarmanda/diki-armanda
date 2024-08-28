import Portfolio from "./Portfolio"
import PORTFOLIOS from "../assets/data/portfolios"

const Portfolios = ({ compact = false }) => {
  let newPortfolios = PORTFOLIOS.slice(0, 3)

  newPortfolios = compact ? newPortfolios : PORTFOLIOS

  return (
    <div className="bg-base-100 text-center px-10 py-20 md:max-w-7xl mx-auto" id="portfolios">
      <h2 className="font-bold text-3xl">Portfolios</h2>
      <div className="flex flex-wrap justify-center">
        {newPortfolios.map((portfolio, index) => (
          <div key={index} className="mx-24 flex-1 lg:w-1/4 lg:mx-10">
            <Portfolio portfolio={portfolio} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolios