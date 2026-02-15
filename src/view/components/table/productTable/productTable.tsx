import React from "react";
import SellButton from "../../button/sellButton/sellButton";
import "./productTable.css";
import useViewModel from "./useViewModel";

const ProductTable: React.FC = () => {
  const {
    tableHead,
    allProduct,
    formatDate,
    onSellProduct,
    total,
    isShowNavbar,
    onShowFilter,
    totalValue,
  } = useViewModel();

  const headerRef = React.useRef<HTMLDivElement>(null);
  const bodyRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (headerRef.current) {
      headerRef.current.scrollLeft = e.currentTarget.scrollLeft;
    }
  };

  return (
    <div className="productTable-group-layout">
      <div className={`productTable-wrapper ${isShowNavbar} ${onShowFilter}`}>
        <div className="productTable-scroll-container">
          <div className="productTable-header" ref={headerRef}>
            {tableHead.map((item1) => (
              <div className={`productTable-header-cell ${item1}`} key={item1}>
                <text className="productTable-text head">{item1}</text>
              </div>
            ))}
          </div>
          <div className="productTable-body" ref={bodyRef} onScroll={handleScroll}>
            {tableHead.map((item1) => {
              return (
                <div
                  className={`productTable-column-layout ${item1}`}
                  key={item1}
                >
                  {allProduct.map((item2, index) => {
                  return (
                    <div
                      key={index}
                      className={`productTable-row-layout ${item2.stock < 10 ? "almost" : ""}`}
                    >
                      {item1 === "action" ? (
                        <div className="productTable-action-layout">
                          <SellButton
                            title="sell"
                            stock={item2.stock}
                            onClick={() => {
                              if (item2.stock > 0) {
                                onSellProduct(item2.id, item2.stock);
                              }
                            }}
                          />
                        </div>
                      ) : (
                        <text
                          className={`productTable-text ${
                            item1 !== "stock"
                              ? ""
                              : item2.stock < 10
                                ? "outOfStock"
                                : ""
                          }`}
                        >
                          {item1 === "id"
                            ? item2.id
                            : item1 === "name"
                              ? item2.name
                              : item1 === "type"
                                ? item2.type
                                : item1 === "sku"
                                  ? item2.sku
                                  : item1 === "price"
                                    ? item2.price
                                    : item1 === "stock"
                                      ? item2.stock
                                      : item1 === "createDate"
                                        ? formatDate(item2.createdAt)
                                        : formatDate(item2.updatedAt)}
                        </text>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        </div>
      </div>
      <div className="productTable-detail-layout">
        <text className="productTable-text">
          total: {total} {totalValue ? `| total value: ${totalValue}` : ""}
        </text>
      </div>
    </div>
  );
};

export default ProductTable;
