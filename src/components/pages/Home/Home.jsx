import "./Home.css";
import React from "react";
import {
  Footer,
  Header,
  CarouselBootStrap,
} from "../../../components/pages/index";
import Router from "../../../Router";
import { useUserAuth } from "../../../context/UserAuthContext";
import { Image } from "@mui/icons-material";

function Home() {
  const { user } = useUserAuth();

  return (
    <div className="home">
      <CarouselBootStrap />
    </div>
  );
}

export default Home;
