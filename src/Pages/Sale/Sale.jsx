import React, { useEffect, useState } from "react";
import "./Sale.css";
import img from "../../Assets/sale (1).png";
import img2 from "../../Assets/sale (2).png";
import img3 from "../../Assets/sale (3).png";
// public qr code img
import PublicKW from "../../Assets/PublicKW.png";
// presale qr code img
import PresaleKW from "../../Assets/PresaleKW.png";
import axios from "axios";

function Sale() {
  // *** API Work ***
  const [quantityState, setQuantityState] = useState();
  const [address, setAddress] = useState(
    "addr1v8pg6x29rsa3pa3nva8qqkg5xl5cl6h3sngxs9p9a6wrc3gmmf5xj"
  );

  useEffect(() => {
    async function callAPI() {
      let page = 1;
      let mintArray = [];

      while (page > 0) {
        try {
          // console.log(page)
          const res = await axios.get(
            "https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/15ad90a97966aff6c76cc40710850b9a797e353af082bbecbaaf0877?page=" +
              page,
            {
              headers: {
                project_id: "mainnetWi02SePo8OGVLHJcYP0cB97rTZ669MFF",
              },
            }
          );

          if (res.data.length === 0) {
            break;
          }
          mintArray.push(...res.data);

          page += 1;
        } catch (err) {
          console.log(err);
        }
      }

      let total = 500;
      mintArray.forEach((el) => {
        // console.log(el.quantity)
        total -= el.quantity;
      });
      // console.log(mintArray);
      setQuantityState(total);
    }

    callAPI();
  }, []);

  return (
    <div className="sale">
      <h1 className="sale-h1">Choose your Destiny</h1>
      <div className="img-div-sale">
        <img src={img2} alt="" className="sale-img" />
        <img src={img} alt="" className="sale-img" />
        <img src={img3} alt="" className="sale-img" />
      </div>
      <div className="bottom-sale">
        <div className="left-sale">
          {/* // PublicSale QR Code Image */}
          <img src={PublicKW} alt="public_qr_code" />

          {/* // PreSale QR Code Image */}
          {/*<img src={PresaleKW} alt="presale_qr_code" /> */}
        </div>
        <div className="right-sale">
          <div className="top-right">
            {/* API work*/}
            {quantityState === undefined ? (
              <h2>Loading...</h2>
            ) : (
              <h2>{quantityState} out of 500 remaining</h2>
            )}
            {/* // PublicSale */}
            <p>send 50 ADA to the address below</p>

            {/* // PreSale */}
            {/*<p>send 40 ADA to the address below</p> */}
          </div>
          {/* // PublicSale wallet Address */}
          <div className="address-div">
            <p className="address">{address}</p>
            <button
              onClick={(e) => {
                navigator.clipboard.writeText(address);
              }}
              className="copy"
            >
              Copy
            </button>
          </div>

          {/* // PreSale wallet Address */}
          {/* <p className="address">
            addr1vxetlz4m0fakazxyv39gaeha6u6dqccr4qfh2gd2axdy0ksyhmy77 
          </p> */}
          {/* // PublicSale */}

          <ol className="list">
            <li className="list-items">1 Keyboard Warrior 50 ADA</li>
            <li className="list-items">2 Keyboard Warriors 100 ADA</li>
            <li className="list-items">3 Keyboard Warriors 150 ADA</li>
            <li className="list-items">4 Keyboard Warriors 200 ADA</li>
            <li className="list-items">5 Keyboard Warriors 250 ADA</li>
            <li className="list-items">
              Policy ID -
              15ad90a97966aff6c76cc40710850b9a797e353af082bbecbaaf0877
            </li>
          </ol>
          {/* // PreSale */}
          {/*<ol className="list">
            <li className="list-items">1 Keyboard Warrior 40 ADA</li>
            <li className="list-items">2 Keyboard Warrior 80 ADA</li>
            <li className="list-items">3 Keyboard Warrior 120 ADA</li>
            <li className="list-items">4 Keyboard Warrior 160 ADA</li>
            <li className="list-items">5 Keyboard Warrior 200 ADA</li>
            <li className="list-items">Policy ID - 15ad90a97966aff6c76cc40710850b9a797e353af082bbecbaaf0877</li>
          </ol> */}
          <div className="warning">
            <p className="red">DO NOT SEND FUNDS FROM AN EXCHANGE!</p>
            <p className="warn-last">
              YOU MUST USE A CARDANO SHELLEY-ERA WALLET SUCH AS CC WALLET, NAMI,
              DAEDALUS, ADALITE,OR YOROI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
