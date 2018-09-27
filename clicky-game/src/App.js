import React from "react";
import Wrapper from "./componets/Wrapper";
import Navbar from "./componets/Navbar";
import Header from "./componets/Header";
import Card from "./componets/Card";
import babies from "./babyList.json";

const App =() => (
    <Wrapper>
        <Navbar />
        <Header />
        <Card />
    </Wrapper> 
);

export default App;