import { Publish } from "@mui/icons-material"
import { Link } from "react-router-dom"
import Chart from "../../chart/Chart"
import "./product.css"
import { ProductData } from "./ProductData"



function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/Admin/Newproduct">
                <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={ProductData} title="User Analytics" datakey="Sales"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img className="productInfoImg" src="https://www.amd.com/system/files/2022-04/1268900-ryzen-5800x-pib-3d-vcache-1260x709.png" alt="productInfo"/>
                    <span className="productName">AMD Ryzen™ 7000 Series Desktop Processors</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">ID:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">1556</span>
                    </div>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label >Product Name</label>
                    <input type="text" placeholder="AMD Ryzen™ 7000 Series Desktop Processors" />
                    <label >In Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">no</option>
                    </select>
                    <label >Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img className="productUploadImg" src="https://www.amd.com/system/files/2022-04/1268900-ryzen-5800x-pib-3d-vcache-1260x709.png" alt="productform" />
                        <label for="file">
                            <Publish style={{cursor:"pointer"}} />
                        </label>
                        <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Product