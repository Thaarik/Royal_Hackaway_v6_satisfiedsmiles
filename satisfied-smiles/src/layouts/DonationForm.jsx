import { useState } from "react";
import FormInput from "././Form/FormInput.jsx";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Delivery from "./../assets/images/form/5912.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-evenly;
`;
const FormC = styled.div`
  width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Success = styled.div`
  display: flex;
  color: red;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.img`
  width: 30%;
`;
// name, address, post code, food items, quantity, prepared date, expiry date, allergens, food type, contact details
const DonationForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    contactNo: "",
    address: "",
    postCode: "",
    food: "",
    foodType: "",
    quantity: "",
    allergens: "",
    preparedDate: "",
    expiryDate: "",
    pickUpDate: "",
    pickUpTime: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      errorMessage: "Please fill in.",
      label: "Full Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "contactNo",
      type: "tel",
      errorMessage: "It should be a valid email number!",
      label: "Contact Number",
      required: true,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      errorMessage: "Please fill in.",
      label: "Address",
      required: true,
    },
    {
      id: 6,
      name: "postCode",
      type: "text",
      errorMessage: "Please fill in a valid post code.",
      label: "Post Code",
      required: true,
    },
    {
      id: 7,
      name: "food",
      type: "text",
      errorMessage: "Please fill in.",
      label: "Food you are giving away",
      required: true,
    },
    {
      id: 8,
      name: "foodType",
      type: "text",
      errorMessage: "Please fill in.",
      label: "Food Type (i.e. packed food, cooked in restaurant)",
      required: true,
    },
    {
      id: 9,
      name: "quantity",
      type: "number",
      errorMessage: "Please fill in the quantity.",
      label: "Food Quantity (kilograms)",
      required: true,
    },
    {
      id: 10,
      name: "allergens",
      type: "text",
      errorMessage: "Please fill in.",
      label: "Allergens",
      required: true,
    },
    {
      id: 11,
      name: "preparedDate",
      type: "date",
      label: "Prepared/ Manufactured Date",
      errorMessage: "Please fill in.",
      required: true,
    },
    {
      id: 12,
      name: "expiryDate",
      type: "date",
      label: "Expiry Date",
      errorMessage: "Please fill in.",
      required: true,
    },
    {
      id: 13,
      name: "pickUpDate",
      type: "date",
      label: "Pickup Date",
      errorMessage: "Please fill in.",
      required: true,
    },
    {
      id: 14,
      name: "pickUpTime",
      type: "time",
      label: "Pickup Time",
      errorMessage: "Please fill in.",
      required: true,
    },
  ];

  const [showMsg, setShowMsg] = useState(false);
  const successMsg = () => {
    values.contactNo === "" ? setShowMsg(false) : setShowMsg(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <ImgBox src={Delivery} />
      <h2>Fill in the details of the food you'd like to give away.</h2>
      <FormC>
        <Form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </Form>
        <Button onClick={successMsg}>Submit</Button>

        {showMsg ? (
          <Success>
            Request successfully submitted, our team will shortly contact you.
          </Success>
        ) : (
          <Success>Please enter all the fields</Success>
        )}
      </FormC>
    </Container>
  );
};

export default DonationForm;
