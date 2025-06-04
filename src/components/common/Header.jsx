
import React from "react";
import Container from "./Container";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="header_add bg-[#191C1F]">
      
       <Container>
        <Image src="/images/headerAdd.png" width={160} height={43} alt="offer image"/>
        </Container> 
    
      </div>
    </header>
  );
};

export default Header;
