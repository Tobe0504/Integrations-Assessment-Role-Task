import axios from "axios";
import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  // State
  const [accountNumber, setAccountNumber] = useState("");
  const [availablebanks, setAvailableBanks] = useState([]);
  const [isFetchingAvailableBanks, setIsFetchingAvailableBanks] =
    useState(false);
  const [fetchBanksError, setFetchBankError] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [description, setDescription] = useState("");

  //   Fetch available banks with paystacks bank get API
  const fetchBanks = () => {
    setIsFetchingAvailableBanks(true);
    setFetchBankError("");
    axios
      .get("https://api.paystack.co/bank?currency=NGN", {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_TEST_SECRET_KEY}`,
        },
      })
      .then((res) => {
        console.log(res, "Banks");
        setAvailableBanks(res.data.data);
        setIsFetchingAvailableBanks(false);
      })
      .catch((err) => {
        console.log(err);
        setFetchBankError(err.message);
        setIsFetchingAvailableBanks(false);
      });
  };

  return (
    <AppContext.Provider
      value={{
        accountNumber,
        setAccountNumber,
        availablebanks,
        setAvailableBanks,
        fetchBanks,
        isFetchingAvailableBanks,
        fetchBanksError,
        selectedBank,
        setSelectedBank,
        description,
        setDescription,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
