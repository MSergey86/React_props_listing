import "../../css/main.css"

function currency (item) {
  if (item.currency_code === 'USD') {
    return (
    <p className="item-price">$ {item.price}</p>
    )
  }
  if (item.currency_code === 'EUR') {
    return (
    <p className="item-price">€ {item.price}</p>
    )
  }
  else {
    return ( 
  <p className="item-price">{item.currency_code} {item.price}</p>
    )
 }
}

function length (title) {
  if (title != undefined && title.length < 50) {
    return (
      <p className="item-title">{title}</p>
    )
  }
  else {
    return (
      <p className="item-title">{title} ...</p>
    )    
  }

}

function classLevel (qty) {
    if (qty < 11) {
      return (
        <p className="item-quantity level-low">{qty} left</p>
      )
    }
    else if (qty > 20) {
      return (
        <p className="item-quantity level-high">{qty} left</p>
      )
    }
    else {
      return (
        <p className="item-quantity level-medium">{qty} left</p>
      )
    }

}

function Listing({items}) {
    interface items {
        listing_id: number;
        url: string;
        MainImage: string;
        title: string;
        currency_code: string;
        price: string;
        quantity: number;
    }

    return (
            <div className="item-list">
              {items.map((e) => (
              <div className="item" key = {e.listing_id}>
                <div className="item-image">
                  <a href={e.url}>
                    <img src={e.MainImage && e.MainImage.url_570xN} alt=''/>
                  </a>
                </div>
                <div className="item-details">
    
                  {length(e.title)}
                  {currency(e)}
                  {classLevel(e.quantity)}                

                </div>
              </div>
              ))}
            </div>
    )
}

export default Listing
