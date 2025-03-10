"use client";
import styles from "./Services.module.css"
import React, { useState } from "react";
import products from "./Services.json";

interface Product {
  id: number;
  category: string;
  image: string;
  Title: string;
  description: string;
  appStoreUrl?: string;
  googleStoreUrl?: string;
  desktopUrl?: string;
  moreDetailsUrl?: string;
}

const Services = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const filteredProducts = products.filter(
    (product: Product) =>
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      search.trim() === "" 
  );

  const handleMouseEnter = (icon: string) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div>
      <section id="services" className={styles.corporativeBanner}>
        <a href="https://www.linebiz.com/jp-en/">
          <div className={styles.bannerTxt}>Corporative services</div>
          <div className={styles.bannerImageCorp}>aaaa
            <img src="images/services/corporativeServices.png" alt="" />
          </div>
        </a>
      </section>
      <section className={styles.allProduct}>
        <h2 className={styles.servicesTitle}>Services</h2>
        <div className={styles.productsView}>
          <div className={styles.productMenuWrap}>
            <ul className={styles.productMenu}>
              <li>
                <button
                  className={`${styles.productCategory} ${
                    selectedCategory === "all" ? styles.active : ""
                  }`}
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("all");
                  }}
                >
                  All Product
                </button>
              </li>
              <li>
                <button
                  className={`${styles.productCategory} ${
                    selectedCategory === "communication" ? styles.active : ""
                  }`}
                  onClick={() => {
                    setSearch("Communication");
                    setSelectedCategory("communication");
                  }}
                >
                  Communication
                </button>
              </li>
              <li>
                <button
                  className={`${styles.productCategory} ${
                    selectedCategory === "entertainment" ? styles.active : ""
                  }`}
                  onClick={() => {
                    setSearch("Entertainment");
                    setSelectedCategory("entertainment");
                  }}
                >
                  Entertainment
                </button>
              </li>
              <li>
                <button
                  className={`${styles.productCategory} ${
                    selectedCategory === "lifestyle" ? styles.active : ""
                  }`}
                  onClick={() => {
                    setSearch("Lifestyle");
                    setSelectedCategory("lifestyle");
                  }}
                >
                  Lifestyle
                </button>
              </li>
              <li>
                <button
                  className={`${styles.productCategory} ${
                    selectedCategory === "shopping" ? styles.active : ""
                  }`}
                  onClick={() => {
                    setSearch("Shopping");
                    setSelectedCategory("shopping");
                  }}
                >
                  Shopping
                </button>
              </li>
              <li>
                <button
                  className={`${styles.productCategory} ${
                    selectedCategory === "fintech" ? styles.active : ""
                  }`}
                  onClick={() => {
                    setSearch("Fintech");
                    setSelectedCategory("fintech");
                  }}
                >
                  Fintech
                </button>
              </li>
              <li>
                <button
                  className={`${styles.productCategory} ${
                    selectedCategory === "business" ? styles.active : ""
                  }`}
                  onClick={() => {
                    setSearch("Business");
                    setSelectedCategory("business");
                  }}
                >
                  Business
                </button>
              </li>
              <li>
                <button
                  className={`${styles.productCategory} ${
                    selectedCategory === "game" ? styles.active : ""
                  }`}
                  onClick={() => {
                    setSearch("Game");
                    setSelectedCategory("game");
                  }}
                >
                  Game
                </button>
              </li>
            </ul>
          </div>
          <ul className={styles.productList}>
            {(search === "Communication" || search === "") && (
              <li className={styles.bannerServices}>
                <a href="https://linecorp.com/en/pr/news/en/2020/3534">
                  <div className={styles.bannerImage}>
                    <img src="/images/services/Banner.png" alt="Banner" />
                  </div>
                </a>
              </li>
            )}
            {filteredProducts.map((product) => (
              <li key={product.id} className={`${styles.endCont} ${styles.product}`}>
                <a className={styles.forSmallScreen} href="">
                  <div className={styles.productIcon}>
                    <img src={product.image} alt={product.Title} />
                  </div>
                  <div className={styles.productText}>
                    <h3 className={styles.productTitle}>{product.Title}</h3>
                    <div className={styles.textDescription}>
                      {product.description}
                    </div>
                  </div>
                </a>
                <div className={styles.productLink}>
                  <ul className={styles.productLinkLDisplay}>
                    {product.appStoreUrl && (
                      <li>
                        <a
                          href={product.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => handleMouseEnter("apple")}
                          onMouseLeave={handleMouseLeave}
                        >
                          <span>
                          <div className={`${styles.appStore} ${styles.siteIcon}`} >
                            <img
                              src={
                                hoveredIcon === "apple"
                                  ? "/images/services/download1.png"
                                  : "/images/services/IconSite.png"
                                }
                                alt="Apple Store"
                              />
                            </div>
                          </span>
                          <span>Apple Store</span>
                        </a>
                      </li>
                    )}
                    {product.googleStoreUrl && (
                      <li>
                        <a
                          href={product.googleStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => handleMouseEnter("googlePlay")}
                          onMouseLeave={handleMouseLeave}
                        >
                          <span>
                          <div className={`${styles.googlePlay} ${styles.siteIcon}`}>
                            <img
                              src={
                                hoveredIcon === "google"
                                  ? "/images/services/download1.png"
                                  : "/images/services/IconSite.png"
                                }
                                alt="Google Play"
                              />
                            </div>
                          </span>
                          <span>Google Play</span>
                        </a>
                      </li>
                    )}
                    {product.desktopUrl && (
                      <li>
                        <a
                          href={product.desktopUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => handleMouseEnter("desktop")}
                          onMouseLeave={handleMouseLeave}
                        >
                          <span>
                          <div className={`${styles.desktop} ${styles.siteIcon}`}>
                            <img
                              src={
                                hoveredIcon === "desktop"
                                  ? "/images/services/download1.png"
                                  : "/images/services/IconSite.png"
                                }
                                alt="Desktop"
                              />
                            </div>
                          </span>
                          <span>Desktop</span>
                        </a>
                      </li>
                    )}
                    {product.moreDetailsUrl && (
                      <li>
                        <a
                          href={product.moreDetailsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>
                            <div className={`${styles.moreDetails} ${styles.siteIcon}`}>
                              <img
                                src="images/services/IconSite.png"
                                alt="More Details"
                              />
                            </div>
                          </span>
                          <span>More Details</span>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;