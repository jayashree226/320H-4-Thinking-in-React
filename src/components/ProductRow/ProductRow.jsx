function ProductRow({product}) {
  console.log(product);

  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

    return (
      <>
      <tr>
      
      <td></td>
      <td>{name}</td>
      <td>{product.price}</td>
      </tr>
       
      </>
    )
  }
  
  export default ProductRow;