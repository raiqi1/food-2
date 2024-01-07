// pages/api/menu-items/[id].js

import { MenuItem } from "@/models/MenuItem";
import mongoose from "mongoose";

export async function GET(req) {
  mongoose.connect(process.env.MONGO_URL);

  try {
    const url = new URL(req.url);
    const _id = url.searchParams.get("_id");

    let filterMenu = {};
    if (_id) {
      filterMenu = { _id };
    } else {
      return Response.json({});
    }

    const menu = await MenuItem.findOne(filterMenu);

    if (menu) {
      // Jika menu ditemukan, kembalikan sebagai respons JSON
      return Response.json(menu);
    } else {
      // Jika menu tidak ditemukan, kembalikan respons 404 Not Found
      return Response.json({ error: "Menu tidak ditemukan." });
    }
  } catch (error) {
    // Tangani potensi kesalahan, misalnya masalah koneksi database
    console.error(error);
    return Response.json({ error: "Terjadi kesalahan." });
  }
}
