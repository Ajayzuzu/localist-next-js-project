// import React, { useEffect } from "react";
// import { ToastContainer } from "react-toastify";

// export default function AppClientWrapper({ children }) {
//   const selectedServiceFormData = {};
//   const registerStep = 0;
//   const userToken = null;
//   const registerToken = null;

//   useEffect(() => {
//     if ([1, 2, 3, 4].includes(registerStep)) {
//       const formData = {
//         ...selectedServiceFormData,
//         auto_bid: selectedServiceFormData?.auto_bid ? 1 : 0,
//         nation_wide: selectedServiceFormData?.nation_wide ? 1 : 0,
//         is_online: selectedServiceFormData?.is_online ? 1 : 0,
//         active_status: 1,
//         user_type: 1,
//         loggedUser: 1,
//         cities: selectedServiceFormData?.city,
//         form_status: 0,
//       };

//       const handleBeforeUnload = (event) => {
//         event.preventDefault();
//         event.returnValue = "";
//         localStorage.setItem("unsavedData", JSON.stringify(formData));
//       };

//       window.addEventListener("beforeunload", handleBeforeUnload);

//       return () => {
//         window.removeEventListener("beforeunload", handleBeforeUnload);
//       };
//     }
//   }, [registerStep, selectedServiceFormData]);

//   useEffect(() => {
//     const unsaved = localStorage.getItem("unsavedData");
//     if (unsaved) {
//       fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/registration`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: unsaved,
//       })
//         .then(() => localStorage.removeItem("unsavedData"))
//         .catch((err) => console.error("Failed to save abandoned data", err));
//     }
//   }, []);

//   useEffect(() => {
//     if (!userToken && !registerToken) {
//       localStorage.setItem("isRegistrationComplete", "false");
//     }
//   }, [userToken, registerToken]);

//   return (
//     <>
//       {children}
//       <ToastContainer />
//     </>
//   );
// }
