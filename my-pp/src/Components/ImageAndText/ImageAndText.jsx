import Card from 'react-bootstrap/Card';
import "./ImageAndText.css"
import cardImg from "../../Assets/promise.jpg"
import CardLink from 'react-bootstrap/esm/CardLink';
function ImageAndText() {
  return (
    <>
      <Card style={{width: "85%", margin:"auto"
      }}>
        <div className="">
        <Card.Img variant="top" src={cardImg} />
        <div className="promise-label">Promise</div>
        </div>
        <Card.Body>
          <Card.Text>
            <h2 className='text-center textHeading'>Our “Best Coupon Promise”</h2>
          <p className='text-center textPara'>  Our goal is to always provide you with the best coupons. That's why we have launched the "Best Coupon Promise", with which we guarantee that you will not find a better coupon anywhere for offers marked accordingly. If this is not the case, we will donate.</p>
        <div className="textLink">
        <CardLink>View Details</CardLink>
        </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ImageAndText;