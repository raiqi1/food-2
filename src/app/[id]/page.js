"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Menuu() {
  const [name, setName] = useState("");
  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    const pizza = axios.get(`/api/menu-items/?${name}`).then((res) => {
      res.json().then((menuItem) => setMenuItem(menuItem));
    });
    return 
  }, [pizza]);
  console.log("okok",pizza);

  return <div>hello</div>;
}
