import React, { useContext, useEffect } from "react";
import Card from "../../Components/Card/Card";
import Layout from "../../Components/Layout/Layout";
import classes from "./InitiateTransfer.module.css";
import Input from "../../Components/Input/Input";
import { AppContext } from "../../Context/AppContext";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { CircularProgress } from "@mui/material";

const InitiateTransfer = () => {
  // Context
  const {
    accountNumber,
    setAccountNumber,
    availablebanks,
    fetchBanks,
    isFetchingAvailableBanks,
    fetchBanksError,
    selectedBank,
    setSelectedBank,
    description,
    setDescription,
  } = useContext(AppContext);

  //   Utilitues
  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
    console.log(accountNumber);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  //   Effects
  useEffect(() => {
    // Fetch all banks once this page mounts
    fetchBanks();
    console.log(availablebanks);
  }, []);
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.innerContainer}>
          <Card>
            <h3>Make a transfer</h3>
            <div className={classes.transferForm}>
              {/* Account number input */}
              <Input
                id="accountNumber"
                value={accountNumber}
                onChange={(e) => {
                  handleAccountNumberChange(e);
                }}
                placeholder=" "
              >
                <label htmlFor="accountNumber" style={{ cursor: "text" }}>
                  Bank Account Number
                </label>
              </Input>

              {/* Banks List Dropdown */}
              <div className={classes.dropdownSection}>
                <Dropdown
                  title={
                    isFetchingAvailableBanks ? "Loading banks" : "Select a bank"
                  }
                  options={availablebanks?.map((bank) => bank?.name)}
                  selected={selectedBank}
                  setSelected={setSelectedBank}
                />
                {isFetchingAvailableBanks && (
                  <CircularProgress
                    color="inherit"
                    size="1rem"
                    style={{ color: "#10a56c" }}
                  />
                )}
              </div>
              {fetchBanksError && (
                <span className={classes.warning}>{fetchBanksError}</span>
              )}
            </div>

            {/* Description Section */}
            <div>
              <Input
                id="description"
                value={description}
                onChange={(e) => {
                  handleDescriptionChange(e);
                }}
                placeholder=" "
              >
                <label htmlFor="description" style={{ cursor: "text" }}>
                  Description
                </label>
              </Input>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default InitiateTransfer;
