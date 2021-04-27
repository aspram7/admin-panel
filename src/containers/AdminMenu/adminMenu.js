import React, { useState } from "react";
import Button from "components/Button";
import classes from "./adminMenu.module.css";

const AdminMenu = () => {
  const [menuItemActive, setMenuItemActive] = useState();
  const [menuItemClose, setMenuItemClose] = useState(true);

  const handleMenuItem = (n) => {
    setMenuItemActive(n);
    setMenuItemClose(!menuItemClose);
  };
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Bigbox Admin</h2>
      <div>
        <Button
          classes={{
            button:
              menuItemActive === 0 && menuItemClose
                ? classes.adminMenuButtonActive
                : classes.adminMenuButton,
          }}
          onClick={() => handleMenuItem(0)}
        >
          Dashboard
        </Button>
        <div className={classes.submenu}>
          <ul>
            <li>Manage Articles</li>
            <li>Manage Articles</li>
            <li>Manage Articles</li>
            <li>Manage Articles</li>
          </ul>
        </div>
      </div>
      <Button classes={{ button: classes.adminMenuButton }}>Dashboard</Button>
      <Button classes={{ button: classes.adminMenuButton }}>Dashboard</Button>
      <Button classes={{ button: classes.adminMenuButton }}>Dashboard</Button>
      <Button classes={{ button: classes.adminMenuButton }}>Dashboard</Button>
      <Button classes={{ button: classes.adminMenuButton }}>Dashboard</Button>
    </div>
  );
};

export default AdminMenu;
