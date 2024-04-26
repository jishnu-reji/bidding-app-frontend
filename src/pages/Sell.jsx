import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Add from "../components/Add";
import SoldProducts from "../components/SoldProducts";
import { addToSoldAPI, getUserProductAPI } from "../services/allAPI";
import { SERVER_URL } from "../services/serverURL";
import { addResponseContext } from "../contexts/ContextAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Sell() {
  const { addResponse, setAddResponse } = useContext(addResponseContext);
  const [userProducts, setUserProducts] = useState([]);
  const [reload, setReaload] = useState();
  const user = JSON.parse(sessionStorage.getItem("existingUser"));
  const getUserProducts = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const result = await getUserProductAPI(reqHeader);
      console.log(result);
      if (result.status == 200) {
        setUserProducts(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addToSold = async (product) => {
    if (product.highBid > product.stPrice) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      const reqBody = {
        pdName: product.productName,
        price: product.highBid,
        pid: product._id,
      };
      try {
        const result = await addToSoldAPI(reqBody, reqHeader);
        console.log(result);
        if (result.status == 200) {
          console.log(result.data);
          setReaload(result);
          toast.success("Product Sold")
        }
      } catch (err) {
        console.log(err);
      }
    }
    else{
      toast.warning("No bids Placed Yet")
    }
  };

  useEffect(() => {
    getUserProducts();
  }, [addResponse, reload]);

  console.log(userProducts);

  return (
    <div>
      <Header showSearch />
      <div style={{ minHeight: "100vh" }} className="dash container">
        <div className="py-3 d-flex justify-content-center">
          <h3>Hey {user?.username} Sell your Products through BidHub</h3>
          <Add />
        </div>

        <div className="r4 mb-5 container">
          <h3 className="mb-3 cc">Your Products</h3>
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                {userProducts?.length > 0 ?
                  userProducts.map((product) => (
                    <div className="col-lg-4">
                      <div>
                        <div className="card d-flex p-3 flex-column align-items-center">
                          <h4 className="fw-bolder">{product.productName}</h4>
                          <p className="mb-2">MRP : {product.mrp}</p>
                          <img
                            style={{ height: "270px", maxWidth: "100%" }}
                            className="img-fluid"
                            src={`${SERVER_URL}/uploads/${product.productImage}`}
                            alt=""
                          />
                          <p className="mb-0 mt-2">
                            Starting Price : {product.stPrice}
                          </p>
                          <h5 className="mb-1">
                            Highest Bid :{" "}
                            <span className="text-danger fw-bolder">
                              {product.highBid}
                            </span>
                          </h5>
                          <p className="mb-1">
                            Bidding ends on :{" "}
                            <span className="fw-bolder">{product.endDate}</span>
                          </p>
                          <h6 className="mb-0"></h6>
                          <button
                            onClick={() => addToSold(product)}
                            className="btn btn-warning w-100 fw-bolder"
                          >
                            Sell Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <div className="mt-4 text-danger fw-bolder">No product to sell!!</div>
                }
              </div>
            </div>
            <div className="col-lg-3">
              <div style={{ minHeight: "100vh" }} className="border">
                <SoldProducts reload={reload}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </div>
  );
}

export default Sell;
