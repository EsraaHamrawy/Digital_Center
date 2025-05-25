import { Menu } from "@mui/material";

function TableOptionsList({ children, open, anchorEl, setAnchorEl }) {
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      className="table-actions-menu"
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleMenuClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {children}
    </Menu>
  );
}

export default TableOptionsList;
