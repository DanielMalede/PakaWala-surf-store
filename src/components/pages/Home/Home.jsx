import "./Home.css";
import React from "react";
import {CarouselBootStrap,
} from "../../../components/pages/index";
import { useUserAuth } from "../../../context/UserAuthContext";

function Home() {

  return (
    <div className="home">
      <CarouselBootStrap />
    </div>
  );
}

export default Home;
