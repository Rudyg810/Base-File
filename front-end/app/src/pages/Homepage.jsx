import React from "react";
import styled from "styled-components";
import MyComponent from "../components/Homesection";

const Homepage = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0; 
    
    `
    

  return (
    <Wrapper>

      <div className="container">
        <MyComponent/>
      </div>
    </Wrapper>
  );
};


export default Homepage;
