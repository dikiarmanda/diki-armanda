import Portfolio from "./Portfolio"
import PORTFOLIOS from "../assets/data/portfolios"

const Portfolios = ({ compact = false }) => {
  let newPortfolios = PORTFOLIOS.slice(0, 3)

  newPortfolios = compact ? newPortfolios : PORTFOLIOS

  return (
    <div className="bg-base-100 text-center lg:px-10 py-20 md:max-w-7xl mx-auto" id="portfolios">
      <h2 className="font-bold text-3xl">Portfolios</h2>
      <div className="flex flex-wrap justify-center">
        {newPortfolios.map((portfolio, index) => (
          <div key={index} className="flex-1 w-full md:w-1/2 lg:w-1/4 mx-5 lg:mx-10">
            <Portfolio portfolio={portfolio} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolios