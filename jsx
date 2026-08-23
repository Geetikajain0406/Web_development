function App(){
  return(
    <div>
      <h1>Hello buddy!</h1>
      <p>This Side Geetika Jain </p>
      <p>ROLL No:12345</p>
      <p> Course Name: BCA</p>
    </div>
  );
}
export default App;


import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

function App(){
  return(
    <div>
      <Header />
      <About />
      <Footer />
    </div>
  );
}
export default App;

function Header(){
    return(
    <header>
    <h1>JIIT </h1>
    <p>Welcome to the college </p>
    </header>
    );

}
export default Header;

function About(){
    return(
        <section>
            <h1> About My Course </h1>
            <p> just dont do this course </p>
             <p>
        Students learn programming languages, databases and web development.
      </p>

      <p>
        The course also develops problem-solving and logical thinking skills.
      </p>
        </section>
    );
}
export default About;

function Footer(){
    return(
        <footer>
                  <p>Name: Geetika Jain</p>
      <p>Roll Number: 123456</p>
        </footer>
    );
}
export default Footer;



import StudentCard from "./components/StudentCard";

function App(){
  return(
    <div>
    <h1>Students</h1>
    <StudentCard
    name="Geetika jain"
    rollnum="101"
    course="BCA"/>
    <StudentCard
    name="Geet jain"
    rollnum="102"
    course="bca"/>
    <StudentCard
    name="Gun jain"
    rollnum="103"
    course="btech"/>
    </div>
  );
}
export default App;

function StudentCard(props){
    return(
        <div>
        <p> Name of student is:{props.name}</p>
        <p> Roll num of student is:{props.rollnum}</p>
        <p> Course of student is:{props.course}</p>
        </div>
    );
}
export default StudentCard;

function Book(){
    return(
        <div>
        <h1>Booksss</h1> 
            <ol>
            <li>the day we met</li>
            <li>the </li>
            <li> met</li>
            <li>the day</li>
            </ol>
        </div>
    );
}
export default Book;

function Websites(){
    return(
        <div>
            <ul>
                <li>geeksforgeek</li>
                 <li>w3school</li>
                  <li>brainly</li>
            </ul>
        </div>
    );
}
export default Websites;

import Book from "./components/Book";
import Websites from "./components/Websites";

function App(){
  return(
    <div>
    <Book/>
    <Websites/>
    </div>
  );
}
export default App;

import Products from "./components/Products";

function App(props){
  return(
    <div>
      <Products
        name="Laptop"
        category="Electronics"
        price={55000}
        inStock={true}
      />

      <Products
        name="Headphones"
        category="Electronics"
        price={2500}
        inStock={true}
      />
      <Products
        name="Keyboard"
        category="Accessories"
        price={1200}
        inStock={false}
      />


    </div>
  );
}
export default App;

function Products(){
    return(
        <div>
            <h2>{props.name}</h2>

      <p>Category: {props.category}</p>

      <p>Price: ₹{props.price}</p>
      {props.inStock ?(
        <p>In Stock </p>
      ): (
        <p>Out of Stock</p>
      )
      }
        </div>
    );
}
export default Products;



