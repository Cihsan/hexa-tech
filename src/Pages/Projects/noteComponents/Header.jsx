import React from "react";

const Header=()=>{
  const logo = (
    <img
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );
  return (
    <div className="w-[75%] header">
      {logo}
      <h1>Hexa-Tech Note</h1>
    </div>
  );
}

export default Header;
