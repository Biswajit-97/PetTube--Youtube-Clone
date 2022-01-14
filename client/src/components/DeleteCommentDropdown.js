import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import React from "react";
import { useAuth } from "../context/auth-context";
import { deleteComment } from "../utils/api-client";
import { DeleteIcon, SettingsIcon } from "./Icons";

function DeleteCommentDropdown({ comment }) {
  const user = useAuth();
  const isCommentAuthor = comment.userId === user?.id;

  function handleDeleteComment() {
    deleteComment(comment);
  }

  if (isCommentAuthor) {
    return (
      <div>
        <Menu>
          <MenuButton>
            <SettingsIcon />
          </MenuButton>
          <MenuList>
            <MenuItem onSelect={handleDeleteComment}>
              <DeleteIcon />
              <span>Delete Comment</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    );
  }

  return null;
}

export default DeleteCommentDropdown;
