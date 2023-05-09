import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { StudentList } from "../../components/StudentsList";

/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  return (
    <div>
      <Header />
      <div class="container">
        <StudentList />
      </div>

      <Footer />
    </div>
  );
};
