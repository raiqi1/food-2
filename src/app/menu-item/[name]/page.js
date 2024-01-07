// Contoh penggunaan di dalam komponen atau fungsi lain
"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ContohKomponen() {
  const [name, setName] = useState("");
  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    fetch(`/api/menu-items?${name}`).then((res) => {
      res.json().then((menuItem) => setMenuItem(menuItem));
    });
  }, []);
  console.log(menuItem);

  // Render halaman dengan data menu item
  return (
    <div>
      {menuItem?.map((item) => (
        <div key={item._id}>
          <h1>{item.name}</h1>
          <p>{item.basePrice}</p>
        </div>
      ))}
    </div>
  );
}
