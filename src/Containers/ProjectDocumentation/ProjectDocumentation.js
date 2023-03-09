import React from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./ProjectDocumentation.module.css";

const ProjectDocumentation = () => {
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.header}>Project Documentation</div>
        <div className={classes.paragraph}>
          <div className={classes.subHeading}>Project Summary</div>
          <div className={classes.content}>
            <p>
              This is Ezimorah Tobenna's project solution for a role in the
              Alvative Talent Application. This as was said in the role
              assessment mail makes use of Paystack's API to run a seamless
              transfer to a dummy account.
            </p>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>
            Project Build and Initialization
          </div>
          <div className={classes.content}>
            <p>
              This solution is created with the build of ReactJs and was
              initialized with create-react-app. The project makes use of
              components completely built from scratch by me.
            </p>
            <p>
              These components are small units of the application which later
              sum up the entirety of the application, that is components as
              litle as text inputs to components as large as the transfer form
              which is made up of smaller blocks of components.
            </p>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>
            Project Folder Structure and Heirachy
          </div>
          <div className={classes.content}>
            <p>
              The focal points of the implementation of this project can be seen
              in the "src" folder which houses the "Components", "Containers",
              "Context", "App.js" and so on.
            </p>
            <p>
              The Components folder houses components that are re-usable all
              through the application like buttons, cards, the custom dropdown,
              input, and layout components.
            </p>
            <p>
              The Containers folder as its name implies houses the containers
              for different pages in the web application and their necessary
              frontend implementation.
            </p>
            <p>
              The Context folder houses React Context API which helps in
              facilitating the communication of the frontend to an API and
              backend, also global state management all through the application
              and http fetch requests.
            </p>

            <p>
              App.js is the entry point of the React application and is where
              the routinhg of the app to different pages exists since React is a
              Single Page Application (SPA) Javascript Library
            </p>
            <p>
              Other files like index.js, index.css are very key in the app's
              functionality but not necessary incase access to code is needed.
            </p>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>
            Paystacks API Endpoints Integration
          </div>
          <div className={classes.content}>
            <p>
              The Paystacks API was used to facilitate events like Fetching
              available banks, Confirming user details from their bank after
              they have provided their account details, Creating or generating
              recepients and initiating the transfer.
            </p>
            <p>
              The Fetch available banks API was used to fetch all banks
              available in the users region from Paystack and the function that
              triggers this API call was initialized on load of the application.
            </p>
            <p>
              After user inputs Account number and has chosen a bank, they are
              prompted to resolve the bank details to confirm the owner of the
              account details they have just input. The click event on the
              "Resolve account details" triggers the function that calls the
              Paystack resolve account details API.
            </p>
            <p>
              Upon resolution, the users details are now visible and can be
              confirmed, The user is now permitted to put an amount in Naira and
              a description. It will be beneficial to note that when the user
              has resolved the account details, we are automatically triggering
              the Paystack API that generates a recepient, where by that
              recepient code is what is later used to actualize the transfer
              asides the account holders name and account number.
            </p>
            <p>
              Upon completion of all enteris and given all paramaters are
              present and available, we can now initialize a transfer with the
              credentials available. Please note that this will not complete
              because Paystack made me understand that I have to be a registered
              business to be able to complete a transfer on their platform,
              therefore the error after the "Make Transfer" button is clicked.
              Not withstanding, it is still very easy to integrate when the
              conditions are met.
            </p>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>Paystack API's Used</div>
          <div className={classes.content}>
            <ol>
              <li>List Banks API.</li>
              <li>Verify Account Number API.</li>
              <li>Create Transfer Recepient API (with Bank account).</li>
              <li>Initiate transfer API.</li>
            </ol>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>Project Dependencies</div>
          <div className={classes.content}>
            <ol>
              <li>React router dom (for routing)</li>
              <li>
                Fontawesome icons for an icon like the responsive hamburger menu
              </li>
              <li>Material UI for circular progress for loading states</li>
              <li>
                UUID for genberating a unique ID for each transfer and
                transaction
              </li>
            </ol>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>Styling</div>
          <div className={classes.content}>
            <p>
              Styling was done with raw CSS ans SCSS through the use of React
              module CSS where each component has its own specifyc CSS file.
            </p>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>
            Side Functionalities for great User Experience
          </div>
          <div className={classes.content}>
            <ol>
              <li>Retry button for bank detail verification</li>
              <li> Bank first-letter filter for dropdown</li>
              <li>
                Dissappearing call-to-actions to prevent dfummy or redundant API
                calls.
              </li>
            </ol>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>Conclusion</div>
          <p>
            Better familiarity with the app exposes a user to more features.
          </p>
          <p>
            I hope you had a great time on this demo. I look forward to an
            interview and working with your team!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDocumentation;
