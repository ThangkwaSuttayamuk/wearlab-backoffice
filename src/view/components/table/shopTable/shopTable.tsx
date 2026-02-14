import ArrowLeft from "./../../../../assets/images/arrowLeft.png";
import ArrowLeftUnactive from "./../../../../assets/images/arrowLeftUnactive.png";
import ArrowRight from "./../../../../assets/images/arrowRight.png";
import ArrowRightUnactive from "./../../../../assets/images/arrowRightUnactive.png";
import Bin from "./../../../../assets/images/bin.png";
import Edit from "./../../../../assets/images/edit.png";
import "./shopTable.css";
import useViewModel from "./useViewModel";

const ShopTable: React.FC = () => {
  const {
    tableHead,
    allProduct,
    setTypeDialog,
    setId,
    getProductById,
    formatDate,
    page,
    allPage,
    startItem,
    onCheckPrevious,
    onCheckNext,
    onPrevious,
    onNext,
    total,
  } = useViewModel();

  return (
    <div className="shopTable-group-layout">
      <div className="shopTable-layout">
        {tableHead.map((item1) => {
          return (
            <div className={`shopTable-column-layout ${item1}`}>
              <div className="shopTable-row-layout head">
                <text className="shopTable-text head">{item1}</text>
              </div>
              {allProduct.map((item2, index) => {
                return (
                  <div className="shopTable-row-layout">
                    {item1 === "action" ? (
                      <div className="shopTable-action-layout">
                        <img
                          src={Edit}
                          className="shopTable-action-icon"
                          alt="edit"
                          onClick={() => {
                            setId(item2.id);
                            getProductById(item2.id);
                            setTypeDialog("Update Product");
                          }}
                        />
                        <img
                          src={Bin}
                          className="shopTable-action-icon"
                          alt="bin"
                          onClick={() => {
                            setId(item2.id);
                            setTypeDialog("Delete Product");
                          }}
                        />
                      </div>
                    ) : (
                      <text
                        className={`shopTable-text ${
                          item1 !== "status"
                            ? ""
                            : item2.status === "Out Of Stock"
                            ? "outOfStock"
                            : "available"
                        }`}
                      >
                        {item1 === "id"
                          ? item2.id
                          : item1 === "name"
                          ? item2.name
                          : item1 === "type"
                          ? item2.type
                          : item1 === "status"
                          ? item2.status
                          : item1 === "price"
                          ? item2.price
                          : item1 === "salePrice"
                          ? item2.saleprice
                          : item1 === "owner"
                          ? item2.ownername
                          : item1 === "createDate"
                          ? formatDate(item2.createdate)
                          : formatDate(item2.updatedate)}
                      </text>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="shopTable-detail-layout">
        <text className="shopTable-text">
          Showing {startItem + 1} - {startItem + 15} of {total}
        </text>
        <text className="shopTable-text">
          Page {page} / {allPage}
        </text>
        <div className="shopTable-icon-layout">
          <img
            src={onCheckPrevious() ? ArrowLeft : ArrowLeftUnactive}
            alt="left"
            className="shopTable-icon"
            onClick={() => {
              onPrevious();
            }}
          />
          <img
            src={onCheckNext() ? ArrowRight : ArrowRightUnactive}
            alt="right"
            className="shopTable-icon"
            onClick={() => {
              onNext(); 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopTable;
