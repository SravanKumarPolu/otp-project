import React, { useState } from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { signInWithPhoneNumber } from "firebase/auth";
import OtpInput from "otp-input-react";
import "./App.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "./firebase.config";
import { RecaptchaVerifier } from "firebase/auth";

function App() {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }
  function onSignup() {
    setLoading(true);
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + ph;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  function onOTPVerify(params) {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        // Use .catch() here, not .className()
        console.log(err);
        setLoading(false);
      });
  }
  return (
    <section className="bg-success d-flex align-items-center justify-content-center text-white vh-100">
      <div>
        <Toaster toastOptions={{ duration: 5000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="font-weight-bold fs-3 text-white text-center">
            👍Login Success
          </h2>
        ) : (
          <div className="w-80 d-flex flex-column gap-4 rounded-lg p-4">
            <h1 className="text-center lead text-white font-weight-medium fs-5">
              Enter Phone Number
            </h1>
            {showOTP ? (
              <>
                <div className="text-white w-auto mx-auto p-4 rounded-circle bg-success">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-weight-bold fs-3 text-white text-center">
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  inputType="number" // Corrected attribute name
                  disabled={false}
                  autoFocus
                  className="form-control" // Apply Bootstrap's form-control class or custom styles here
                />

                <button
                  onClick={onOTPVerify}
                  className="bg-primary border-none 
                      text-white d-flex align-items-center 
                  justify-content-center py-2.5 rounded">
                  {loading && (
                    <div class="mt-1 spinner-border text-white" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  )}
                  <span> Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className="text-white w-auto mx-auto p-4 rounded-circle bg-success">
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor="ph"
                  className="font-weight-bold fs-3 text-white text-center">
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />

                <button
                  onClick={onSignup}
                  className="bg-primary border-none 
                      text-white d-flex align-items-center 
                  justify-content-center py-2.5 rounded">
                  {loading && (
                    <div
                      size={20}
                      class="mt-1 spinner-border text-white"
                      role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
