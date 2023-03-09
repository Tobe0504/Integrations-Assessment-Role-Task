import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  // State
  const [accountNumber, setAccountNumber] = useState("");
  const [availablebanks, setAvailableBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState("");
  const [description, setDescription] = useState("");
  const [userBankDetails, setUserBankDetails] = useState();
  const [resolvedBankDetails, setREsolvedBankDetails] = useState();
  const [recepient, setRecepient] = useState();
  const [amount, setAmount] = useState("");

  // Loading states
  const [isFetchingAvailableBanks, setIsFetchingAvailableBanks] =
    useState(false);
  const [isResolvingBankDetails, setIsResolvingbankDetails] = useState(false);
  const [isSendingReuest, setIsSendingRequest] = useState(false);

  //   Errors
  const [fetchBanksError, setFetchBankError] = useState("");
  const [verifyAccountDetailsError, setVerifyBsnkDetsilsError] = useState("");

  //   Fetch available banks with paystacks bank get API
  const fetchBanks = () => {
    setIsFetchingAvailableBanks(true);
    setFetchBankError("");
    axios
      .get("https://api.paystack.co/bank?currency=NGN", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PAYSTACK_TEST_SECRET_KEY}`,
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

  // Set user bank
  useEffect(() => {
    if (availablebanks.length > 0 && selectedBank) {
      const selectedbank = availablebanks.find((bank) => {
        return bank.name === selectedBank;
      });
      setUserBankDetails(selectedbank);
    }
  }, [selectedBank]);

  console.log(userBankDetails, "User bank");

  //   Resolve Account Number
  const resolveAccountDetails = () => {
    if (accountNumber && userBankDetails) {
      setIsResolvingbankDetails(true);
      setVerifyBsnkDetsilsError("");
      axios
        .get(
          `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${userBankDetails.code}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_PAYSTACK_TEST_SECRET_KEY}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setIsResolvingbankDetails(false);
          setREsolvedBankDetails(res.data.data.account_name);
          console.log(res, "user details");
        })
        .catch((err) => {
          setIsResolvingbankDetails(false);
          console.log(err);
          setVerifyBsnkDetsilsError(err.response.data.message);
        });
    }
  };

  const generateTransferRecepient = () => {
    if (accountNumber && resolvedBankDetails) {
      setIsSendingRequest(true);
      axios
        .post(
          `https://api.paystack.co/transferrecipient`,
          {
            type: "nuban",
            name: resolvedBankDetails,
            account_number: accountNumber,
            bank_code: userBankDetails.code,
            currency: "NGN",
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_PAYSTACK_TEST_SECRET_KEY}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res, "Recepient");
          setIsSendingRequest(false);
          setRecepient(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          setIsSendingRequest(false);
        });
    }
  };

  const initiateTransfer = () => {
    setIsSendingRequest(true);
    axios
      .post(
        `https://api.paystack.co/transfer`,
        {
          source: "balance",
          amount: Number(amount) * 1000,
          reference: v4(),
          recipient: recepient?.recipient_code,
          reason: description,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_PAYSTACK_TEST_SECRET_KEY}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res, "Initiate");
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSendingRequest(false);
        setVerifyBsnkDetsilsError(err.response.data.message);
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
        resolveAccountDetails,
        userBankDetails,
        isResolvingBankDetails,
        resolvedBankDetails,
        verifyAccountDetailsError,
        generateTransferRecepient,
        isSendingReuest,
        amount,
        setAmount,
        initiateTransfer,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
