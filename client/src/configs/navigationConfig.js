import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "home",
    title: "Home",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/"
  },
  {
    id: "checkoutID",
    title: "Checkout ID",
    type: "item",
    icon: <Icon.CheckSquare size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/id"
  },
  {
    id: "allReceipts",
    title: "All Receipts",
    type: "item",
    icon: <Icon.CheckSquare size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/receipts"
  }
]

export default navigationConfig
