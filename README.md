# 🛍️ EnergizeX Ecommerce Landing Page

A sleek, responsive ecommerce landing page built with **React + TypeScript** to showcase and promote **Nutrabey Gold 100% Whey Protein Concentrate**. This project focuses on performance, minimalism, and clean UI for an optimal product browsing experience.


## ✨ Features

- 📦 **Dynamic Product Listings**  
  Pulls product and supplement data from a centralized file with consistent formatting.

- 💸 **Highlight Promotions**  
  All items display a `50% OFF` tag and `BESTSELLER` badge to increase conversions.

- 🌟 **User Trust Elements**  
  Each product includes a 4.8-star rating for credibility and engagement.

- 🖼️ **High-Quality Visuals**  
  Images are hosted on Cloudinary for fast loading and crisp rendering.

- 📱 **Fully Responsive**  
  Designed to look and function great across all devices.


## 🧑‍💻 Tech Stack

- ⚛️ **React** – Frontend UI framework  
- 🟦 **TypeScript** – Static type-checking for scalable code  
- 🎨 **TailwindCSS** – Utility-first styling  
- ☁️ **Cloudinary** – Optimized image hosting


## 📁 Data Structure

All product information is maintained in `productData.js`:

- `products[]`: Main ecommerce items with tags and discounts  
- `supplements[]`: Additional listings with the same schema

Each item includes:

```ts
{
  id: number;
  tag?: string;
  discount: string;
  name: string;
  currentPrice: number;
  originalPrice: number;
  image: string;
  rating: number;
}
