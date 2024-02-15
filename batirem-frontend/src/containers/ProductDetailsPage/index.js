import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetailsById } from '../../actions';
import Layout from '../../components/Layout';
import { 
  IoIosArrowForward, 
  IoIosStar, 
  IoMdCart 
} from 'react-icons/io';
import { AiFillThunderbolt } from 'react-icons/ai';
import { MaterialButton } from '../../components/MaterialUI';
import './style.css';
import { generatePublicUrl } from '../../urlConfig';


/**
* @author
* @function ProductDetailsPage
**/

const ProductDetailsPage = (props) => {

  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  useEffect(() => {
    const { productId } = props.match.params;
    console.log(props);
    const payload = {
      params: {
        productId
      }
    }
    dispatch(getProductDetailsById(payload));
  }, []);

  if(Object.keys(product.productDetails).length === 0){
    return null;
  }

  return (
    <Layout>
      {/* <div>{product.productDetails.name}</div> */}
      <div className="productDescriptionContainer">
        <div className="flexRow">
          <div className="verticalImageStack">
            {
              product.productDetails.productPictures.map((thumb, index) => 
              <div className="thumbnail">
                <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />
              </div>
              )
            }
            {/* <div className="thumbnail active">
              {
                product.productDetails.productPictures.map((thumb, index) => 
                <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />)
              }
            </div> */}
          </div>
          <div className="productDescContainer">
            <div className="productDescImgContainer">
              <img src={generatePublicUrl(product.productDetails.productPictures[0].img)} alt={`${product.productDetails.productPictures[0].img}`} />
            </div>

            {/* action buttons */}
            <div className="flexRow">
              <MaterialButton
                title="AJOUTER AU PANIER"
                bgColor="#ff9f00"
                textColor="#ffffff"
                style={{
                  marginRight: '5px'
                }}
                icon={<IoMdCart />}
              />
              <MaterialButton
                title="ACHETER MAINTENANT"
                bgColor="#fb641b"
                textColor="#ffffff"
                style={{
                  marginLeft: '5px'
                }}
                icon={<AiFillThunderbolt />}
              />
            </div>
          </div>
        </div>
        <div>

          {/* home > category > subCategory > productName */}
          <div className="breed">
            <ul>
              <li><a href="#">Accueil</a><IoIosArrowForward /></li>
              <li><a href="#">Mobiles</a><IoIosArrowForward /></li>
              <li><a href="#">{product.productDetails.category}</a><IoIosArrowForward /></li>
              <li><a href="#">{product.productDetails.name}</a></li>
            </ul>
          </div>
          {/* product description */}
          <div className="productDetails">
              <p className="productTitle">{product.productDetails.name}</p>
            <div>
              <span className="ratingCount">4.3 <IoIosStar /></span>
              <span className="ratingNumbersReviews">72,234 Notes & 8,140 Avis</span>
            </div>
            <div className="extraOffer">Extra reduction de 4500 FCFA</div>
            <div className="flexRow priceContainer">
              <span className="price">{product.productDetails.price} FCFA </span>
              <span className="discount" style={{ margin: '0 10px' }}>reduction de 22%</span>
              {/* <span>i</span> */}
              </div>
            <div>
              <p style={{ 
                color: '#212121', 
                fontSize: '14px',
                fontWeight: '600' 
                }}>Offres Disponibles</p>
              <p style={{ display: 'flex' }}>
                <span style={{
                  width: '100px',
                  fontSize: '12px',
                  color: '#878787',
                  fontWeight: '600',
                  marginRight: '20px'
              }}>Description</span>
              <span style={{
                fontSize: '12px',
                color: '#212121',
              }}>{product.productDetails.description}</span>
              </p>
            </div>
          </div>
          

        </div>
      </div>
    </Layout>
  )

}

export default ProductDetailsPage