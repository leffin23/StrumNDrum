/* eslint-disable react/prop-types */
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { products } from '../utils/products';
// Create styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },

  contact:{
    marginTop: "auto", 
    marginLeft: "auto"
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  image: {
    width: 60,
    height: 60,
    marginLeft: 'auto'
  },
  table: {
    fontSize: 16,
    display: 'table',
    width: 'auto',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1pt solid black',
    marginBottom: 5,
    padding: 5,
    alignItems: 'center',
  },
  tableCell: {
    flex: 1,
    padding: 5,
  },
  total: {
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 'auto'
  },
  price:{
     marginLeft: 'auto'
  }
});

const OrderPDF = ({ email, shippingAddress, items, total }) => {

  const getProductInfo = (id, selectedVariant) => {
    const product = products.find((product) => product.id === id);
    if (product) {
      return { ...product, selectedVariant };
    }
    return null;
  };


return( 
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Order Details</Text>
        <Text style={styles.text}>Email: {email}</Text>
        <Text style={styles.text}>Shipping Address: {shippingAddress.address_line_1}, {shippingAddress.admin_area_1}, {shippingAddress.country_code}</Text>
      </View>

      <View style={styles.section}>
          <Text style={styles.heading}>Items:</Text>
          <View style={styles.table}>
            {items.map((item, index) => {
              const productInfo = getProductInfo(item.productId, item.selectedVariant);
              return (
                <View key={index} style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text>{productInfo?.name}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text>x{item.quantity}</Text>
                  </View>
                  <View style={[styles.tableCell,styles.price]}>
                    <Text>{productInfo?.price} €</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Image style={styles.image} src={item.selectedVariant.img[0]} />
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.total}>Total: {total} €</Text>
        </View>

        <View style={[styles.section, styles.contact]}>
        <Text style={styles.heading}>Strum&Drum</Text>
        <Text style={styles.text}>Email: strum&drum@gmail.com</Text>
        <Text style={styles.text}>Address: Somwhere 17, World, 77777</Text>
      </View>
    </Page>
  </Document>
)};

export default OrderPDF;