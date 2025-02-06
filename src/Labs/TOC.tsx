import Nav from "react-bootstrap/Nav";

export default function TOC() {
    return (
      // <ul>
      //   <li><a href="#/Labs">Labs</a></li>
      //   <li><a href="#/Labs/Lab1">Lab 1</a></li>
      //   <li><a href="#/Labs/Lab2">Lab 2</a></li>
      //   <li><a href="#/Labs/Lab3">Lab 3</a></li>
      //   <li><a href="#/Kambaz">Kambaz</a></li>
      // </ul>

      // 2.3.17
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link href="#/Labs">Labs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/Labs/Lab1">Lab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/Labs/Lab2">Lab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/Labs/Lab3">Lab 3</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/Kambaz">Kambaz</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://github.com/krishna-aditi/kambaz-react-web-app">Aditi's GitHub</Nav.Link>
        </Nav.Item>
      </Nav>
  )
};
  
  