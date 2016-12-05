import React, { Component, PropTypes } from 'react';
import Header from '../Header';
import ContactList from '../contacts/ContactList';
import Timer from '../timer/Timer';
import NotesApp from '../notes/Notes';
import Grid  from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import { Link } from 'react-router';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

// import './bootstrap.css';

// const propTypes = {
//   userSignedIn: PropTypes.bool.isRequired,
//   children: PropTypes.node
// };

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Менеджер Контактов</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav navbar>
              <LinkContainer to='/'>
                <NavItem>Добавить</NavItem>
              </LinkContainer>
              <LinkContainer to='/'>
                <NavItem>Редактировать</NavItem>
              </LinkContainer>
              <LinkContainer to='/'>
                <NavItem>Удалить</NavItem>
              </LinkContainer>
              <LinkContainer to='/'>
                <NavItem>Сохранить</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <Timer/>
        </Grid>
        <Grid>
          <NotesApp/>
        </Grid>
        <Grid>
          <ContactList/>
        </Grid>
      </div>
    );
  }
}

// export default class Layout extends React.Component {
//   render() {
//     return(
//       <div>
//          <Header/>
//          <ContactList/>
//       </div>
//     )
//   }
// }
