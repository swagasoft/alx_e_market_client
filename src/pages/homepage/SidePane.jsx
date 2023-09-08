import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const SidePane = () => {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemText primary={`Supermarket`} />
        </ListItem>

        <ListItem>
          <ListItemText primary={`Health and Beauty`} />
        </ListItem>

        <ListItem>
          <ListItemText primary={`Appliances`} />
        </ListItem>

        <ListItem>
          <ListItemText primary={`Phones and Tablets`} />
        </ListItem>

        <ListItem>
          <ListItemText primary={`Computing`} />
        </ListItem>

        <ListItem>
          <ListItemText primary={`Electronics`} />
        </ListItem>

        <ListItem>
          <ListItemText primary={`Fashion`} />
        </ListItem>

        <ListItem>
          <ListItemText primary={`Baby Product`} />
        </ListItem>
      </List>
    </>
  );
};

export default SidePane;
