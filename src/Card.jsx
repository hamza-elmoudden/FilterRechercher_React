import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {urlFor} from './Sanity/Client'
import { Link } from 'react-router-dom';


export const Card = (props) => {

  const {prod} = props
  
  return (
    <>
                <div className="relative  overflow-hidden ">
                    <div className="py-4 px-8 md:py-1 md:px-4 bg-green-700 w-fit absolute top-0 right-0 text-white">
                       -70%
                    </div>
                    <div  className="py-4 px-8 md:py-1 md:px-4 bg-black w-fit absolute top-0 left-0 text-white">
                        New
                    </div>
                    <img className=""    src={urlFor(prod.image_one.asset._ref)} alt="Producte Not Found" />
                </div>
                <div className=''>      
                <div className="px-2 py-6 space-y-10">
                   <div className="flex justify-between flex-wrap">
                    <h1 className="text-xl md:text-2xl  capitalize line-clamp-2 w-1/2">{prod ? prod.title : "Prodcate Title"}</h1>
                        <div className="py-2 flex justify-center items-center gap-1">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                   </div>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <h1 className="text-xl">{prod ? prod.price : "100"} $</h1>
                        <Link to={`/product/${prod ? prod._id : ""}`} className="text-xl capitalize hover:border border-white hover:border-black border-b-2 hover:border-t-0 hover:border-x-0 cursor-pointer">
                           + Order Producte
                        </Link>
                    </div>
                </div>
                </div>
    </>
  )
}
