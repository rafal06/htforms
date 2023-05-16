<script lang="ts">
    import { NavbarToggler, Collapse, Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'sveltestrap';
    let isOpen = false;
  </script>
  
  <Navbar color="light" light expand="md" class="mb-4">
    <NavbarBrand>HTForms</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md">
      <Nav navbar class="ms-auto">
        <NavItem>
          <NavLink href="https://github.com/rafal06/htforms">Source Code</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
