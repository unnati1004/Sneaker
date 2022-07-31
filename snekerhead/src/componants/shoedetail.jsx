import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
export const ShoeDetail = () => {
  const navigate = useNavigate();
  const [size, setsize] = useState("");
  const [product, setProduct] = useState({});
  let { _id } = useParams();
  console.log("id", _id);
  const handlesize = (event) => {
    setsize(event.target.value);
  };
  useEffect(() => {
    axios
      .get(`https://sneaker-1.herokuapp.com/sneaker/${_id}`)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlepost = () => {
    let payload = {
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
    };

    axios
      .post("https://sneaker-1.herokuapp.com/cart", payload)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/cart");
  };

  return (
    <>
      {product && (
        <div className="maindiv">
          <div>
            <img src={product.image} style={{ width: "100%" }}></img>
          </div>
          <div>
            <h3>{product.brand}</h3>
            <h1>{product.name}</h1>
            <h2>{product.category}</h2>
            <h2>₹{product.price}/-</h2>
            <p>{product.description}</p>
            <p>{product.type}</p>
            <div className="sizeselect">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Size
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="Age"
                    onChange={handlesize}
                  >
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <button
              disabled={size == ""}
              onClick={() => handlepost()}
              className="addcart"
            >
              ADD CART
            </button>
          </div>
        </div>
      )}
    </>
  );
};
